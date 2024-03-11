import { RefObject, useRef } from "react";

export function useSectionRefs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const functionOneRef = useRef<HTMLDivElement>(null);
    const functionTwoRef = useRef<HTMLDivElement>(null);
    const advantageOneRef = useRef<HTMLDivElement>(null);
    const advantageTwoRef = useRef<HTMLDivElement>(null);
    const advantageThreeRef = useRef<HTMLDivElement>(null);
    const developerRef = useRef<HTMLDivElement>(null);
    const startRef = useRef<HTMLDivElement>(null);

    const sectionRefs = {
        info: infoRef,
        function_one: functionOneRef,
        function_two: functionTwoRef,
        advantage_one: advantageOneRef,
        advantage_two: advantageTwoRef,
        advantage_three: advantageThreeRef,
        developer: developerRef,
        start: startRef
    };

    const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return { containerRef, sectionRefs, scrollToRef };
}
