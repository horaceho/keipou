<template>
  <div v-if="grid.side === 'none'" v-on:click="onTapped">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle v-if="this.tapped" cx="64" cy="64" r="54.0" fill="none" stroke="white" stroke-width="4" />
      <circle v-if="this.tapped" cx="64" cy="64" r="60.0" fill="none" stroke="black" stroke-width="6" stroke-dasharray="15,5" />
    </svg>
  </div>
  <div v-if="grid.side === 'red'" v-on:click="onTapped">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64.0" fill="white" />
      <circle cx="64" cy="64" r="54.0" fill="none" stroke="black" stroke-width="4" />
      <text x="26" y="90" font-size="78" font-weight="bold" fill="black">
        {{ grid.name }}
      </text>
      <circle v-if="this.tapped" cx="64" cy="64" r="62.0" fill="none" stroke="black" stroke-width="6" stroke-dasharray="15,5" />
    </svg>
  </div>
  <div v-else-if="grid.side === 'black'" v-on:click="onTapped">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64.0" fill="white" />
      <circle cx="64" cy="64" r="56.0" fill="black" />
      <text x="26" y="90" font-size="75" font-weight="bold" fill="white">
        {{ grid.name }}
      </text>
      <circle v-if="this.tapped" cx="64" cy="64" r="62.0" fill="none" stroke="black" stroke-width="6" stroke-dasharray="15,5" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    grid: Object,
  },
  emits: [
    "onTapped"
  ],
  methods: {
    onTapped() {
      this.tapped = this.tapped ? false : true;
      this.$emit("onTapped", {
        index: this.grid.index, 
        tapped: this.tapped,
      });
    }
  },
  data() {
    return {
      tapped: false,
    };
  },
};
</script>
