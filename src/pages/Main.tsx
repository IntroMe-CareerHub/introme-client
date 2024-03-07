import { useEffect, useRef, useState } from "react";
import Advantage from "../components/main/Advantage";
import Developer from "../components/main/Developer";
import FloatingButton from "../components/main/FloatingButton";
import Functions from "../components/main/Functions";
import Info from "../components/main/Info";
import Start from "../components/main/Start";

export default function Main() {
    const containerRef = useRef<HTMLDivElement>(null);
    const startSectionRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>("");
    console.log(activeSection);

    const scrollToStart = () => {
        startSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const container = containerRef.current;

        const sections: Record<string, HTMLElement | null> = {
            info: document.getElementById("info"),
            function_one: document.getElementById("function_one"),
            function_two: document.getElementById("function_two"),
            advantages_one: document.getElementById("advantages_one"),
            advantages_two: document.getElementById("advantages_two"),
            advantages_three: document.getElementById("advantages_three"),
            developers: document.getElementById("developers"),
            start: document.getElementById("start")
        };

        const handleScroll = () => {
            if (container) {
                const scrollPosition = container.scrollTop + container.offsetHeight / 2;

                for (const section in sections) {
                    const element = sections[section];
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        const top = rect.top + container.scrollTop;
                        const height = rect.height;

                        if (scrollPosition >= top && scrollPosition <= top + height) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }
        };

        container?.addEventListener("scroll", handleScroll);

        return () => {
            container?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={containerRef} className="snap-y snap-mandatory h-screen overflow-auto">
            <Info title="IntroMe" sectionId="info">
                <p className="font-medium">
                    IntroMe로 완벽한 자기소개서 <br />
                    'IntroMe'를 소개합니다.
                </p>
                <p className="font-medium">
                    IntroMe는 맞춤법 기능, 특수문자 제거 기능 등 여러 <br />
                    서비스를 한 번에 제공하여 자소서 쓰는 취준생들이 쓰<br />기 좋은 총집합
                    서비스입니다.
                </p>
            </Info>
            <Functions
                title="맞춤법 및 문법 검사"
                sectionId="function_one"
                sectionImage="/src/assets/Function-1.png"
            >
                <p className="text-left text-[#4E5968] font-medium">
                    오류 없는 개인 진술을 보장하는 <br />
                    고급 맞춤법 및 문법 검사 기능을 강조합니다.
                </p>
            </Functions>
            <Functions
                title="특수 문자 제거"
                sectionId="function_two"
                sectionImage="/src/assets/Function-2.png"
            >
                <p className="text-left text-[#4E5968] font-medium">
                    서비스가 원치 않는 특수 문자를 <br />
                    자동으로 감지하고 제거하여 진술의 <br />
                    전문적인 어조를 유지하는 방법을 설명합니다.
                </p>
            </Functions>
            <Advantage title="효율성과 편의성" sectionId="advantages_one">
                <p className="font-medium">
                    여러 도구를 따로 사용할 필요 없이 'IntroMe' 하나로 맞춤법 검사, 특수문자 제거,
                    문서 포맷팅 등을 <br />한 번에 처리할 수 있습니다. 이는 사용자에게 시간을
                    절약해주고, 작업의 효율성을 높여줍니다.
                </p>
            </Advantage>
            <Advantage title="일관성 있는 품질 보장" sectionId="advantages_two">
                <p className="font-medium">
                    모든 작업을 'IntroMe'를 통해 처리함으로써, 자기소개서의 품질을 일관되게 유지할
                    수 있습니다. <br />
                    이는 자기소개서의 전문성과 신뢰성을 높여주며, 취업 시장에서 눈에 띄게
                    만들어줍니다.
                </p>
            </Advantage>
            <Advantage title="오류 최소화" sectionId="advantages_three">
                <p className="font-medium">
                    맞춤법 검사와 특수문자 제거 기능은 작성한 내용의 오류를 최소화하여, <br />
                    실수로 인한 부정적인 인상을 줄여줍니다. <br />
                    이는 취업 준비생이 자기소개서를 보다 자신감 있게 제출할 수 있게 해줍니다.
                </p>
            </Advantage>
            <Developer sectionId="developers" title="Developers" />
            <Start
                ref={startSectionRef}
                title="Start"
                sectionId="start"
                description="맞춤법 교정하러 가볼까요?"
                content="교정하러 가기 >"
            />
            <FloatingButton onClick={scrollToStart} activeSection={activeSection} />
        </div>
    );
}
