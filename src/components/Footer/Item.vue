<script lang="ts" setup>
const props = defineProps({
  icon: String,
  label: String,
  isActive: Boolean,
})
</script>
<template>
  <div>
    <div v-if="props.isActive" class="flex flex-col p-3 items-center bg-blue-400 rounded-lg">
        <span :class="icon"/>
        <span class="text-sm">{{ label }}</span>
    </div>
    <div v-else class="p-3">
      <span :class="icon"/>
    </div>
  </div>
</template>
