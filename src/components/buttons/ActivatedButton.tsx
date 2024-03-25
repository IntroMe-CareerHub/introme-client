import { MouseEventHandler, ReactNode } from "react";

type ActivatedBtnProps = {
    icon?: ReactNode;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function ActivatedButton({ icon, text, onClick }: ActivatedBtnProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex w-28 h-9 justify-center items-center bg-white rounded-md shadow-btn cursor-pointer ${icon ? "gap-0.5" : ""}`}
        >
            {icon && <div className="text-neutral-400">{icon}</div>}
            {text}
        </button>
    );
}
