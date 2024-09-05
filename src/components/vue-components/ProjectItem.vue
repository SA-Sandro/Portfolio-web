<template>
  <img
    class="rounded-t-xl"
    :src="project.image"
    :alt="'Imagen del proyecto: ' + project.title"
    loading="lazy"
  />
  <h3 class="px-2 pt-2 text-2xl dark:text-yellow-200/90">
    {{ project.title }}
  </h3>
  <div class="px-2 py-1 text-justify">
    {{ project.description }}
  </div>
  <div
    class="grid grid-cols-2 px-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center my-3"
  >
    <div
      v-for="technologie in project.technologies"
      class="cursor-pointer mx-2 mt-1.5 lg:mt-0"
    >
      <div
        class="bg-yellow-200/80 text-[1rem] text-black rounded-lg flex justify-center items-center py-0.5"
      >
        <img
          class="size-4 mx-1"
          :src="'images/logos/' + technologie + '.png'"
          :alt="technologie + ' logo'"
        />
        <span>{{ technologie }}</span>
      </div>
    </div>
  </div>
  <transition name="fade">
    <div
      v-if="isHovered"
      class="absolute bg-gray-900/60 w-full h-full top-0 flex justify-center items-center cursor-pointer"
    >
      <a href="" target="_blank">
        <PageIcon />
      </a>
      <a :href="project.links.githubLink" target="_blank">
        <CodeIcon
          customProperties="size-16 hover:-translate-y-2 transition-all duration-75 ease-linear"
        />
      </a>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from "vue";
import CodeIcon from "@/components/Icons/CodeIcon.vue";
import PageIcon from "@/components/Icons/PageIcon.vue";
import { $hoveredProjectId } from "@/stores/hoverState";
import { useStore } from "@nanostores/vue";

const isHovered = ref(false);

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

watch(useStore($hoveredProjectId), (newVal) => {
  isHovered.value = newVal === project.id;
});

const project = props.project;
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>