<template>
  <div v-if="side === 'none'" v-on:click="onTapped">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle v-if="grid.tapped" cx="64" cy="64" r="54.0" fill="none" stroke="white" stroke-width="4" />
      <circle v-if="grid.tapped" cx="64" cy="64" r="60.0" fill="none" stroke="black" stroke-width="6" stroke-dasharray="15,5" />
    </svg>
  </div>
  <div v-if="side === 'red'" v-on:click="onTapped">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64.0" fill="white" />
      <circle cx="64" cy="64" r="54.0" fill="none" stroke="black" stroke-width="4" />
      <text x="26" y="90" font-size="78" font-weight="bold" fill="black">
        {{ name }}
      </text>
      <circle v-if="grid.tapped" cx="64" cy="64" r="62.0" fill="none" stroke="black" stroke-width="6" stroke-dasharray="15,5" />
    </svg>
  </div>
  <div v-else-if="side === 'black'" v-on:click="onTapped">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64.0" fill="white" />
      <circle cx="64" cy="64" r="56.0" fill="black" />
      <text x="26" y="90" font-size="75" font-weight="bold" fill="white">
        {{ name }}
      </text>
      <circle v-if="grid.tapped" cx="64" cy="64" r="62.0" fill="none" stroke="black" stroke-width="6" stroke-dasharray="15,5" />
    </svg>
  </div>
</template>

<script>
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
  props: {
    grid: Object,
  },
  emits: [
    "onTapped"
  ],
  computed: {
    name() {
      return Names[this.grid.code] ?? Space;
    },
    side() {
      if ("RNHBEAKCP".indexOf(this.grid.code) > -1) {
        return "red";
      } else if ("rnhbeakcp".indexOf(this.grid.code) > -1) {
        return "black";
      } else {
        return "none";
      }
    },
  },
  methods: {
    onTapped() {
      this.$emit("onTapped", {
        index: this.grid.index, 
      });
    }
  },
  data() {
    return {
    };
  },
};
</script>
