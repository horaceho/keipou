<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Home
    </h3>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("home mounted()");
  },
  unmounted() {
    console.log("home unmounted()");
  },
};
</script>
