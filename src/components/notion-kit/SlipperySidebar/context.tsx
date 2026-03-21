"use client";

import type { LoadedIconFunction } from "@nds-icons";
import { createContext, useContext, useMemo } from "react";

export interface TabRegistration {
  id: string;
  label: string;
  icon: LoadedIconFunction;
  count?: number;
}

interface SlipperySidebarContextValue {
  tabs: TabRegistration[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const SlipperySidebarContext =
  createContext<SlipperySidebarContextValue | null>(null);

export function useSlipperySidebarContext() {
  const ctx = useContext(SlipperySidebarContext);
  if (!ctx) {
    throw new Error(
      "useSlipperySidebarContext must be used within SlipperySidebarProvider",
    );
  }
  return ctx;
}

interface SlipperySidebarProviderProps {
  tabs: TabRegistration[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}

export function SlipperySidebarProvider({
  tabs,
  activeTab,
  setActiveTab,
  children,
}: SlipperySidebarProviderProps) {
  const value = useMemo(
    () => ({ tabs, activeTab, setActiveTab }),
    [tabs, activeTab, setActiveTab],
  );

  return (
    <SlipperySidebarContext.Provider value={value}>
      {children}
    </SlipperySidebarContext.Provider>
  );
}
