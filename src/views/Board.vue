<template>
  <div class="grid grid-cols-9 mx-auto m-5 w-72 h-80 bg-board bg-no-repeat">
    <div v-for="grid in grids">
      <div class="w-8">
        <Piece :grid="grid" @onTapped="onTapped" />
      </div>
    </div>
  </div>
</template>

<script>
import Piece from "../components/Piece.vue";

export default {
  components: {
    Piece,
  },
  props: {
    fen: { type: String, default: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/9/1C5C1/9/RN2K2NR r - - 0 1" },
  },
  mounted() {
    console.log("board mounted()");
  },
  unmounted() {
    console.log("board unmounted()");
  },
  setup(props) {
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

    function onTapped(index) {
      console.log(index);
    }

    function fenToGrids(fen) {
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
                    name: ".",
                    side: "none",
                  });
                }
              } else {
                let side = "none";
                if (one === one.toUpperCase()) { side = "red"; }
                if (one === one.toLowerCase()) { side = "black"; }
                grids.push({
                  index: grids.length,
                  name: Names[one],
                  side: side,
                });
              }
            }
          }
        }
      }
      return grids;
    };

    let grids = fenToGrids(props.fen);

    return {
      grids,
      onTapped,
    };
  },
};
</script>
