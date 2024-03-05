export interface MainProps {
    title: string;
    sectionId: string;
    description?: string;
    content?: string;
    sectionImage?: string;
    children?: React.ReactNode;
}

export type DeveloperProfileProps = {
    nickname: string;
};
