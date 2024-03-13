import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

interface SectionRefs {
    [key: string]: React.RefObject<HTMLDivElement>;
}

interface ScrollContextType {
    containerRef: React.RefObject<HTMLDivElement>;
    sectionRefs: SectionRefs;
    scrollToRef: (sectionKey: keyof SectionRefs) => void;
    activeSection: string;
    setActiveSection: (activeSection: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) throw new Error("useScroll은 ScrollProvider 내에서 사용해야 합니다.");
    return context;
};

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>("info");

    const sectionKeys = [
        "info",
        "function_one",
        "function_two",
        "advantage_one",
        "advantage_two",
        "advantage_three",
        "developer",
        "start"
    ];
    const sectionRefs: SectionRefs = Object.fromEntries(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        sectionKeys.map(key => [key, useRef<HTMLDivElement>(null)])
    ) as SectionRefs;

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const scrollPosition = container.scrollTop + container.clientHeight / 2;

            for (const [key, ref] of Object.entries(sectionRefs)) {
                const section = ref.current;
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition <= section.offsetTop + section.offsetHeight
                ) {
                    setActiveSection(key);
                    break;
                }
            }
        };

        const container = containerRef.current;
        container?.addEventListener("scroll", handleScroll);

        return () => {
            container?.removeEventListener("scroll", handleScroll);
        };
    }, [sectionRefs, containerRef]);

    const scrollToRef = (sectionKey: keyof SectionRefs) => {
        const ref = sectionRefs[sectionKey];
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const value = { containerRef, sectionRefs, scrollToRef, activeSection, setActiveSection };

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};
