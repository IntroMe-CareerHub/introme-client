import { IoIosArrowDown } from "react-icons/io";

interface FloatingButtonProps {
    onScrollToStart: () => void;
    activeSection: string;
}

const sectionStyles: { [key: string]: string | null } = {
    advantage: "bg-white text-main-1",
    developer: "bg-white text-black"
};
const DEFAULT_STYLE = "bg-main-1 text-white";

export default function FloatingButton({ onScrollToStart, activeSection }: FloatingButtonProps) {
    if (activeSection === "start") {
        return null;
    }

    const style =
        sectionStyles[activeSection] ||
        (activeSection.startsWith("advantage") ? sectionStyles["advantage"] : DEFAULT_STYLE);

    return (
        <button
            onClick={onScrollToStart}
            type="button"
            className={`fixed bottom-14 right-14 w-36 h-36 rounded-full text-center font-bold text-xl ${style} flex flex-col items-center justify-center`}
        >
            <div className="relative flex flex-col justify-center items-center ">
                <span className="font-GmarketSansBold">Start</span>
                <IoIosArrowDown className="absolute -bottom-12" />
            </div>
        </button>
    );
}
