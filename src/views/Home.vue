<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      {{ name }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "Home" },
  },
  mounted() {
  },
  unmounted() {
  },
};
</script>
