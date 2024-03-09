import { MainProps } from "../../types/main";

export default function Info({ title, sectionId, children }: MainProps) {
    return (
        <section
            id={sectionId}
            className="bg-IntroMeLogo bg-no-repeat bg-cover  bg-center bg-black"
        >
            <div className="flex flex-col items-center justify-center text-center  h-full text-white space-y-12">
                <h1 className="text-main-1 font-GmarketSansBold text-7xl">{title}</h1>
                {children}
            </div>
        </section>
    );
}
