<template>
  <div
    :class="`flex items-center ${width} h-10 relative`"
  >
    <div class="absolute left-0">
      <img
        src="@/assets/svg/header/Avatar.svg"
        class="w-[30px]"
        alt="Avatar"
      >
    </div>
    <div class="absolute left-5">
      <img
        src="@/assets/svg/card/avatar_2.svg"
        class="w-[30px]"
        alt="Avatar"
      >
    </div>
    <div class="absolute left-10">
      <img
        src="@/assets/svg/card/avatar_3.svg"
        class="w-[30px]"
        alt="Avatar"
      >
    </div>
    <div class="absolute left-15">
      <img
        src="@/assets/svg/card/avatar_4.svg"
        class="w-[30px]"
        alt="Avatar"
      >
    </div>
    <div class="absolute left-20 cursor-pointer">
      <img
        src="@/assets/svg/card/black_circle_plus.svg"
        alt="Avatar"
      >
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  width: String;
}
defineProps<Props>();
</script>
