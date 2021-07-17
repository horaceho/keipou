<template>
  <div class="flex mt-2">
    <div class="flex-auto m-2" v-on:click="onBoxTapped">
      <div v-if="mode === 'edit'">
        <div class="grid grid-cols-1 place-items-end">
          <div v-for="grid in headBox" :key="grid.index">
            <div class="w-8 md:w-16">
              <Piece :grid="grid" @onTapped="onHeadBoxTapped" />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="min-h-full">
        <Menus names="　" @onTapped="onMenuItemTapped" class="place-items-end" />
      </div>
    </div>
    <div>
      <div class="grid grid-cols-9 mx-auto m-2 bg-board bg-no-repeat">
        <div v-for="grid in grids" :key="grid.index">
          <div class="w-8 md:w-16">
            <Piece :grid="grid" @onTapped="onPieceTapped" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-auto m-2" v-on:click="onBoxTapped">
      <div v-if="mode === 'edit'" class="pt-16 md:pt-32">
        <div class="grid grid-cols-1">
          <div v-for="grid in tailBox" :key="grid.index">
            <div class="w-8 md:w-16">
              <Piece :grid="grid" @onTapped="onTailBoxTapped" />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="min-h-full">
        <Menus :names="items" @onTapped="onMenuItemTapped" />
      </div>
    </div>
  </div>
  <div>
    <Moves :moves="moves" :index="index" @onTapped="onMoveTapped" />
  </div>
</template>

<script>
import Board from "../board.js";
import Menus from "../components/Menus.vue";
import Piece from "../components/Piece.vue";
import Moves from "../components/Moves.vue";

export default {
  components: {
    Menus,
    Piece,
    Moves,
  },
  computed: {
  },
  methods: {
    pushTap(event) {
      if (this.taps.length > 0) {
        if (event.type === "grid" && event.type === this.taps[0].type) {
          if ("rnhbeakcpRNHBEAKCP".indexOf(this.grids[this.taps[0].index].code) > -1) {
            this.moves.push({
              name: this.moveToName(this.grids, this.taps[0].index, event.index),
              from: this.taps[0].index,
              to: event.index,
            });
            this.index = this.moves.length - 1;
            this.grids[event.index].code = this.taps[0].code;
            this.grids[this.taps[0].index].code = "1";
          }
          this.clearTaps();
        } else {
          if (event.type === "grid") {
            if ("rnhbeakcpRNHBEAKCP".indexOf(this.taps[0].code) > -1) {
              this.grids[event.index].code = this.taps[0].code;
              this.grids[event.index].tapped = false;
            } else if ("xX1".indexOf(this.taps[0].code) > -1) {
              this.grids[event.index].code = "1";
              this.grids[event.index].tapped = false;
            } else {
              this.clearTaps();
            }
          } else {
            this.clearTaps();
            switch (event.type) {
              case "head":
                this.headBox[event.index].tapped = true;
                this.taps.push(event);
                break;
              case "tail":
                this.tailBox[event.index].tapped = true;
                this.taps.push(event);
                break;
            };
          }
        }
      } else {
        this.taps.push(event);
      }
      this.refreshMenus();
    },
    onPieceTapped(event) {
      if (this.grids[event.index].tapped) {
        this.grids[event.index].tapped = false;
        this.clearTaps();
      } else {
        this.grids[event.index].tapped = true;
        this.pushTap({
          type: "grid",
          index: event.index,
          code: this.grids[event.index].code,
        });
      }
    },
    onBoxTapped() {
      this.toggleMenus();
    },
    onMoveTapped(event) {
      console.log("onMoveTapped");
    },
    onHeadBoxTapped(event) {
      if (this.headBox[event.index].code !== "1") {
        if (this.headBox[event.index].tapped) {
          this.headBox[event.index].tapped = false;
          this.clearTaps();
        } else {
          this.headBox[event.index].tapped = true;
          this.pushTap({
            type: "head",
            index: event.index,
            code: this.headBox[event.index].code,
          });
        }
      }
    },
    onTailBoxTapped(event) {
      if (this.tailBox[event.index].code !== "1") {
        if (this.tailBox[event.index].tapped) {
          this.tailBox[event.index].tapped = false;
          this.clearTaps();
        } else {
          this.tailBox[event.index].tapped = true;
          this.pushTap({
            type: "tail",
            index: event.index,
            code: this.tailBox[event.index].code,
          });
        }
      }
    },
    onMenuItemTapped(event) {
      if (event.name === "↺") {
        if (this.moves.length > 0) this.moves.pop();
        this.index = this.moves.length - 1;
        this.refreshMoves();
        this.refreshMenus();
      } else {
        this.toggleMenus();
      }
    },
    clearTaps() {
      this.grids.forEach(function(grid) {
        grid.tapped = false;
      });
      this.headBox.forEach(function(grid) {
        grid.tapped = false;
      });
      this.tailBox.forEach(function(grid) {
        grid.tapped = false;
      });
      this.taps = [];
    },
    toggleMenus() {
      if (this.mode !== "edit") {
        this.mode = "edit";
      } else {
        this.mode = "play";
      }
    },
    refreshMenus() {
      if (this.moves.length > 0) {
        this.items = "⋯↺";
      } else {
        this.items = "⋯";
      }
    },
    refreshMoves() {
      this.grids = this.fenToGrids(this.fen);
      for (let move of this.moves) {
        this.grids[move.to].code = this.grids[move.from].code;
        this.grids[move.from].code = "1";
      }
    },
    moveToName(grids, from, to)
    {
      let codes = grids.map(grid => grid.code).join("");
      let move = Board.move(codes, from, to);
      return move;
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
    ascii() {
      let ascii = "";
      let count = 0;
      for (let grid of this.grids) {
        ascii += grid.code;
        count += 1;
        if ((count % 9) === 0) {
          ascii += "\n";
        }
      }
      return ascii;
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
      moves: [],
      index: 0,
      items: "⋯",
      taps: [],
    };
  },
  mounted() {
    this.grids = this.fenToGrids(this.fen);
    this.headBox = this.strToBox("krncabpx");
    this.tailBox = this.strToBox("XPBACNRK");
    this.mode = this.init; // null, idle
  },
  unmounted() {
  },
};
</script>
