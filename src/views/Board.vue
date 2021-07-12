<template>
  <div class="flex mt-2">
    <div class="flex-auto m-2" v-on:click.self="onBoxTapped">
      <div v-if="mode === 'edit'">
        <div class="grid grid-cols-1 place-items-end">
          <div v-for="grid in headBox" :key="grid.index">
            <div class="w-8">
              <Piece :grid="grid" @onTapped="onHeadBoxTapped" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-9 mx-auto m-2 w-72 h-80 bg-board bg-no-repeat">
        <div v-for="grid in grids" :key="grid.index">
          <div class="w-8">
            <Piece :grid="grid" @onTapped="onPieceTapped" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-auto m-2 pt-16" v-on:click.self="onBoxTapped">
      <div v-if="mode === 'edit'">
        <div class="grid grid-cols-1">
          <div v-for="grid in tailBox" :key="grid.index">
            <div class="w-8">
              <Piece :grid="grid" @onTapped="onTailBoxTapped" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="false && mode === 'play'">
    <Float :icons="playIcons" @onTapped="onFloatTapped" />
  </div>
  <div v-if="false && mode === 'edit'">
    <Float :icons="editIcons" @onTapped="onFloatTapped" />
  </div>
</template>

<script>
import Piece from "../components/Piece.vue";
import Float from '../components/Float.vue'

const Icons = {
  play: [
    {
      name: "✎",
      code: "edit",
    },
    {
      name: "◁",
      code: "back",
    },
    {
      name: "▶",
      code: "next",
    },
    {
      name: "⌂",
      code: "home",
    },
  ],
  edit: [
    {
      name: "✓",
      code: "play",
    },
    {
      name: "⌂",
      code: "home",
    },
  ],
};

export default {
  components: {
    Piece,
    Float,
  },
  computed: {
    playIcons() {
      return Icons['play'];
    },
    editIcons() {
      return Icons['edit'];
    },
  },
  methods: {
    onPieceTapped(event) {
      console.log("onPieceTapped");
      if (this.grids[event.index].tapped) {
        this.grids[event.index].tapped = false;
        let position = this.taps.indexOf(event.index);
        if (position > -1) {
          this.taps.splice(position, 1);
        }
      } else {
        this.grids[event.index].tapped = true;
        this.taps.push(event.index);
      }

      if (this.taps.length === 2) {
        if ("rnhbeakcpRNHBEAKCP".indexOf(this.grids[this.taps[0]].code) > -1) {
          this.grids[this.taps[1]].code = this.grids[this.taps[0]].code;
          this.grids[this.taps[0]].code = "1";
        }
        this.clearTaps();
      }
    },
    onBoxTapped() {
      console.log("onBoxTapped");
      if (this.mode !== "edit") {
        this.mode = "edit";
      } else {
        this.mode = "play";
      }
    },
    onHeadBoxTapped(event) {
      console.log("onHeadBoxTapped");
      if (this.headBox[event.index].code !== "1") {
        this.headBox[event.index].tapped = this.headBox[event.index].tapped ? false : true;
      }
    },
    onTailBoxTapped(event) {
      console.log("onHeadBoxTapped");
      if (this.tailBox[event.index].code !== "1") {
        this.tailBox[event.index].tapped = this.tailBox[event.index].tapped ? false : true;
      }
    },
    onFloatTapped(event) {
      switch (event.icon.code) {
        case "edit":
          this.mode = "edit";
          break;
        case "play":
          this.mode = "play";
          break;
        case "back":
          break;
        case "next":
          break;
        case "home":
          break;
      }
    },
    clearTaps() {
      this.grids.forEach(function(grid) {
        grid.tapped = false;
      });
      this.taps = [];
    },
    fenToGrids(fen) {
      let parts = fen.split(" ");
      let grids = [];
      if (parts.length > 0) {
        let lines = parts[0].split("/");
        if (lines.length === 10) {
          for (let line of lines) {
            let chars = line.split("");
            for (let one of chars) {
              if (one.match(/\d/)) {
                for (let i = 0; i < Number(one); i++) {
                  grids.push({
                    index: grids.length,
                    code: "1",
                    tapped: false,
                  });
                }
              } else {
                grids.push({
                  index: grids.length,
                  code: one,
                  tapped: false,
                });
              }
            }
          }
        }
      }
      return grids;
    },
    strToBox(str) {
      let grids = [];
      let chars = str.split("");
      for (let one of chars) {
        if (one.match(/\d/)) {
          for (let i = 0; i < Number(one); i++) {
            grids.push({
              index: grids.length,
              code: "1",
              tapped: false,
            });
          }
        } else {
          grids.push({
            index: grids.length,
            code: one,
            tapped: false,
          });
        }
      }
      return grids;
    }
  },
  props: {
    fen: { type: String, default: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/9/1C5C1/9/RN2K2NR r - - 0 1" },
    init: { type: String, default: "null" },
  },
  data() {
    return {
      grids: [],
      headBox: [],
      tailBox: [],
      mode: "idle", // play, edit
      turn: "red",
      move: 0,
      taps: [],
    };
  },
  mounted() {
    this.grids = this.fenToGrids(this.fen);
    this.headBox = this.strToBox("krncabpx");
    this.tailBox = this.strToBox("XPBACNRK");
    this.mode = this.init; // null, idle
    console.log("board mounted()");
  },
  unmounted() {
    console.log("board unmounted()");
  },
};
</script>
