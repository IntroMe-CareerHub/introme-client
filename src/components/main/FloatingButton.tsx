import { IoIosArrowDown } from "react-icons/io";

interface FloatingButtonProps {
    onClick: () => void;
    activeSection: string;
}

export default function FloatingButton({ onClick, activeSection }: FloatingButtonProps) {
    const getStyleBasedOnSection = (section: string): string | null => {
        switch (true) {
            case section.startsWith("advantages"):
                return "bg-white text-main-1";
            case section === "developers":
                return "bg-white text-black";
            case section === "start":
                return null;
            default:
                return "bg-main-1 text-white";
        }
    };

    const style = getStyleBasedOnSection(activeSection);

    if (style === null) {
        return null;
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={`fixed bottom-14 right-14 w-36 h-36 rounded-full text-center font-bold text-xl ${style} flex flex-col items-center justify-center`}
        >
            <div className="relative flex flex-col justify-center items-center ">
                <span>Start</span>
                <IoIosArrowDown className="absolute -bottom-12" />
            </div>
        </button>
    );
}
