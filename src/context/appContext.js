import { createContext } from "react";

export const AppContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
  loadingProgress: 0,
  setLoadingProgress: () => {},
  scrollContext: null,
  setScrollContext: () => {},
  activeSection: 0,
  setActiveSection: () => {},
});
