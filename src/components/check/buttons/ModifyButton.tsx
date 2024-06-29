import { ModifyBtnProps } from "../../../types/check";

export default function ModifyButton({ text, color, onClick }: ModifyBtnProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`py-1.5 px-2.5 rounded-md text-xs text-white ${color === "blue" ? "bg-my-delete" : "bg-my-blue"}`}
        >
            {text}
        </button>
    );
}
