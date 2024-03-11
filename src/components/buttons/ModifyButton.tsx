type ModifyBtnProps = {
    text: string;
    color: string;
};
export default function ModifyButton({ text, color }: ModifyBtnProps) {
    return (
        <button
            type="button"
            onClick={undefined}
            className={`py-1.5 px-2.5 rounded-md text-xs text-white ${color === "blue" ? "bg-my-blue" : "bg-black"}`}
        >
            {text}
        </button>
    );
}
