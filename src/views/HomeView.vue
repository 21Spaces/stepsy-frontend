<script setup lang="ts">
import { Header } from '@/components/Home/Header'
import { Home, LastRun } from '@/components/Home'
</script>

<template>
  <main class="flex flex-col gap-8">
    <Header />
    <Home />
    <LastRun />
  </main>
</template>
