<template>
  <time
    class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
  >
    {{ experience.date }}
  </time>
  <h3 class="text-lg text-[#39006C] mt-1 dark:text-yellow-200/90">
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
