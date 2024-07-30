import { ui, languages } from "@/components/i18n/ui.ts";

class LanguageServices {
  private currentLang: string;

  constructor() {
    this.currentLang = this.getLang();
  }

  private getLang = (): string => {
    if (typeof document !== "undefined") return document.documentElement.lang;
    return "";
  };

  public translate = (key: string): string => {
    if (this.currentLang === languages.es)
      return ui.es[key as keyof typeof ui.es];
    return ui.en[key as keyof typeof ui.en];
  };

  public setLang = (lang: string): void => {
    document.documentElement.lang = lang;
    this.currentLang = lang;
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
