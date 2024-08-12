import { ref } from "vue";
import {
  ui,
  languages,
  FORMATIONS,
  EXPERIENCES,
} from "@/components/i18n/ui.ts";
import LanguageStateManager from "@/utils/LanguageStateManager.ts";
import { $experiences } from "@/stores/experiences.ts";
import { $formations } from "@/stores/formations";

class LanguageServices {
  private langManager = new LanguageStateManager();
  public experiences = ref<Object>({});
  private currentLang = this.langManager.getLocalStorageLang() || "es";

  constructor() {
    document.documentElement.lang =
      this.langManager.getLocalStorageLang() !== undefined
        ? this.langManager.getLocalStorageLang()
        : "es";
    this.updateTranslations();
  }

  private translate = (key: string): string => {
    if (this.currentLang === languages.es)
      return ui.es[key as keyof typeof ui.es];
    return ui.en[key as keyof typeof ui.en];
  };

  public setLang = (lang: string): void => {
    this.currentLang = lang;
    document.documentElement.lang = this.currentLang;
    this.langManager.setLocalStorageLang(lang);
    this.updateTranslations();
  };

  private updateTranslations = (): void => {
    this.setDataTranslateKey();
    this.setTranslatedExperiences();
    this.setTranslatedFormations();
  };

  private setTranslatedFormations = (): void => {
    $formations.set(this.getTranslatedFormations());
  };

  private setTranslatedExperiences = (): void => {
    $experiences.set(this.getTranslatedExperiences());
  };

  public getTranslatedExperiences = (): Object => {
    return this.langManager.getLocalStorageLang() === languages.es
      ? EXPERIENCES.es
      : EXPERIENCES.en;
  };

  public getTranslatedFormations = (): Object => {
    return this.langManager.getLocalStorageLang() === languages.es
      ? FORMATIONS.es
      : FORMATIONS.en;
  };

  private setDataTranslateKey = (): void => {
    document.querySelectorAll("[data-translate-key]").forEach((el) => {
      const key = el.getAttribute("data-translate-key") || "";
      el.innerHTML = this.translate(key);
    });
  };
}

export default new LanguageServices();
