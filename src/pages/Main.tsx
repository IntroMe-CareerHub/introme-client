import { useRef } from "react";
import Advantage from "../components/main/Advantage";
import Developer from "../components/main/Developer";
import FloatingButton from "../components/main/FloatingButton";
import Functions from "../components/main/Functions";
import Info from "../components/main/Info";
import Start from "../components/main/Start";
import useScrollSection from "../hooks/useScrollSection";

export default function Main() {
    const containerRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const functionOneRef = useRef<HTMLDivElement>(null);
    const functionTwoRef = useRef<HTMLDivElement>(null);
    const advantageOneRef = useRef<HTMLDivElement>(null);
    const advantageTwoRef = useRef<HTMLDivElement>(null);
    const advantageThreeRef = useRef<HTMLDivElement>(null);
    const developerRef = useRef<HTMLDivElement>(null);
    const startRef = useRef<HTMLDivElement>(null);

    const sectionsRef = {
        info: infoRef,
        function_one: functionOneRef,
        function_two: functionTwoRef,
        advantage_one: advantageOneRef,
        advantage_two: advantageTwoRef,
        advantage_three: advantageThreeRef,
        developer: developerRef,
        star: startRef
    };

    const activeSection = useScrollSection(containerRef, sectionsRef);

    const scrollToStart = () => {
        startRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div ref={containerRef} className="snap-y snap-mandatory h-screen overflow-auto">
            <Info ref={infoRef} title="IntroMe" sectionId="info">
                <p>
                    IntroMe로 완벽한 자기소개서 <br />
                    'IntroMe'를 소개합니다.
                </p>
                <p>
                    IntroMe는 맞춤법 기능, 특수문자 제거 기능 등 여러 <br />
                    서비스를 한 번에 제공하여 자소서 쓰는 취준생들이 쓰<br />기 좋은 총집합
                    서비스입니다.
                </p>
            </Info>
            <Functions
                ref={functionOneRef}
                title="맞춤법 및 문법 검사"
                sectionId="function_one"
                sectionImage="/src/assets/Function-1.png"
            >
                <p className="text-left text-[#4E5968] ">
                    오류 없는 개인 진술을 보장하는 <br />
                    고급 맞춤법 및 문법 검사 기능을 강조합니다.
                </p>
            </Functions>
            <Functions
                ref={functionTwoRef}
                title="특수 문자 제거"
                sectionId="function_two"
                sectionImage="/src/assets/Function-2.png"
            >
                <p className="text-left text-[#4E5968]">
                    서비스가 원치 않는 특수 문자를 <br />
                    자동으로 감지하고 제거하여 진술의 <br />
                    전문적인 어조를 유지하는 방법을 설명합니다.
                </p>
            </Functions>
            <Advantage ref={advantageOneRef} title="효율성과 편의성" sectionId="advantage_one">
                <p>
                    여러 도구를 따로 사용할 필요 없이 'IntroMe' 하나로 맞춤법 검사, 특수문자 제거,
                    문서 포맷팅 등을 <br />한 번에 처리할 수 있습니다. 이는 사용자에게 시간을
                    절약해주고, 작업의 효율성을 높여줍니다.
                </p>
            </Advantage>
            <Advantage
                ref={advantageTwoRef}
                title="일관성 있는 품질 보장"
                sectionId="advantage_two"
            >
                <p>
                    모든 작업을 'IntroMe'를 통해 처리함으로써, 자기소개서의 품질을 일관되게 유지할
                    수 있습니다. <br />
                    이는 자기소개서의 전문성과 신뢰성을 높여주며, 취업 시장에서 눈에 띄게
                    만들어줍니다.
                </p>
            </Advantage>
            <Advantage ref={advantageThreeRef} title="오류 최소화" sectionId="advantage_three">
                <p>
                    맞춤법 검사와 특수문자 제거 기능은 작성한 내용의 오류를 최소화하여, <br />
                    실수로 인한 부정적인 인상을 줄여줍니다. <br />
                    이는 취업 준비생이 자기소개서를 보다 자신감 있게 제출할 수 있게 해줍니다.
                </p>
            </Advantage>
            <Developer ref={developerRef} sectionId="developer" title="Developers" />
            <Start
                ref={startRef}
                title="Start"
                sectionId="start"
                description="맞춤법 교정하러 가볼까요?"
                content="교정하러 가기 >"
            />
            <FloatingButton onClick={scrollToStart} activeSection={activeSection} />
        </div>
    );
}
