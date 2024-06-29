import React from "react";

export interface MainProps {
    title: string;
    sectionId: string;
    description?: string;
    content?: string;
    sectionImage?: string;
    children?: React.ReactNode;
}

export interface DeveloperProfileProps {
    nickname: string;
}

export interface DeveloperTypeProps {
    title: string;
    profiles: DeveloperProfileProps[];
    children: React.ReactNode;
}

export interface FloatingButtonProps {
    onScrollToStart: () => void;
    activeSection: string;
}
