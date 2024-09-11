import NavBarManager from "@/utils/NavBarManager";

class ThemeStateManager {
  private navBarManager: NavBarManager;
  constructor() {
    this.navBarManager = NavBarManager.getInstance();
  }

  public getThemeLocalStorage(): string {
    return localStorage.getItem("themeLocalStorage") || "dark";
  }

  public setLocalStorageTheme() {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("themeLocalStorage", "dark");
      this.navBarManager.updateActiveLink();
      return;
    }
    localStorage.setItem("themeLocalStorage", "light");
    this.navBarManager.updateActiveLink();
  }

  public setThemeOnLoad() {
    if (this.getThemeLocalStorage() === "dark") {
      document.documentElement.classList.add("dark");
    }
  }
}

export default ThemeStateManager;
