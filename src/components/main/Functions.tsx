import { forwardRef } from "react";
import { MainProps } from "../../types/main";

const Functions = forwardRef<HTMLDivElement, MainProps>(
    ({ title, sectionId, sectionImage, children }, ref) => {
        return (
            <section ref={ref} id={sectionId} className="flex items-center justify-center h-full">
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
);
export default Functions;
