<script lang="ts" setup>
import Card from 'primevue/card'
</script>
<template>
  <div>
    <div class="flex gap-6 px-4">
      <Card class="w-1/2">
        <template #title>Import from strava</template>
        <template #content>
          <p class="m-0">You can import your activity data directly from Strava to get started.</p>
        </template>
      </Card>
      <Card class="w-1/2">
        <template #title>Explore the city</template>
        <template #content>
          <p class="m-0">
            Discover new routes and challenge yourself by exploring different parts of the city.
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>
