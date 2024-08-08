<template>
  <div>
    <div
      class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-[#bcd39c7e] dark:bg-yellow-200"
    ></div>
    <time
      class="mb-1 text-sm font-normal leading-none text-blue-900 dark:text-sky-200/70"
    >
      {{ experience.date }}
    </time>
    <h3 class="text-lg text-[#3b683b] dark:text-yellow-200/90">
      {{ experience.title }}
    </h3>
    <p
      class="mb-4 text-base font-normal text-pretty max-w-xl text-[#333333] dark:text-gray-200"
    >
      {{ experience.description }}
    </p>
    <a
      v-if="experience.link"
      :href="experience.link"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      Para saber más <RightIcon />
    </a>
  </div>
</template>

<script setup>
import RightIcon from "@/components/Icons/RightIcon.astro";

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});

const experience = props.experience;
</script>
