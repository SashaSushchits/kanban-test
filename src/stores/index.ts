import { defineStore } from "pinia";
import { ref } from "vue";
import { Tasks, TaskChild } from "../types/index.ts";
import { uuid } from 'vue-uuid';

export const useIndexStore = defineStore("indexStore", () => {

  const tasks = ref<Tasks>([]);
  // уникальный id для новых записей
  const id = ref<String>('');

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
    note.id = uuid.v1();
    const result: TaskChild[] = [...tasks.value[columnIndex].children];
    result.splice(result.length, 0, note);
    tasks.value[columnIndex].children = result;
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