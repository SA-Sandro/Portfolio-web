<template>
  <h5
    class="mb-1 text-sm font-normal leading-none text-blue-900 dark:text-sky-200/70"
  >
    {{ experience.date }}
  </h5>
  <h3 class="text-lg text-[#3b683b] mt-1 dark:text-yellow-200/90">
    {{ experience.title }}
  </h3>
  <p
    class="mb-4 text-base font-normal text-pretty max-w-xl text-[#333333] dark:text-gray-200"
  >
    {{ experience.description }}
  </p>
</template>

<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});

const experience = props.experience;
</script>
