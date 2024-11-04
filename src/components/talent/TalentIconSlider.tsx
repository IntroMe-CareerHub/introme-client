import { motion } from "framer-motion";
import { TalentIconSliderProps } from "../../types/company";

export default function TalentIconSlider({ talents }: TalentIconSliderProps) {
    const slides = talents.map(talent => ({ icon: talent.icon }));
    const num = slides.length > 0 ? Math.trunc(40 / slides.length) : 0;
    const duplicatedSlides = Array.from({ length: num }, () => slides).flat();
    return (
        <div
            className="py-32 overflow-hidden mx-auto w-5/6 flex"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            }}
        >
            <motion.div
                className="flex"
                animate={{
                    x: ["0%", "-100%"],
                    transition: {
                        ease: "linear",
                        duration: 40,
                        repeat: Infinity
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-[5%]">
                        <div className="bg-white rounded-full flex w-32 h-32 justify-center items-center">
                            <span
                                className="flex items-center justify-center h-16 w-16"
                                style={{ fontSize: "3rem", lineHeight: 1 }}
                            >
                                {slide.icon}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
