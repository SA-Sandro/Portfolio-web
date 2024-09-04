<template>
  <div :key="divKey" class="flex justify-center items-center mt-8">
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li
        v-for="formation in formations"
        :key="formation.id"
        class="mb-10 ms-4 px-2"
      >
        <span
          class="absolute flex items-center justify-center -start-[0.9rem] p-1 rounded-full ring-2 ring-yellow-400 bg-white"
        >
          <BookIcon class="stroke-black block size-5" />
        </span>
        <div class="bg-white dark:bg-[#1C2128] p-5 rounded-md ml-1">
          <FormationItem v-bind:formation="formation" />
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { useStore } from "@nanostores/vue";
import { ref, watch } from "vue";
import { $formations } from "@/stores/formations";
import FormationItem from "@/components/vue-components/FormationItem.vue";
import BookIcon from "@/components/Icons/BookIcon.vue";

const formations = ref([]);
const divKey = ref(0);
watch(
  useStore($formations),
  (newValue) => {
    formations.value = newValue || [];
    divKey.value += 1;
  },
  { immediate: true }
);
</script>
