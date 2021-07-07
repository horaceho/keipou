<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">棋譜</h3>
  </div>
  <ul class="py-2 px-4 sm:px-6">
    <li v-for="item in data">{{ item.name }} {{ item.type }}</li>
  </ul>
</template>

<script>
const url = "https://api.github.com/repos/yaumati/keipou/contents/public/棋譜/";

export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    console.log("pous mounted()");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        console.log(data);
      })
      .catch((error) => console.error(error));
  },
  unmounted() {
    console.log("pous unmounted()");
  },
};
</script>
