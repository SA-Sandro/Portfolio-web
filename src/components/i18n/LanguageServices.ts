import { ui, languages } from "@/components/i18n/ui.ts";
import LanguageStateManager from "@/utils/LanguageStateManager";

class LanguageServices {
  private currentLang: string;
  private langManager = new LanguageStateManager();

  constructor() {
    document.documentElement.lang = this.langManager.getLocalStorageLang();
    this.currentLang = this.getLang();
    this.langManager.setLocalStorageLang(this.currentLang);
    this.updateTranslations();
  }

  private getLang = (): string => {
    if (typeof document !== "undefined") return document.documentElement.lang;
    return "";
  };

  public translate = (key: string): string => {
    if (this.langManager.getLocalStorageLang() === languages.es)
      return ui.es[key as keyof typeof ui.es];
    return ui.en[key as keyof typeof ui.en];
  };

  public setLang = (lang: string): void => {
    this.currentLang = lang;
    this.langManager.setLocalStorageLang(this.currentLang);
    this.updateTranslations();
  };

  private updateTranslations = (): void => {
    document.querySelectorAll("[data-translate-key]").forEach((el) => {
      const key = el.getAttribute("data-translate-key") || "";
      el.textContent = this.translate(key);
    });
  };
}

export default new LanguageServices();
