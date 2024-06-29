import { ToggleButtonProps } from "../../../types/check";

export default function ToggleButton({ includeFunc, handleToggle }: ToggleButtonProps) {
    return (
        <div>
            <div
                className={`relative cursor-pointer w-7 h-4 rounded-full
                ${includeFunc ? "bg-main-1 transition-all duration-500" : "bg-gray-300"}`}
                onClick={handleToggle}
            >
                <div
                    className={`absolute top-0.5 left-0.5 bg-white rounded-full transition-all duration-500 w-3 h-3
                    ${includeFunc ? "left-3.5" : ""}`}
                />
            </div>
        </div>
    );
}
