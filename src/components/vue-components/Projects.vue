<template>
  <div :key="divKey" class="grid grid-cols-1 sm:grid-cols-2 mt-12 max-w-[70rem] mx-auto">
    <article
      v-for="project in projects"
      class="bg-[#1C2128] rounded-xl mx-3 my-5 sm:my-0 text-white relative"
      @mouseleave="hideLinksPanel"
      @mouseenter="showLinksPanel(project.id)"
    >
      <ProjectItem :project="project" />
    </article>
  </div>
</template>

<script setup>
import { useStore } from "@nanostores/vue";
import { $projects } from "@/stores/projects";
import { ref, watch } from "vue";
import ProjectItem from "@/components/vue-components/ProjectItem.vue";
import { $hoveredProjectId } from "@/stores/hoverState";

const projects = ref([]);
const divKey = ref(0);

const showLinksPanel = (projectId) => {
  $hoveredProjectId.set(projectId);
};

const hideLinksPanel = () => {
  $hoveredProjectId.set(null);
};

watch(
  useStore($projects),
  (newValue) => {
    projects.value = newValue || [];
    divKey.value += 1;
  },
  { immediate: true }
);
</script>
