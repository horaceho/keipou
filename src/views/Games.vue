<template>
  <div class="">
    <Board fen="rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r - - 0 1" />
    <div class="mt-8"></div>
    <Board fen="9/9/9/9/9/9/9/9/9/9 r - - 0 1" />
    <div class="mt-8"></div>
    <Board fen="rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/9/1C5C1/9/RN2K2NR r - - 0 1" />
    <div class="mt-8"></div>
    <Board fen="2baka3/3P3N1/bN7/7nc/9/4C1P2/P5n1P/B3R3B/4Apr2/2RAK3c r - - 0 1" />
    <div class="mt-8"></div>
    <Board fen="4k4/9/3aP3b/p8/9/6n2/2P3p2/4R4/3p1p3/4K4 r - - 0 1" />
    <div class="mt-8"></div>
    <Board fen="C3kab2/4a4/n3c1n2/p2Np1p2/1R4P2/1R7/P3P4/4B4/2Cp1p3/c1rAK1N2 r - - 0 1" />
    <div class="mt-8"></div>
    <Board fen="1rbckaP2/3PaP1r1/1P2b4/1R7/Nn7/CRBp1n3/4C4/9/4p1p2/1c3K3 r - - 0 1" />
  </div>
</template>

<script>
import Board from './Board.vue'

export default {
  components: {
    Board,
  },
}
</script>
