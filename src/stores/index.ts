import { defineStore } from "pinia";
import { ref } from "vue";
import { Tasks, TaskChild } from "../types/index.ts";

export const useIndexStore = defineStore("indexStore", () => {

  const tasks = ref<Tasks>([]);
  // уникальный id для новых записей
  const id = ref<String>("8");

  const generateNotes = ( task: Tasks) => {
    for (let i = 0; i < task.length; i++) {
      tasks.value.push(task[i]);
    }
  }

  const setTasks = (params: Tasks) => {
    tasks.value = params;
  }

  const deleteColumn = (id: String) => {
    tasks.value = tasks.value.filter((item) => item.id !== id);
  }

  const deleteNote = (columnIndex: number, id: String) => {
    tasks.value[columnIndex].children = tasks.value[columnIndex].children.filter((p) => p.id !== id);
  }

  const addNote = (columnIndex: number, note: TaskChild) => {
    console.log('columnIndex', columnIndex)
    console.log('note', note)
    // tasks.value[columnIndex].children = tasks.value[columnIndex].children.push(note);
  }

  return {
    tasks,
    id,
    generateNotes,
    setTasks,
    deleteColumn,
    deleteNote,
    addNote,
  };
},
{
  persist: true,
});