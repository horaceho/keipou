<template>
  <div class="grid grid-cols-1">
    <div v-for="item in items" :key="item.index">
      <div>
        <Menu :item="item" @onTapped="onMenuItemTapped" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
  components: {
    Menu,
  },
  computed: {
    items() {
      return this.strToMenus(this.names);
    },
  },
  methods: {
    onMenuItemTapped(event) {
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
  props: {
    names: String,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>
