// import { useState } from "react";

interface ToggleButtonProps {
    includeSpaces?: boolean;
    handleToggleSpaces?: () => void;
}

export default function ToggleButton({ includeSpaces, handleToggleSpaces }: ToggleButtonProps) {
    // const [isOn, setisOn] = useState(false);
    // const toggleHandler = () => {
    //     setisOn(!isOn);
    // };

    return (
        <div>
            <div
                className={`relative cursor-pointer w-7 h-4 rounded-full
                ${includeSpaces ? "bg-main-1 transition-all duration-500" : "bg-gray-300"}`}
                onClick={handleToggleSpaces}
            >
                <div
                    className={`absolute top-0.5 left-0.5 bg-white rounded-full transition-all duration-500 w-3 h-3
                    ${includeSpaces ? "left-3.5" : ""}`}
                />
            </div>
        </div>
    );
}
