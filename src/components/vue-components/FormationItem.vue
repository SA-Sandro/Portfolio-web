<template>
  <div>
    <div
      class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-[#bcd39c7e] dark:bg-yellow-200"
    ></div>
    <time
      class="mb-1 text-sm font-normal leading-none text-blue-900 dark:text-sky-200/70"
    >
      {{ formation.title }}
    </time>
    <h3 class="text-lg text-[#3b683b] dark:text-yellow-200/90">
      {{ formation.institution }}
    </h3>
    <p
      class="mb-4 text-base font-normal text-pretty max-w-xl text-[#333333] dark:text-gray-200"
    >
      {{ formation.date }}
    </p>
  </div>
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