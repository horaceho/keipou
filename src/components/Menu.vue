<template>
  <div v-on:click="onTapped">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <text x="26" y="90" font-size="78" font-weight="bold" fill="gray">
        {{ name }}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  emits: [
    "onTapped"
  ],
  computed: {
    name() {
      return this.item.name;
    },
  },
  methods: {
    onTapped() {
      this.$emit("onTapped", {
        index: this.item.index,
      });
    }
  },
  data() {
    return {
    };
  },
};
</script>
