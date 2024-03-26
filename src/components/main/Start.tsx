import { Link } from "react-router-dom";
import { MainProps } from "../../types/main";
import { forwardRef } from "react";

const Start = forwardRef<HTMLDivElement, MainProps>(
    ({ title, sectionId, description, content }, ref) => {
        return (
            <section
                ref={ref}
                id={sectionId}
                className="bg-white flex flex-col items-center justify-center h-full text-center"
            >
                <div className="space-y-12">
                    <h1 className="font-GmarketSansBold text-7xl">{title}</h1>
                    <p className="text-4xl">{description}</p>
                    <Link
                        to="/check"
                        className="bg-main-1 p-7 text-3xl font-GmarketSansBold text-white rounded-2xl inline-block"
                    >
                        {content}
                    </Link>
                </div>
            </section>
        );
    }
);
export default Start;
