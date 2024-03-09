import { MainProps } from "../../types/main";

export default function Functions({ title, sectionId, sectionImage, children }: MainProps) {
    return (
        <section id={sectionId} className="flex items-center justify-center h-full">
            <div className="mr-20">
                <img src={sectionImage} alt="function_1" />
            </div>
            <div className="space-y-4">
                <h2 className="font-GmarketSansBold text-4xl">{title}</h2>
                {children}
            </div>
        </section>
    );
}
