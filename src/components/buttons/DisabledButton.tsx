export default function DisabledButton() {
    return (
        <button
            type="button"
            onClick={undefined}
            className="flex w-28 h-9 justify-center items-center bg-black bg-opacity-5 text-neutral-400 rounded-md shadow-btn"
        >
            !@#$%
        </button>
    );
}
