<template>
  <time
    class="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
  >
    {{ formation.date }}
  </time>
  <h5 class="text-lg text-[#39006C] dark:text-yellow-200/90">
    {{ formation.title }}
  </h5>
  <h3
    class="mb-1 mt-1 text-sm font-normal leading-none text-[#333333] dark:text-sky-200/70"
  >
    {{ formation.institution }}
  </h3>
</template>
<script setup>
const props = defineProps({
  formation: {
    type: Object,
    required: true,
  },
});

const formation = props.formation;
</script>
