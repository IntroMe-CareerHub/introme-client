import { Link, useLocation } from "react-router-dom";
import { useScroll } from "../contexts/ScrollContext";
import { useEffect } from "react";

export default function Header() {
    const { scrollToRef, activeSection, setActiveSection } = useScroll();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            setActiveSection && setActiveSection("info");
        } else if (pathname.startsWith("/check")) {
            setActiveSection && setActiveSection("check");
        } else {
            setActiveSection && setActiveSection("");
        }
    }, [pathname, setActiveSection]);
    const getTextColorClass = (_sectionKey: string): string => {
        if (activeSection === "start") {
            return "text-black";
        }

        const isActiveSectionTextWhite =
            activeSection === "info" ||
            activeSection.startsWith("advantage") ||
            activeSection === "developer";

        if (isActiveSectionTextWhite) {
            return "text-white";
        }

        return "text-black";
    };

    const getMainHeaderClass = (sectionKey: string) => {
        const isActive = activeSection.startsWith(sectionKey) || activeSection === sectionKey;
        let classNames = `cursor-pointer ${getTextColorClass(sectionKey)}`;

        if (isActive) {
            if (sectionKey.startsWith("advantage")) {
                classNames = "font-GmarketSansBold text-white border-b-2 border-white";
            } else {
                classNames = "font-GmarketSansBold text-main-1 border-b-2 border-main-1";
            }
        }

        return classNames;
    };

    const getCheckHeaderClass = (path: string): string =>
        pathname === path
            ? "cursor-pointer font-GmarketSansBold text-main-1 border-b-2 border-main-1"
            : "cursor-pointer";

    const isMainRoute = !["/check", "/1", "/2", "/3", "/4"].some(route =>
        pathname.startsWith(route)
    );

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

    return (
        <header className="bg-transparent fixed top-0 z-50 w-full">
            <nav>
                <ul className="flex text-xl py-7 items-center justify-center space-x-24">
                    {isMainRoute
                        ? mainHeaderItems.map(item => (
                              <li
                                  key={item.key}
                                  className={getMainHeaderClass(item.key)}
                                  onClick={() =>
                                      scrollToRef && scrollToRef(mapToFirstSubSection(item.key))
                                  }
                              >
                                  {item.text}
                              </li>
                          ))
                        : checkHeaderLinks.map(link => (
                              <Link
                                  key={link.path}
                                  to={link.path}
                                  className={getCheckHeaderClass(link.path)}
                              >
                                  {link.text}
                              </Link>
                          ))}
                </ul>
            </nav>
        </header>
    );
}
