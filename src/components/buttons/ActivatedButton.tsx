import { ReactNode } from "react";

type ActivatedBtnProps = {
    icon?: ReactNode;
    text: string;
};
export default function ActivatedButton({ icon, text }: ActivatedBtnProps) {
    return (
        <button
            type="button"
            onClick={undefined}
            className={`flex w-28 h-9 justify-center items-center bg-white rounded-md shadow-btn ${icon ? "gap-0.5" : ""}`}
        >
            {icon && <div className="text-neutral-400">{icon}</div>}
            {text}
        </button>
    );
}
