<script lang="ts" setup>
import { ref } from 'vue'

const username = ref('dorian')
</script>
<template>
  <div class="flex justify-between px-12 pt-12 items-center">
    <p class="font-bold text-2xl">
      Hello, <span class="uppercase">{{ username }} 👋</span>
    </p>
    <img
      class="size-12 rounded-2xl"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.m4cVTmQQB7j4fmbXLnJZ7AHaEs%3Fpid%3DApi&f=1&ipt=500c6692ccb31213acaae45184f54a0109860276971aa836224f3936d1a19c5f&ipo=images"
      alt=""
    />
  </div>
</template>
