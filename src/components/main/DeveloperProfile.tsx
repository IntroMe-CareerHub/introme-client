import { DeveloperProfileProps } from "../../types/main";

export default function DeveloperProfile({ nickname }: DeveloperProfileProps) {
    return (
        <a
            href={`https://github.com/${nickname}`}
            target="_blank"
            className="flex flex-col space-y-2 items-center cursor-pointer"
        >
            <div className="rounded-full bg-white w-28 h-28" />
            <p className="font-GmarketSansMedium text-xl">@{nickname}</p>
        </a>
    );
}
