import { ref } from "vue";
import { ui, languages } from "@/components/i18n/ui.ts";
import LanguageStateManager from "@/utils/LanguageStateManager.ts";
import { EXPERIENCES } from "@/components/i18n/ui.ts";
import { $experiences } from "@/stores/experiences.ts";

class LanguageServices {
  private currentLang = ref(document.documentElement.lang);
  private langManager = new LanguageStateManager();
  public experiences = ref<Object>({});

  constructor() {
    document.documentElement.lang = this.langManager.getLocalStorageLang()
      ? this.langManager.getLocalStorageLang()
      : "es";
    this.updateTranslations();
  }

  private translate = (key: string): string => {
    if (this.currentLang.value === languages.es)
      return ui.es[key as keyof typeof ui.es];
    return ui.en[key as keyof typeof ui.en];
  };

  public setLang = (lang: string): void => {
    this.currentLang.value = lang;
    document.documentElement.lang = lang;
    this.langManager.setLocalStorageLang(lang);
    this.updateTranslations();
  };

  private updateTranslations = (): void => {
    this.setDataTranslateKey();
    this.setTranslatedExperiences();
  };

  private setTranslatedExperiences = (): void => {
    $experiences.set(this.getTranslatedExperiences());
  };

  public getTranslatedExperiences = (): Object => {
    return this.langManager.getLocalStorageLang() === languages.es
      ? EXPERIENCES.es
      : EXPERIENCES.en;
  };

  private setDataTranslateKey = (): void => {
    document.querySelectorAll("[data-translate-key]").forEach((el) => {
      const key = el.getAttribute("data-translate-key") || "";
      el.innerHTML = this.translate(key);
    });
  };
}

export default new LanguageServices();
