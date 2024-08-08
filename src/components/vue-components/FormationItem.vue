<template>
  <h5 class="text-lg text-[#3b683b] dark:text-yellow-200/90">
    {{ formation.title }}
  </h5>
  <h3
    class="mb-1 mt-1 text-sm font-normal leading-none text-blue-900 dark:text-sky-200/70"
  >
    {{ formation.institution }}
  </h3>
  <p
    class="mb-4 text-base font-normal text-pretty max-w-xl text-[#333333] dark:text-gray-200"
  >
    {{ formation.date }}
  </p>
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
