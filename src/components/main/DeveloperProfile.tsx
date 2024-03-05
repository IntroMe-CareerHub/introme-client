import { DeveloperProfileProps } from "../../types/main";

export default function DeveloperProfile({ nickname }: DeveloperProfileProps) {
    return (
        <div className="flex flex-col space-y-2">
            <div className="rounded-full bg-white w-28 h-28" />
            <p className="font-medium text-xl">{nickname}</p>
        </div>
    );
}
