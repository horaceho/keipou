<template>
  <div class="flex mt-4">
    <div class="flex-auto m-2">
      <div v-if="mode === 'edit'">
        <div class="grid grid-cols-1 place-items-end">
          <div v-for="grid in headBox" :key="grid.index">
            <div class="w-8 md:w-16 xl:w-24">
              <Piece :grid="grid" />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="pt-72">
        <Menus names="⋯" class="place-items-end" />
      </div>
    </div>
    <div class="mx-auto m-2">
      <div class="grid grid-cols-9 bg-board bg-no-repeat">
        <div v-for="grid in grids" :key="grid.index">
          <div class="w-8 md:w-16 xl:w-24">
            <Piece :grid="grid" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-auto m-2">
      <div v-if="mode === 'edit'" class="pt-16 md:pt-32 xl:pt-48">
        <div class="grid grid-cols-1">
          <div v-for="grid in tailBox" :key="grid.index">
            <div class="w-8 md:w-16 xl:w-24">
              <Piece :grid="grid" />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <Menus names="　" />
      </div>
    </div>
  </div>
</template>

<script>
import Menus from '../components/Menus.vue';
import Piece from "../components/Piece.vue";

export default {
  components: {
    Menus,
    Piece,
  },
  computed: {
  },
  methods: {
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
    init: { type: String, default: "edit" },
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
  },
  unmounted() {
  },
};
</script>
