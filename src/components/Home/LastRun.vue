<script lang="ts" setup>
import { ref } from 'vue'
import Card from 'primevue/card'

import Tag from 'primevue/tag'

const runs = ref([
  {
    date: '2025-07-28',
    distance: '5.2 km',
    points: 120,
    duration: '30 min',
  },
  {
    date: '2025-07-26',
    distance: '3.8 km',
    points: 90,
    duration: '25 min',
  },
  {
    date: '2025-07-24',
    distance: '6.5 km',
    points: 150,
    duration: '40 min',
  },
  {
    date: '2025-07-22',
    distance: '4.0 km',
    points: 100,
    duration: '28 min',
  },
  {
    date: '2025-07-20',
    distance: '7.1 km',
    points: 170,
    duration: '50 min',
  },
])
</script>

<template>
  <div class="flex flex-col justify-center w-full items-center gap-3">
    <div class="flex justify-between w-3/4 items-center">
      <p class="text-xl">Your last 5 runs:</p>
      <div class="flex items-center gap-3">
        <p class="text-gray-500">See all</p>
        <div class="bg-gray-300 size-8 justify-center items-center flex rounded-full">
          <span class="pi pi-angle-right"></span>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-3/4 items-center gap-6">
      <Card class="w-full" v-for="(run, index) in runs" :key="index">
        <template #title>Run of {{ run.date }}</template>
        <template #content>
          <div class="flex gap-3">
            <Tag :value="run.duration" />
            <Tag :value="run.points" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
