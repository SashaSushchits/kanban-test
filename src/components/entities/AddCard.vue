<template>
  <div
    class="flex items-center justify-center leading-24 border border-dashed border-gray-200 rounded-lg min-w-[362px] min-h-[160px] cursor-pointer"
    @click.stop="emit('update:show', true)"
  >
    + Add new card
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:show'])
</script>