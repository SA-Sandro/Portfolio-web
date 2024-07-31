class LanguageStateManager {
  public getLocalStorageLang = (): string => {
    return localStorage.getItem("langLocalStorage")!;
  };

  public setLocalStorageLang = (value: string): void => {
    localStorage.setItem("langLocalStorage", value);
  };
}

export default LanguageStateManager;
