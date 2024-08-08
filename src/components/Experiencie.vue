<template>
  <div>
    <h3
      class="text-4xl text-[#333333] dark:text-white pb-10 flex items-center justify-center"
    >
      <BriefcaseIcon />
      <span class="ml-2" data-translate-key="titleWorkExperiences">Experiencia laboral</span>
    </h3>
  </div>
  <div :key="divKey" class="flex justify-center items-center ">
    <ol class="relative border-s border-gray-200 dark:border-gray-700 ">
      <li
        v-for="experience in experiences"
        :key="experience.id"
        class="mb-10 ms-4"
      >
        <ExperiencieItem v-bind:experience="experience" />
      </li>
    </ol>
  </div>
</template>

<script setup>
import { useStore } from "@nanostores/vue";
import BriefcaseIcon from "@/components/Icons/BriefcaseIcon.vue";
import { $experiences } from "@/stores/experiences.ts";
import { ref, watch } from "vue";
import ExperiencieItem from "./ExperiencieItem.vue";

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
