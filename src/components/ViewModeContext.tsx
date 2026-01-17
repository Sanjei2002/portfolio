"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type ViewMode = "default" | "system-map" | "desk" | "debug";

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleSystemMap: () => void;
  toggleDeskMode: () => void;
  toggleDebugMode: () => void;
  isSystemMapActive: boolean;
  isDeskModeActive: boolean;
  isDebugModeActive: boolean;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>("default");

  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode);
  }, []);

  const toggleSystemMap = useCallback(() => {
    setViewModeState((prev) => (prev === "system-map" ? "default" : "system-map"));
  }, []);

  const toggleDeskMode = useCallback(() => {
    setViewModeState((prev) => (prev === "desk" ? "default" : "desk"));
  }, []);

  const toggleDebugMode = useCallback(() => {
    setViewModeState((prev) => (prev === "debug" ? "default" : "debug"));
  }, []);

  return (
    <ViewModeContext.Provider
      value={{
        viewMode,
        setViewMode,
        toggleSystemMap,
        toggleDeskMode,
        toggleDebugMode,
        isSystemMapActive: viewMode === "system-map",
        isDeskModeActive: viewMode === "desk",
        isDebugModeActive: viewMode === "debug",
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (context === undefined) {
    return {
      viewMode: "default" as ViewMode,
      setViewMode: () => {},
      toggleSystemMap: () => {},
      toggleDeskMode: () => {},
      toggleDebugMode: () => {},
      isSystemMapActive: false,
      isDeskModeActive: false,
      isDebugModeActive: false,
    };
  }
  return context;
}
