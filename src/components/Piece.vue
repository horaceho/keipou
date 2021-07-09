<template>
  <div v-if="grid.side === 'red'">
    <div>
      <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="56.0" fill="none" stroke="black" stroke-width="8"
        />
        <text x="24" y="92" font-size="80" font-weight="bold" fill="black">
          {{ grid.name }}
        </text>
      </svg>
    </div>
  </div>
  <div v-if="grid.side === 'black'">
    <div>
      <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="58.0" fill="black" />
        <text x="24" y="92" font-size="80" font-weight="bold" fill="white">
          {{ grid.name }}
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grid: Object,
  },
};
</script>
