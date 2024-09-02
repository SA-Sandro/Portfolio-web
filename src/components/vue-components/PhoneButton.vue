<template>
  <div
    class="relative"
    @mouseover="showButtonVisibility"
    @mouseleave="hideButtonVisibility"
  >
    <input
      id="number"
      type="text"
      readonly
      class="cursor-pointer w-32 border-2 text-sm rounded-lg block ps-8 p-2 border-black bg-white text-black"
      value="634 70 89 79"
    />
    <button
      @click="copyToClipboard"
      :class="[
        'absolute z-20 w-full flex justify-center items-center rounded-lg top-0 bottom-0 transition-opacity duration-100 ease-linear border-2 border-black bg-white',
        { 'opacity-100': isButtonVisible, 'opacity-0': !isButtonVisible },
      ]"
    >
      <div
        :class="[
          'justify-center items-center',
          { hidden: isInputCopied, flex: !isInputCopied },
        ]"
      >
        <CopyIcon />
        <span data-translate-key="copy" class="text-sm text-black">Copiar</span>
      </div>
      <div
        :class="[
          'justify-center items-center',
          { hidden: !isInputCopied, flex: isInputCopied },
        ]"
      >
        <ClipboardCorrectIcon />
        <span data-translate-key="copied" class="text-sm text-black"
          >Copiado</span
        >
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CopyIcon from "@/components/Icons/CopyIcon.vue";
import ClipboardCorrectIcon from "@/components/Icons/ClipboardCorrectIcon.vue";

const isButtonVisible = ref(false);
const isInputCopied = ref(false);

const showButtonVisibility = (): void => {
  isButtonVisible.value = true;
};

const hideButtonVisibility = (): void => {
  isInputCopied.value = false;
  isButtonVisible.value = false;
};

const copyToClipboard = async (): Promise<void> => {
  const inputValue = (document.querySelector("#number") as HTMLInputElement)
    .value;

  try {
    await navigator.clipboard.writeText(inputValue);
    isInputCopied.value = true;
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>
