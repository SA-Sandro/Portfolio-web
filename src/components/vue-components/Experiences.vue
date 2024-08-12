<template>
  <div :key="divKey" class="flex justify-center items-center">
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li
        v-for="experience in experiences"
        :key="experience.id"
        class="mb-10 ms-4"
      >
        <span
          class="absolute flex items-center justify-center -start-[0.9rem] p-1 rounded-full dark:ring-gray-900 dark:bg-[#1C2128]"
        >
          <BriefcaseIcon class="hidden stroke-red-200/90 dark:block size-5" />
          <BriefcaseIcon class="block stroke-black dark:hidden size-5" />
        </span>
        <div class="bg-white dark:bg-[#1C2128] p-5 rounded-md ml-1">
          <ExperiencieItem v-bind:experience="experience" />
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { useStore } from "@nanostores/vue";
import { $experiences } from "@/stores/experiences.ts";
import { ref, watch } from "vue";
import ExperiencieItem from "@/components/vue-components/ExperienceItem.vue";
import BriefcaseIcon from "@/components/Icons/BriefcaseIcon.vue";

const experiences = ref([]);
const divKey = ref(0);
watch(
  useStore($experiences),
  (newValue) => {
    experiences.value = newValue || [];
    divKey.value += 1;
  },
  { immediate: true }
);
</script>
