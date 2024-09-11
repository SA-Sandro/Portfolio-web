class LanguageStateManager {
  public getLocalStorageLang = (): string => {
    return localStorage.getItem("langLocalStorage") || 'es';
  };

  public setLocalStorageLang = (value: string): void => {
    localStorage.setItem("langLocalStorage", value);
  };
}

export default LanguageStateManager;
