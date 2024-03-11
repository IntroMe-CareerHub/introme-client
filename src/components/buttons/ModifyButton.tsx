type ModifyBtnProps = {
    text: string;
    color: "blue" | "purple";
};
export default function ModifyButton({ text, color }: ModifyBtnProps) {
    return (
        <button
            type="button"
            onClick={undefined}
            className={`py-1.5 px-2.5 rounded-md text-xs text-white bg-my-${color}`}
        >
            {text}
        </button>
    );
}
