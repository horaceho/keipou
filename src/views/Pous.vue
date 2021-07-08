<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">棋譜</h3>
  </div>
  <ul class="py-2 px-4 sm:px-6">
    <li v-for="item in data">
      <div class="flex divide-x divide-gray-200">
        <div class="w-0 flex-1 flex">
          <a :href="`/`" class="relative w-0 flex-1 inline-flex py-2 text-sm text-gray-700 font-medium border border-transparent">
            <FolderIcon v-if="item.type === 'dir'" class="w-5 h-5 text-gray-600" aria-hidden="true" />
            <DocumentIcon v-else class="w-5 h-5 text-gray-600" aria-hidden="true" />
            <span class="ml-2">{{ item.name }}</span>
          </a>
        </div>
    </div>
    </li>
  </ul>
</template>

<script>
import { FolderIcon, DocumentIcon } from "@heroicons/vue/solid";
const url = "https://api.github.com/repos/yaumati/keipou/contents/public/棋譜";

export default {
  components: {
    FolderIcon,
    DocumentIcon,
  },
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
