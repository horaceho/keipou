<template>
  <div class="grid grid-cols-1">
    <div v-for="item in items" :key="item.index">
      <div class="w-8">
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
  methods: {
    onMenuItemTapped(index) {
      this.$emit("onTapped", {
        index: index,
      });
      console.log("onMenuItemTapped", index);
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
      items: [],
    };
  },
  mounted() {
    console.log("menus", this.names);
    this.items = this.strToMenus(this.names);
    console.log("menus", this.names, this.items);
  },
};
</script>
