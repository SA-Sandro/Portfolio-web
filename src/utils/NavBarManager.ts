import ThemeStateManager from "./ThemeStateManager";

export default class NavBarManager {
  private static instance: NavBarManager;
  private navLinks: NodeListOf<HTMLElement>;
  private sections: NodeListOf<HTMLElement>;

  private constructor() {
    this.navLinks = document.querySelectorAll(".navbar-header a");
    this.sections = document.querySelectorAll("section");
    this.init();
  }

  public static getInstance(): NavBarManager {
    if (!NavBarManager.instance) {
      NavBarManager.instance = new NavBarManager();
    }
    return NavBarManager.instance;
  }

  private init(): void {
    window.addEventListener("scroll", () => this.updateActiveLink());
    document.addEventListener("DOMContentLoaded", () =>
      this.updateActiveLink()
    );
  }

  public updateActiveLink(): void {
    const themeManager = new ThemeStateManager();
    const themeMode = themeManager.getThemeLocalStorage();

    this.sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height && id) {
        this.navLinks.forEach((link) =>
          this.setActiveLink(link, themeMode, id)
        );
      }
    });
  }

  private setActiveLink(
    link: HTMLElement,
    themeMode: string,
    id: string
  ): void {
    if (this.isDarkMode(themeMode)) {
      link.classList.remove("active-dark-mode", "active");
      document
        .querySelector(".navbar-header a[href*=" + id + "]")
        ?.classList.add("active-dark-mode");
    } else {
      link.classList.remove("active", "active-dark-mode");
      document
        .querySelector(".navbar-header a[href*=" + id + "]")
        ?.classList.add("active");
    }
  }

  private isDarkMode(themeMode: string): boolean {
    return themeMode === "dark";
  }
}
