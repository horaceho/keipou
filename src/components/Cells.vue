<template>
  <div class="flex">
    <div v-for="item in items" :key="item.index">
      <div>
        <Cell :item="item" @onTapped="onCellTapped" />
      </div>
    </div>
  </div>
</template>

<script>
import Cell from './Cell.vue';

export default {
  props: {
    names: String,
  },
  components: {
    Cell,
  },
  computed: {
    items() {
      return this.strToMenus(this.names);
    },
  },
  methods: {
    onCellTapped(event) {
      this.$emit("onTapped", event);
    },
    strToMenus(str) {
      let items = [];
      let chars = str.split("");
      for (let one of chars) {
        items.push({
          index: items.length,
          name: one,
        });
      }
      return items;
    },
  },
  emits: [
    "onTapped"
  ],
};
</script>
