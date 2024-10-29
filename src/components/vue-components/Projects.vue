<template>
  <div
    :key="divKey"
    class="grid grid-cols-1 md:grid-cols-2 mt-12 mx-auto max-w-[30rem] md:max-w-[75rem]"
  >
    <article
      v-for="project in projects"
      class="dark:bg-[#1C2128] bg-white rounded-xl my-5 text-white relative mx-2 sm:mx-5 "
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
