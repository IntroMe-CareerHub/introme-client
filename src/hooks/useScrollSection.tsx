import { useEffect, useState, RefObject } from "react";

interface SectionsRef {
    [key: string]: RefObject<HTMLElement>;
}

const useScrollSection = (
    containerRef: RefObject<HTMLElement>,
    sectionsRef: SectionsRef
): string => {
    const [activeSection, setActiveSection] = useState<string>("");
    console.log(activeSection);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            if (!container) return;

            const scrollPosition = container.scrollTop + container.clientHeight / 2;
            let foundSection = "";

            Object.entries(sectionsRef).forEach(([key, ref]) => {
                const section = ref.current;
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
                        foundSection = key;
                    }
                }
            });

            setActiveSection(foundSection);
        };

        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, [containerRef, sectionsRef]);

    return activeSection;
};

export default useScrollSection;
