<template>
  <div class="flex flex-wrap justify-center">
    <div class="hidden cursor-pointer" v-on:click.stop="onTapped('prev')">
      ◁
    </div>
    <div class="w-48 text-lg md:text-3xl text-center cursor-pointer text-gray-600" v-on:click.stop="onTapped('name')">
      {{ name }}
    </div>
    <div class="hidden cursor-pointer" v-on:click.stop="onTapped('next')">
      ▷
    </div>
  </div>
</template>

<script>
export default {
  props: {
    moves: Object,
    index: Number,
  },
  emits: [
    "onTapped"
  ],
  computed: {
    name() {
      return (this.moves.length > 0) ? this.moves[this.index].name : "　";
    },
    count() {
      return this.moves.length;
    },
  },
  methods: {
    onTapped(part) {
      this.$emit("onTapped", {
        part: part,
      });
    },
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  unmounted() {
  },
};
</script>
