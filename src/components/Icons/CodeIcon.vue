<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="['stroke-white cursor-pointer', customProperties]"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l4 4l-4 4" />
    <path d="M14 4l-4 16" />
  </svg>
</template>

<script setup>
const props = defineProps({
  customProperties: {
    type: String,
    required: true,
  },
});
</script>
