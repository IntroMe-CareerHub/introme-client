import { DeveloperProfileProps } from "../../types/main";
import DeveloperProfile from "./DeveloperProfile";

interface DeveloperTypeProps {
    title: string;
    profiles: DeveloperProfileProps[];
    children: React.ReactNode;
}

export default function DeveloperType({ title, profiles, children }: DeveloperTypeProps) {
    return (
        <div>
            <h2 className="text-4xl border-b-2 border-main-1 pb-2 inline-block">{title}</h2>
            {children}
            <div className="flex  items-center justify-center space-x-16">
                {profiles.map(profile => (
                    <DeveloperProfile key={profile.nickname} nickname={profile.nickname} />
                ))}
            </div>
        </div>
    );
}
