<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    console.log("main mounted()");
  },
  unmounted() {
    console.log("main unmounted()");
  },
};
</script>
