<template>
<div class="flags flex justify-center items-center">
    <button class="flag-item_en p-1 cursor-pointer" @click="setLang('en')">
        <img src="images/icon-en.png" alt="Idioma Inglés" width="35" />
      </button>
      <button class="flag-item_esp p-1 cursor-pointer" @click="setLang('es')">
        <img src="images/icon-spain.png" alt="Idioma Español" width="35" />
      </button>
  </div>
</template>
<script setup>
    import LanguageServices from "@/components/i18n/LanguageServices";
    const setLang = (lang) => LanguageServices.setLang(lang);
</script>