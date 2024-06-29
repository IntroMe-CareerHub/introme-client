import React from "react";

export interface SectionRefs {
    [key: string]: React.RefObject<HTMLDivElement>;
}

export interface ScrollContextType {
    containerRef: React.RefObject<HTMLDivElement>;
    sectionRefs: SectionRefs;
    scrollToRef: (sectionKey: keyof SectionRefs) => void;
    activeSection: string;
    setActiveSection: (activeSection: string) => void;
}
