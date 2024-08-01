<template>
  <button
    class="themeToggle size-9 rounded-lg transition hover:scale-105"
    @click="themeToggle"
  >
    <MoonIcon />
    <SunIcon />
  </button>
</template>

<script setup>
import MoonIcon from "@/components/Icons/MoonIcon.vue";
import SunIcon from "@/components/Icons/SunIcon.vue";
import ThemeStateManager from "@/utils/ThemeStateManager";

const themeStateManager = new ThemeStateManager();

themeStateManager.setThemeOnLoad();

const themeToggle = () => {
  document.documentElement.classList.toggle("dark");
  themeStateManager.setLocalStorageTheme();
};
</script>
