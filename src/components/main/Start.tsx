import { MainProps } from "../../types/main";

export default function Start({ title, sectionId, description, content }: MainProps) {
    return (
        <section
            id={sectionId}
            className="bg-white flex flex-col items-center justify-center h-full text-center"
        >
            <div className="space-y-12">
                <h1 className="font-bold text-7xl ">{title}</h1>
                <p className="font-medium text-4xl">{description}</p>
                <button
                    type="button"
                    className="bg-main-1 p-7 text-3xl font-bold text-white rounded-2xl"
                >
                    {content}
                </button>
            </div>
        </section>
    );
}