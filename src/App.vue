<template>
  <Header />
  <Kanban />
</template>

<script setup lang="ts">
import Header from "./components/nav/Header.vue";
import Kanban from "./components/pages/Kanban.vue";
// import Kanban from "./components/pages/KanbanJjj.vue";
import { onMounted } from "vue"
import { useIndexStore } from "./stores/index";
import { tasks } from "./data/index"

const indexStore = useIndexStore();

onMounted(() => {
  if(!indexStore.tasks.length) indexStore.generateNotes(tasks)
})
</script>

