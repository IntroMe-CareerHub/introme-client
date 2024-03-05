// import { useState } from "react";

export default function DisabledButton() {
    return (
        <button
            type="button"
            onClick={undefined}
            className="flex px-8 py-2 justify-center items-center bg-black bg-opacity-5 text-neutral-400 rounded-md shadow-btn"
        >
            !@#$%
        </button>
    );
}
