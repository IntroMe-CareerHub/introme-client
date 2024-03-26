import { Link, useLocation } from "react-router-dom";
import { useScroll } from "../contexts/ScrollContext";
import { useEffect } from "react";

export default function Header() {
    const { scrollToRef, activeSection, setActiveSection } = useScroll();
    const { pathname } = useLocation();

    const mainHeaderItems = [
        { key: "info", text: "IntroMe" },
        { key: "function", text: "Function" },
        { key: "advantage", text: "Advantages" },
        { key: "developer", text: "Developers" },
        { key: "start", text: "Start" }
    ];

    const checkHeaderLinks = [
        { path: "/check", text: "맞춤법 검사" },
        { path: "/1", text: "멘트 추천" },
        { path: "/2", text: "기업별 인재상" },
        { path: "/3", text: "도움말" },
        { path: "/4", text: "로그인" }
    ];

    useEffect(() => {
        setActiveSection &&
            setActiveSection(
                pathname === "/" ? "info" : pathname.startsWith("/check") ? "check" : ""
            );
    }, [pathname, setActiveSection]);

    const isActiveSectionTextWhite =
        ["info", "advantage", "developer"].includes(activeSection) ||
        activeSection.startsWith("advantage");

    const getHeaderClass = (sectionKey: string, isMainHeader: boolean) => {
        const isActive = isMainHeader
            ? activeSection.startsWith(sectionKey) || activeSection === sectionKey
            : pathname === `/${sectionKey}`;
        if (isActive) {
            if (sectionKey === "advantage" || activeSection.startsWith("advantage")) {
                return "cursor-pointer font-GmarketSansBold text-white border-b-2 border-white";
            }
            return "cursor-pointer font-GmarketSansBold text-main-1 border-b-2 border-main-1";
        }
        return `cursor-pointer ${isActiveSectionTextWhite ? "text-white" : "text-black"}`;
    };

    const mapToFirstSubSection = (sectionKey: string) => {
        switch (sectionKey) {
            case "function":
                return "function_one";
            case "advantage":
                return "advantage_one";
            default:
                return sectionKey;
        }
    };

    const renderHeaderItems = () => {
        if (["/check", "/1", "/2", "/3", "/4"].some(route => pathname.startsWith(route))) {
            return checkHeaderLinks.map(({ path, text }) => (
                <Link key={path} to={path} className={getHeaderClass(path.replace("/", ""), false)}>
                    {text}
                </Link>
            ));
        } else {
            return mainHeaderItems.map(({ key, text }) => (
                <li
                    key={key}
                    className={getHeaderClass(key, true)}
                    onClick={() => scrollToRef && scrollToRef(mapToFirstSubSection(key))}
                >
                    {text}
                </li>
            ));
        }
    };

    return (
        <header className="bg-transparent fixed top-0 z-50 w-full">
            <nav>
                <ul className="flex text-xl py-7 items-center justify-center space-x-24">
                    {renderHeaderItems()}
                </ul>
            </nav>
        </header>
    );
}
