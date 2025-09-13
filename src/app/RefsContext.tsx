"use client";

import { createContext, useRef, useContext, ReactNode } from "react";

type RefsContextType = {
  developerRef: React.RefObject<HTMLDivElement | null>;
  testRef: React.RefObject<HTMLDivElement | null>;
  personalitiesRef : React.RefObject<HTMLDivElement | null>;
  storiesRef : React.RefObject<HTMLDivElement | null>;
};

const RefsContext = createContext<RefsContextType | null>(null);

export const RefsProvider = ({ children }: { children: ReactNode }) => {
  const developerRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const personalitiesRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null); 

  return (
    <RefsContext.Provider value={{ developerRef, testRef, personalitiesRef, storiesRef }}>
      {children}
    </RefsContext.Provider>
  );
};

export const useRefs = () => {
  const ctx = useContext(RefsContext);
  if (!ctx) throw new Error("useRefs must be used within RefsProvider");
  return ctx;
};
