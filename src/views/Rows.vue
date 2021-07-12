
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="pt-6 pb-6">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 md:max-w-7xl md:px-8">
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 gap-4 items-start md:grid-cols-3 md:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 md:col-span-2">
            <section aria-labelledby="section-1-title">
              <h2 class="sr-only" id="section-1-title">Section title</h2>
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  {{ single.code }}
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  {{ double.code }}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Float :icons="icons" @onTapped="onTapped" @onTapTap="onTapTap"/>
</template>

<script>
import Float from '../components/Float.vue'

export default {
  components: {
    Float,
  },
  methods: {
    onTapped(event) {
      this.single.code = event.icon.code;
      console.log('single', event.icon);
    },
    onTapTap(event) {
      this.double.code = event.icon.code;
      console.log('double', event.icon);
    },
  },
  data() {
    return {
      single: {
        code: "Hello",
      },
      double: {
        code: "World",
      },
      icons: [
        {
          name: "↺",
          code: "undo",
        },
        {
          name: "◁",
          code: "back",
        },
        {
          name: "▶",
          code: "next",
        },
        {
          name: "⌂",
          code: "home",
        },
      ],
    };
  },
}
</script>
