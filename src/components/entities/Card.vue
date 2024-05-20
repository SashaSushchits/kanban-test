<template>
  <Draggable v-if="task">
    <div
      class="bg-bg_card border border-gray-200 rounded-lg md:min-w-[362px] mb-3 group/item relative"
    >
      <div class="flex gap-4 absolute right-3">
        <button
          class="text-black visible sm:invisible sm:group-hover/item:visible"
          type="button"
          @click.stop="deleteNote(columnIndex, task.id)"
        >
          <i class="mdi mdi-close text-6" />
        </button>
        <button
          class="text-black visible sm:invisible sm:group-hover/item:visible"
          type="button"
          @click.stop="editNote(task.id)"
        >
          <i class="mdi mdi-pencil text-6" />
        </button>
      </div>
      <div class="flex flex-col items-center p-5 pt-6 md:items-start">
        <div v-if="task?.src">
          <img
            class="rounded-t-lg"
            :src="`${task?.src}`"
            alt="card_1"
          >
        </div>
        <div
          :class="{ 'mt-4': task?.src }"
          class="flex flex-row gap-2 mb-2"
        >
          <span
            v-for="(item, index) in task?.colorLine"
            :key="index"
            class="w-[60px] h-2 rounded-full"
            :style="`background: ${item};`"
          />
        </div>
        <h4
          v-if="itemId !== task.id || !isEdit"
          class="mb-2 leading-24 min-h-7"
        >
          {{ task.data }}
        </h4>
        <input
          v-show="itemId === task.id && isEdit"
          v-model="task.data"
          class="px-1 ps-3 mb-2 w-full rounded border border-gray-400 bg-[#F4F4F4] focus:ring-transparent focus:outline-none h-7"
          type="text"
          @change="isEdit = false"
        >
        <h5
          v-if="itemId !== task.id || !isEdit"
          class="mb-2 leading-19 text-sm opacity-40 min-h-7"
        >
          {{ task.description }}
        </h5>
        <input
          v-show="itemId === task.id && isEdit"
          v-model="task.description"
          class="px-1 ps-3 mb-2 w-full rounded border text-sm border-gray-400 bg-[#F4F4F4] focus:ring-transparent focus:outline-none h-7"
          type="text"
          @change="isEdit = false"
        >
      </div>
      <div class="flex items-center p-5 pt-0 justify-between">
        <LikeList width="w-1/2" />
        <Comments :count="task?.colorLine.length" />
      </div>
    </div>
  </Draggable>
</template>

<script setup lang="ts">
import { Draggable } from "vue3-smooth-dnd";
import { ref } from "vue";
import LikeList from "../shared/LikeList.vue";
import Comments from "../shared/Comments.vue";
import { TaskChild } from "../../types/index.ts";
import { useIndexStore } from "../../stores/index";

const indexStore = useIndexStore();

interface Props {
  columnIndex: number;
  task: TaskChild;
}
defineProps<Props>();

const isEdit = ref<boolean>(false);
const itemId = ref<String>("");

const editNote = (id: String) => {
  isEdit.value = !isEdit.value;
  itemId.value = id;
};

const deleteNote = (columnIndex: number, id: String) => {
  indexStore.deleteNote(columnIndex, id);
};
</script>
