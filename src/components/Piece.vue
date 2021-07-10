<template>
  <div v-if="grid.side === 'none'">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    </svg>
  </div>
  <div v-if="grid.side === 'red'">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64.0" fill="white" />
      <circle cx="64" cy="64" r="54.0" fill="none" stroke="black" stroke-width="4" />
      <text x="26" y="90" font-size="78" font-weight="bold" fill="black">
        {{ grid.name }}
      </text>
    </svg>
  </div>
  <div v-else-if="grid.side === 'black'">
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64.0" fill="white" />
      <circle cx="64" cy="64" r="56.0" fill="black" />
      <text x="26" y="90" font-size="75" font-weight="bold" fill="white">
        {{ grid.name }}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    grid: Object,
  },
};
</script>
