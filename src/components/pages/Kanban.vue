<template>
  <Container
    class="flex flex-row items-center ml-[30px] overflow-x-auto h-screen gap-3 md:gap-[30px]"
    group-name="cols"
    tag="div"
    orientation="horizontal"
    @drop="onColumnDrop($event)"
  >
    <Draggable
      v-for="(column, columnIndex) in indexStore.tasks"
      :key="column.id"
      class="w-[362px] rounded-lg min-w-[362px]"
    >
      <div class="flex flex-col">
        <div
          class="cursor-move rounded-lg py-5 px-4 bg-bg_card flex justify-between mb-3 group/item"
        >
          <h4
            v-if="itemId !== column.id || !isEdit"
            class="ml-[5px] font-bold leading-24 h-7"
          >
            {{ column.name }}
          </h4>
          <input
            v-show="itemId === column.id && isEdit"
            v-model="column.name"
            class="px-1 ps-3 rounded border bg-[#F4F4F4] h-7"
            type="text"
            @change="isEdit = false"
          >
          <div class="flex gap-4">
            <button
              class="text-black visible sm:invisible sm:group-hover/item:visible"
              type="button"
              @click.stop="deleteColumn(column.id)"
            >
              <i class="mdi mdi-close text-6" />
            </button>
            <button
              class="text-black visible sm:invisible sm:group-hover/item:visible"
              type="button"
              @click.stop="edit(column.id)"
            >
              <i class="mdi mdi-pencil text-6" />
            </button>
          </div>
        </div>
        <!-- Column -->
        <Container
          class="flex-grow overflow-y-auto overflow-x-hidden"
          group-name="col-items"
          :get-child-payload="getCardPayload(column.id)"
          @drop="(e: any) => onCardDrop(column.id, e)"
        >
          <!-- Items -->
          <Card
            v-for="(item, index) in column.children"
            :key="`${item.id}`"
            v-model:task="column.children[index]"
            :column-index="columnIndex"
          />
        </Container>
      </div>
      <AddCard
        v-model:show="showModal"
        v-model:click-column="clickColumn"
        :column-index="columnIndex"
      />
      <CreateNote
        v-model:show="showModal"
        :click-column="clickColumn"
        :column-index="columnIndex"
      />
    </Draggable>
  </Container>
</template>

<script setup lang="ts">
import { Container, Draggable } from "vue3-smooth-dnd";
import { ref, toRaw } from "vue";
import Card from "@/components/entities/Card.vue";
import AddCard from "@/components/entities/AddCard.vue";
import CreateNote from "@/components/modals/CreateNote.vue";
import { useIndexStore } from "@/stores/index";
import { Tasks, Task, TaskChild, dropResult } from "@/types/index.ts";

const indexStore = useIndexStore();

const showModal = ref<boolean>(false);
const isEdit = ref<boolean>(false);
const itemId = ref<String>('');
const clickColumn= ref<number>(0)

const edit = (id: String) => {
  isEdit.value = !isEdit.value;
  itemId.value = id;
};
const deleteColumn = (id: String) => {
  indexStore.deleteColumn(id)
};

const applyDragColumn = (arr: Tasks, dragResult: dropResult) => {
  const { removedIndex, addedIndex } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;
  const result: Tasks = [...arr];
  let itemToAdd: Task = {} as Task;
  if (removedIndex !== null) itemToAdd = result.splice(removedIndex, 1)[0];
  if (addedIndex !== null) result.splice(addedIndex, 0, itemToAdd);
  return result;
};

const applyDragCard = (arr: TaskChild[], dragResult: dropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;
  const result: TaskChild[] = [...arr];
  let itemToAdd = payload;
  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  return result;
};

const onColumnDrop = (dropResult: dropResult) => {
  let column: Tasks = [...indexStore.tasks].map((i) => toRaw(i));
  column = applyDragColumn(column, dropResult);
  indexStore.setTasks(column);
};

const onCardDrop = (columnId: String, dropResult: dropResult) => {
  if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
    const common: Tasks = [...indexStore.tasks];
    const column: Task = common.filter((p) => p.id === columnId)[0];
    const itemIndex: number = common.indexOf(column);
    const newColumn: Task = Object.assign({}, column);
    const children: TaskChild[] = newColumn.children.map((i) => toRaw(i));
    newColumn.children = applyDragCard(children, dropResult);
    common.splice(itemIndex, 1, newColumn);
    const filterEmpty = common.filter((i) => i.children.length);
    indexStore.setTasks(filterEmpty);
  }
};

const getCardPayload = (columnId: String) => {
  return (index: number) => {
    return indexStore.tasks.filter((p) => p.id === columnId)[0].children[index];
  };
};
</script>

<style scoped>
.smooth-dnd-container.horizontal {
  display: flex !important;
}
</style>
