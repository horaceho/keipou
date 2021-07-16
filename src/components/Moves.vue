<template>
  <div class="flex flex-wrap justify-center m-2 bg-pink-50">
    <div class="p-4 cursor-pointer bg-blue-50" v-on:click.stop="onTappedPrev">
      ◁
    </div>
    <div class="p-4 cursor-pointer">
      {{ name }}
    </div>
    <div class="p-4 cursor-pointer bg-blue-50" v-on:click.stop="onTappedNext">
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
      return this.moves.length > 0 ? this.moves[this.at].from + "・" + this.moves[this.at].to : "・";
    },
    count() {
      return this.moves.length;
    },
  },
  methods: {
    onTapped() {
      this.$emit("onTapped", {
        index: this.at,
      });
    },
    onTappedPrev() {
      console.log("onTappedPrev", this.at, this.moves);
      if (this.at > 0) {
        this.at -= 1;
        this.$emit("onTapped", {
          index: this.at,
        });
      }
    },
    onTappedNext() {
      console.log("onTappedNext", this.at, this.moves);
      if (this.at + 1 < this.moves.length) {
        this.at += 1;
        this.$emit("onTapped", {
          index: this.at,
        });
      }
    },
  },
  data() {
    return {
      at: 0,
    }
  },
  mounted() {
    this.at = this.index;
  },
  unmounted() {
  },
};
</script>
