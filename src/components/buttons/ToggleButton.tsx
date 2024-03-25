import { MouseEventHandler } from "react";

interface ToggleButtonProps {
    includeSpecialCharacters?: boolean;
    handleToggleSpecialCharacters?: MouseEventHandler<HTMLDivElement> | undefined;
}
export default function ToggleButton({
    includeSpecialCharacters,
    handleToggleSpecialCharacters
}: ToggleButtonProps) {
    return (
        <div>
            <div
                className={`relative cursor-pointer w-7 h-4 rounded-full
                ${includeSpecialCharacters ? "bg-main-1 transition-all duration-500" : "bg-gray-300"}`}
                onClick={handleToggleSpecialCharacters}
            >
                <div
                    className={`absolute top-0.5 left-0.5 bg-white rounded-full transition-all duration-500 w-3 h-3
                    ${includeSpecialCharacters ? "left-3.5" : ""}`}
                />
            </div>
        </div>
    );
}
