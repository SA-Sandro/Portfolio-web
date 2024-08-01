class ThemeStateManager {
  public getThemeLocalStorage(): string {
    return localStorage.getItem("themeLocalStorage")!;
  }

  public setLocalStorageTheme() {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("themeLocalStorage", "dark");
      return;
    }
    localStorage.setItem("themeLocalStorage", "light");
  }

  public setThemeOnLoad() {
    if (this.getThemeLocalStorage() === "dark") {
      document.documentElement.classList.add("dark");
    }
  }
}

export default ThemeStateManager;
