import { NavigationLinksBtnProps } from "../../../types/talent";

export default function NavigationLinksButton({ text, isBlue, url }: NavigationLinksBtnProps) {
    if (!url) return null;
    const formattedUrl =
        url.startsWith("http://") || url.startsWith("https://") ? url : `http://${url}`;
    return (
        <a href={formattedUrl} target="_blank" rel="noopener noreferrer">
            <button
                className={`py-2 px-4 rounded-xl ${isBlue ? "bg-my-blue text-white" : "bg-white"}`}
            >
                {text}
            </button>
        </a>
    );
}
