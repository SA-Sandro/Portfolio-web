<template>
  <a
    @click="setCV()"
    :href="CV"
    target="_blank"
    type="button"
    class="rounded-full text-xs sm:text-base mx-1 px-6 py-1 border-2 border-[#6ec26e] dark:border-yellow-200/90 tracking-widest transition-all duration-100 ease-out hover:bg-green-400/90 dark:hover:bg-yellow-200/40 text-[#333333] dark:text-white"
    id="cv-link"
    data-translate-key="viewCV"
  >
    VER CV
  </a>
</template>

<script setup lang="ts">
import { ref } from "vue";

const CV = ref<string>("");
const currentLang = ref<string>("");

const setCV = (): void => {
  currentLang.value = localStorage.getItem("langLocalStorage") || "";
  if (currentLang.value === "es") {
    CV.value = "files/cv_programador_ES.pdf";
    return;
  }
  CV.value = "files/cv_programador_EN.pdf";
};
</script>
