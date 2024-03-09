import { forwardRef } from "react";
import { MainProps } from "../../types/main";

const Advantage = forwardRef<HTMLDivElement, MainProps>(({ title, sectionId, children }, ref) => {
    return (
        <section
            ref={ref}
            id={sectionId}
            className="bg-main-2 flex flex-col items-center justify-center text-center h-full text-white space-y-5"
        >
            <h1 className="font-GmarketSansBold text-7xl">{title}</h1>
            {children}
        </section>
    );
});
export default Advantage;
