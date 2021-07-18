<template>
  <div class="cursor-pointer" v-on:click.stop="onTapped" >
    <div class="w-8 h-8 md:w-16 md:h-16 pt-1 md:pt-3 text-center text-lg md:text-3xl">
      <div class="">{{ name }}</div>
    </div>
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
        name: this.item.name,
      });
    }
  },
};
</script>
