<template>
  <div class="m-2 flex">
    <div v-for="grid in grids">
      <div class="w-8">
        <Piece :grid="grid" />
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
    fen: { type: String, default: "abcdef" },
  },
  methods: {
    fenToGrids() {},
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log("board mounted()");
  },
  unmounted() {
    console.log("board unmounted()");
  },
  setup(props) {
    let grids = [
      {
        name: "兵",
        side: "red",
      },
      {
        name: "炮",
        side: "red",
      },
      {
        name: "車",
        side: "red",
      },
      {
        name: "馬",
        side: "red",
      },
      {
        name: "相",
        side: "red",
      },
      {
        name: "士",
        side: "red",
      },
      {
        name: "帥",
        side: "red",
      },
      {
        name: "將",
        side: "black",
      },
      {
        name: "仕",
        side: "black",
      },
      {
        name: "象",
        side: "black",
      },
      {
        name: "馬",
        side: "black",
      },
      {
        name: "車",
        side: "black",
      },
      {
        name: "砲",
        side: "black",
      },
      {
        name: "卒",
        side: "black",
      },
    ];
    length = props.fen.length;
    return {
      length,
      grids,
    };
  },
};
</script>
