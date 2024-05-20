<template>
  <nav class="bg-white">
    <div class="flex flex-wrap justify-between border-b border-gray-200 mb-[30px] items-center mx-auto py-4 px-8">
      <div class="flex sm:w-1/2">
        <a
          href=""
          class="items-center space-x-3 rtl:space-x-reverse hidden sm:flex"
        >
          <img
            src="@/assets/svg/header/Logo.svg"
            alt="Logo"
          >
        </a>
        <img
          src="@/assets/svg/header/Rectangle.svg"
          class="mx-5 hidden sm:block"
          alt="Rectangle"
        >
        <div class="flex items-center">
          <img
            src="@/assets/svg/header/trello-mark-blue.svg"
            class="mr-2 w-[30px] sm:mr-0 sm:w-[24px]"
            alt="trello-mark-blue"
          >
          <h4 class="ml-[5px] leading-24 hidden sm:block">
            Boards
          </h4>
        </div>
        <img
          src="@/assets/svg/header/Rectangle.svg"
          class="mx-5 hidden sm:block"
          alt="Rectangle"
        >
        <span class="mdi mdi-magnify text-2xl text-dim_dark md:hidden" />
        <div class="relative w-2/4 hidden md:block">
          <input
            id="search-navbar"
            type="text"
            class="w-full h-[30px] block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-[#F4F4F4]"
          >
          <span
            class="mdi mdi-magnify text-2xl absolute top-4 right-2 -translate-y-1/2 text-dim_dark"
          />
        </div>
      </div>
      <div class="flex items-center justify-end gap-3 sm:w-1/2 sm:gap-[30px]">
        <div
          v-for="image in images"
          :key="`${image.id}`"
          class="flex items-center"
        >
          <img
            :src="`${image.src}`"
            class="mr-2 w-[30px] sm:mr-0 sm:w-[24px]"
            :alt="`${image.alt}`"
          >
        </div>
        <img
          src="@/assets/svg/header/Avatar.svg"
          alt="Avatar"
        >
      </div>
    </div>
    <div
      class="flex flex-wrap justify-between mb-3 items-end mx-auto px-8 sm:items-center"
    >
      <div class="flex flex-col sm:w-1/2 sm:flex-row">
        <div
          class="flex items-center font-semibold leading-24 sm:mr-24 sm:text-2xl"
        >
          Brackets
        </div>
        <div class="flex items-center">
          <img
            src="@/assets/svg/header/heart.svg"
            class="mr-2 w-4 sm:mr-0 sm:w-5"
            alt="trello-mark-blue"
          >
          <img
            src="@/assets/svg/header/public.svg"
            class="mx-2 h-[25px] sm:h-[35px]"
            alt="Rectangle"
          >
          <img
            src="@/assets/svg/header/hard.svg"
            class="h-[25px] sm:h-[35px]"
            alt="Rectangle"
          >
        </div>
      </div>
      <div class="flex items-center justify-end w-3/5 gap-3 sm:w-1/2">
        <LikeList width="w-1/5" />
        <div class="flex items-end leading-24 sm:text-xl sm:items-center">
          Menu
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Images } from "../../types/index.ts";
import LikeList from "../shared/LikeList.vue";

const images = ref<Images>([
  {
    id: "0",
    src: require("@/assets/svg/header/plus-circle-outline.svg"),
    alt: "plus",
  },
  {
    id: "1",
    src: require("@/assets/svg/header/alert-circle-outline.svg"),
    alt: "alert",
  },
  {
    id: "2",
    src: require("@/assets/svg/header/bell-outline.svg"),
    alt: "bell",
  },
]);
</script>
