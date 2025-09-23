<script lang="ts" setup>
import Item from './Item.vue'
</script>

<template>
  <div
    class="flex justify-around fixed w-full bottom-0 h-20 bg-white items-center border-t-2 border-t-gray-400"
  >
    <Item :is-active="true" label="Home" icon="pi pi-home" />
    <Item :is-active="false" label="Start" icon="pi pi-play" />
    <Item :is-active="false" label="Map" icon="pi pi-map" />
    <Item :is-active="false" label="Profile" icon="pi pi-user" />
  </div>
</template>
