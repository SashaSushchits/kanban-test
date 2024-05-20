<template>
  <div class="flex gap-3 sm:gap-6">
    <div
      v-for="image in images"
      :key="image.id"
      class="flex items-center"
    >
      <span class="text-sm opacity-20">{{ count + image.text }}</span>
      <img
        :src="`${image.src}`"
        class="mr-2 w-[30px] sm:mr-0 sm:w-[24px] cursor-pointer"
        :alt="image.alt"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
  count?: number;
}
defineProps<Props>();

const images = ref([
  {
    id: 0,
    src: require("@/assets/svg/card/message.svg"),
    alt: "plus",
    text: "3",
  },
  {
    id: 1,
    src: require("@/assets/svg/card/heart.svg"),
    alt: "alert",
    text: "1",
  },
  {
    id: 2,
    src: require("@/assets/svg/card/attach.svg"),
    alt: "bell",
    text: "5",
  },
]);
</script>
