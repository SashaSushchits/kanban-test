<template>
  <nav class="bg-white border-b border-gray-200">
    <div
      class="flex flex-wrap justify-between items-center mx-auto py-4 px-8"
    >
      <div class="flex w-1/2">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="@/assets/svg/header/Logo.svg" alt="Logo" />
        </a>
        <img
          src="@/assets/svg/header/Rectangle.svg"
          class="mx-5"
          alt="Rectangle"
        />
        <div class="flex items-center">
          <img
            src="@/assets/svg/header/trello-mark-blue.svg"
            alt="trello-mark-blue"
          />
          <h4 class="ml-[5px] leading-[24px]">Boards</h4>
        </div>
        <img
          src="@/assets/svg/header/Rectangle.svg"
          class="mx-5"
          alt="Rectangle"
        />
        <span class="mdi mdi-magnify text-2xl text-dim_dark md:hidden"></span>
        <div class="relative w-2/4 hidden md:block">
          <input
            type="text"
            id="search-navbar"
            class="w-full h-[30px] block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-[#F4F4F4]"
          />
          <span class="mdi mdi-magnify text-2xl absolute top-1/2 right-2 -translate-y-1/2 text-dim_dark"></span>
        </div>
      </div>
    </div>
  </nav>

</template>
