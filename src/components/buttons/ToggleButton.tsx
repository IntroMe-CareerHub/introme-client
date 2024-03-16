import { useState } from "react";

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false);
    const toggleHandler = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <div
                className={`relative cursor-pointer w-7 h-4 rounded-full
                ${isOn ? "bg-main-1 transition-all duration-500" : "bg-gray-300"}`}
                onClick={toggleHandler}
            >
                <div
                    className={`absolute top-0.5 left-0.5 bg-white rounded-full transition-all duration-500 w-3 h-3
                    ${isOn ? "left-3.5" : ""}`}
                />
            </div>
        </div>
    );
}
