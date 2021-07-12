<template>
  <div class="absolute bottom-0 right-0"> <!-- rounded-md bg-gray-100 shadow-md -->
    <div v-for="(icon, index) in this.icons" :key="index">
      <div class="h-16 w-16 flex justify-center items-center filter drop-shadow">
        <button
          class="text-gray-500 hover:text-black text-2xl text-center"
          v-on:click="onTapped(index)"
          v-on:dblclick="onTapTap(index)"
        >
          {{ icon.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<!--
    ◁ ▷ ⎌ ⟲ ⟳ ⎌ ↺ ↻ ⌂ ⎈ ⌃ ☰ 𝌆  ⇤ ⇥ ↤ ↦ ⁕ ⁕ ⁙ ⁘ ⁖ ⁞ ⁝ ⁚ ‧ ․ ‥ …

    Ҡ 𝔎𝔢𝔦𝔭𝔬𝔲 Ҡҽìքօմ ӄɛɨքօʊ K̶̡͎̪̠͓̭̱͖̣̦̊̿̈́̇è̵̡̥̳̰͔̺̇͗̅̐͘͜į̴̟̰̺̻̖̰̗̬̿̒̑̉̒̉̀̈́p̶̧̡͚̳̞̜̒̇̎̉̆̒͊͜͠ờ̶̝͓̹͕̈́͊̇̃ȗ̸̧͙͔̳̾̉͘͜ͅ
-->

<script>
export default {
  props: {
    icons: Object, // e.g.: { code: "undo", name: "↺" }
  },
  emits: [
    "onTapped",
    "onTapTap",
  ],
  methods: {
    onTapped(at) {
      this.$emit("onTapped", {
        icon: this.icons[at],
      });
    },
    onTapTap(at) {
      this.$emit("onTapTap", {
        icon: this.icons[at],
      });
    },
  },
};
</script>
