<template>
  <div class="p-4 border-b border-gray-100">
    <div class="-ml-2 -mt-2 flex flex-wrap items-baseline">
      <h3 class="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
        {{ msg }}
      </h3>
      <p class="ml-2 mt-1 text-sm text-gray-500 truncate">© 2021</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    msg: String,
  },
  mounted() {
  },
  unmounted() {
  },
  setup(props) {
    const state = reactive({ count: 0 });
    return {
      state,
    };
  },
};
</script>
