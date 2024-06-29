import { MouseEventHandler, ReactNode } from "react";

export interface CorrectionItemProps {
    color: string;
    textBefore: string;
    textAfter: string;
    onDeleteSpecialCharacter: () => void;
}

export interface ToggleButtonProps {
    includeFunc?: boolean;
    handleToggle?: MouseEventHandler<HTMLDivElement>;
}

export interface ModifyBtnProps {
    text: string;
    color: string;
    onClick: () => void;
}

export interface ActivatedBtnProps {
    icon?: ReactNode;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
