<template>
  <div class="grid grid-cols-9 mx-auto m-5 w-72 h-80 bg-board bg-no-repeat">
    <div v-for="grid in grids" :key="grid.index">
      <div class="w-8">
        <Piece :grid="grid" @onTapped="onTapped" />
      </div>
    </div>
  </div>
</template>

<script>
import Piece from "../components/Piece.vue";

const Undef = -1;
const Space = "　"; // full-width space
const Names = {
  r: "車",
  n: "馬", h: "馬",
  b: "象", e: "象",
  a: "士",
  k: "將",
  c: "砲",
  p: "卒",
  R: "車",
  N: "馬", H: "馬",
  B: "相", E: "相",
  A: "仕",
  K: "帥",
  C: "炮",
  P: "兵",
};

export default {
  components: {
    Piece,
  },
  methods: {
    onTapped(event) {
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
        if (this.grids[this.taps[0]].side !== "none") {
          this.grids[this.taps[1]].code = this.grids[this.taps[0]].code;
          this.grids[this.taps[1]].name = this.grids[this.taps[0]].name;
          this.grids[this.taps[1]].side = this.grids[this.taps[0]].side;
          this.grids[this.taps[0]].code = ".";
          this.grids[this.taps[0]].name = Space;
          this.grids[this.taps[0]].side = "none";
        }
        this.grids.forEach(function(grid) {
          grid.tapped = false;
        });
        this.taps = [];
      }
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
                    code: ".",
                    name: Space,
                    side: "none",
                    tapped: false,
                  });
                }
              } else {
                let side = (one === one.toUpperCase()) ? "red" : "black";
                grids.push({
                  index: grids.length,
                  code: one,
                  name: Names[one],
                  side: side,
                  tapped: false,
                });
              }
            }
          }
        }
      }
      return grids;
    },
  },
  props: {
    fen: { type: String, default: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/9/1C5C1/9/RN2K2NR r - - 0 1" },
  },
  data() {
    return {
      grids: [],
      taps: [],
    };
  },
  mounted() {
    this.grids = this.fenToGrids(this.fen);
    console.log("board mounted()");
  },
  unmounted() {
    console.log("board unmounted()");
  },
};
</script>
