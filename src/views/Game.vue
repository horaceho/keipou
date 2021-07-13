<template>
  <Board :fen="fen" init="idle" />
</template>

<script>
import Board from './Board.vue'

export default {
  props: {
    fen: { type: String, default: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r - - 0 1" },
  },
  components: {
    Board,
  },
}
</script>
