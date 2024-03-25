import { FaArrowRight } from "react-icons/fa";
import ModifyButton from "../buttons/ModifyButton.tsx";

type CorrectionItemProps = {
    color: string;
    textBefore: string;
    textAfter: string;
    onDeleteSpecialCharacter: () => void;
};

export default function CorrectionItem({
    color,
    textBefore,
    textAfter,
    onDeleteSpecialCharacter
}: CorrectionItemProps) {
    const buttonText = color === "blue" ? "삭제" : "수정";
    return (
        <div className="grid grid-cols-3">
            <p className={`text-my-${color}`}>{textBefore}</p>
            <div className="flex gap-2 items-center">
                <FaArrowRight />
                <p className={color !== "blue" ? `text-my-${color}` : ""}>{textAfter}</p>
            </div>
            <div className="flex justify-end">
                <ModifyButton text={buttonText} color={color} onClick={onDeleteSpecialCharacter} />
            </div>
        </div>
    );
}
