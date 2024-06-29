import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import { TalentContentsProps } from "../../types/talent";

const cardVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 200
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function TalentContents({ talentData }: TalentContentsProps) {
    useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <div className="px-20 pt-36 flex justify-between">
            <div className="w-1/2">
                {talentData.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <motion.div
                                key={index}
                                className="pb-64"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <motion.div variants={cardVariants}>
                                    <div className="flex flex-col gap-6">
                                        <div className="h-12 w-12">
                                            <img src={item.icon} alt="icon" />
                                        </div>
                                        <p className="font-GmarketSansBold text-5xl">
                                            {item.keyword}
                                        </p>
                                        <p className="text-3xl">{item.description}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    }
                })}
            </div>
            <div className="w-1/2 pt-52">
                {talentData.map((item, index) => {
                    if (index % 2 !== 0) {
                        return (
                            <motion.div
                                key={index}
                                className="pb-64"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <motion.div variants={cardVariants}>
                                    <div className="flex flex-col gap-6 justify-items-end">
                                        <div className="h-12 w-12 self-end">
                                            <img src={item.icon} alt="icon" />
                                        </div>
                                        <p className="font-GmarketSansBold text-5xl self-end">
                                            {item.keyword}
                                        </p>
                                        <p className="text-3xl self-end text-right">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
