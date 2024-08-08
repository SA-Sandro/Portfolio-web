<template>
  <div :key="divKey" class="flex justify-center items-center">
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li
        v-for="formation in formations"
        :key="formation.id"
        class="mb-10 ms-4"
      >
        <FormationItem v-bind:formation="formation" />
      </li>
    </ol>
  </div>
</template>

<script setup>
import { useStore } from "@nanostores/vue";
import { ref, watch } from "vue";
import { $formations } from "@/stores/formations";
import FormationItem from "@/components/vue-components/FormationItem.vue";

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
