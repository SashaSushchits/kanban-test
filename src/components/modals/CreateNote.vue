<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="show && columnIndex === clickColumn"
        ref="modal-backdrop"
        class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
      >
        <div
          class="flex items-center mx-4 my-auto h-screen md:items-start md:justify-center md:mx-auto md:min-h-screen md:pt-24 text-center"
        >
          <transition
            enter-active-class="transition ease-out duration-300 transform "
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >
            <div
              v-show="show"
              ref="modal"
              class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-full md:w-1/4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div
                v-for="item in formList"
                :key="item.id"
                class="flex flex-col mb-5 relative"
              >
                <label class="ml-3 font-semibold">{{ item.title }}</label>
                <input
                  v-model="v$[item.param].$model"
                  class="h-[30px] block p-2 ps-5 mb-3 text-sm text-gray-900 border border-gray-300 rounded bg-[#F4F4F4] focus:ring-transparent focus:outline-none"
                  :class="{ 'border-red-500 ': v$[item.param].$error }"
                >
                <span class="text-red-500 text-sm absolute -bottom-2 left-3">{{
                  v$[item.param].$error ? "Заполните поле корректно" : ""
                }}</span>
              </div>
              <div class="flex justify-end gap-x-5">
                <button
                  type="submit"
                  class="rounded px-5 py-2 text-sm bg-bg_save_button hover:bg-bg_hover_save_button hover:text-white"
                  @click.stop="saveNote(columnIndex, form)"
                >
                  Сохранить
                </button>
                <button
                  type="submit"
                  class="rounded px-5 py-2 text-sm bg-bg_card hover:bg-bg_hover_button hover:text-white"
                  @click.stop="close"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { TaskChild } from "@/types/index.ts";
import { useIndexStore } from "@/stores/index";

interface Props {
  show?: boolean;
  clickColumn: number;
  columnIndex: number;
}
defineProps<Props>();

const indexStore = useIndexStore();

const emit = defineEmits(["update:show"]);

const formList = [
  {
    id: "1",
    title: "Заголовок",
    param: "data",
  },
  {
    id: "1",
    title: "Описание",
    param: "description",
  },
];

const form: TaskChild = reactive({
  type: "draggable",
  id: "",
  data: "",
  description: "",
  src: "",
  alt: "",
  colorLine: ["#891BE8", "#1AD698", "#ff3838"],
});

const formRules = {
  data: { required },
  description: { required },
};

const v$ = useVuelidate(formRules, form);

const close = () => {
  emit("update:show", false);
  v$.value.$reset();
  resetForm();
};

const saveNote = (columnIndex: number, form: TaskChild) => {
  if (v$.value.data.$invalid || v$.value.description.$invalid) {
    v$.value.$touch();
  } else {
    indexStore.addNote(columnIndex, Object.assign({}, form));
    close();
  }
};

const resetForm = () => {
  form.data =  "";
  form.description = "";
};
</script>
