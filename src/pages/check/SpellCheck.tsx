import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { LuCopy } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import ToggleButton from "../../components/buttons/ToggleButton.tsx";
import DisabledButton from "../../components/buttons/DisabledButton.tsx";

export default function SpellCheck() {
    const [showInfo, setShowInfo] = useState(false);
    const [text, setText] = useState<string>("");
    const [includeSpaces, setIncludeSpaces] = useState<boolean>(true);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleToggleSpaces = () => {
        setIncludeSpaces(!includeSpaces);
    };

    const textLength = includeSpaces ? text.length : text.replace(/ /g, "").length;
    const textSizeInBytes = new TextEncoder().encode(text).length;

    return (
        <div className="flex flex-col justify-center items-center h-screen px-4 pb-4">
            <div className="w-full p-6 text-center ">Header</div>
            <div className="flex justify-center items-center bg-main-3 bg-opacity-15 w-full flex-grow rounded-xl shadow-main">
                <div className="flex flex-col w-full h-full py-4 pl-4 pr-2">
                    <div className="grid grid-cols-2  pt-2 pb-3">
                        <p className="text-lg">원문</p>
                        <div className="flex gap-4 justify-end items-center">
                            <div className="flex gap-2 justify-end items-center">
                                <p className="text-xs">공백</p>
                                <ToggleButton
                                    includeSpaces={includeSpaces}
                                    handleToggleSpaces={handleToggleSpaces}
                                />
                            </div>
                            <div className="flex gap-2 justify-end items-center">
                                <div className="relative flex gap-1">
                                    <div
                                        className="cursor-pointer text-gray-500"
                                        onMouseEnter={() => setShowInfo(true)}
                                        onMouseLeave={() => setShowInfo(false)}
                                    >
                                        <AiOutlineInfoCircle />
                                    </div>
                                    <p className="text-xs">특수문자</p>
                                    {showInfo && (
                                        <>
                                            <div
                                                className="absolute z-0 border-l-8 border-r-8
                                                    border-b-8 border-transparent border-b-white
                                                    -bottom-2 left-0 before:filter drop-shadow"
                                            />
                                            <div className="absolute z-50 bg-white py-2 px-3 rounded-full shadow-toggle text-xs -bottom-10 -left-56">
                                                <p className="text-nowrap">
                                                    ‘.’과 ‘,’를 제외한 모든 특수문자는 제거됩니다.
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <ToggleButton />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full bg-white rounded-xl shadow-main  px-4 pt-4 pb-2 gap-2">
                        <textarea
                            placeholder="검사할 내용을 입력하세요."
                            className="text-sm grow resize-none focus:outline-none"
                            value={text}
                            onChange={handleTextChange}
                        />
                        <p className="flex h-13 text-xs text-zinc-500 justify-end">
                            {textLength}/20000(글자수) | {textSizeInBytes}/40000(byte)
                        </p>
                    </div>
                    <div className="flex w-full pt-4 gap-4  text-sm">
                        <DisabledButton />
                        <button
                            type="button"
                            onClick={undefined}
                            className="flex pl-6 pr-8 py-2 justify-center items-center bg-white rounded-md shadow-btn gap-1"
                        >
                            <div className="text-neutral-400">
                                <GrPowerReset />
                            </div>
                            초기화
                        </button>
                        <button
                            type="button"
                            onClick={undefined}
                            className="flex pl-4 pr-6 py-2 justify-center items-center bg-white rounded-md shadow-btn gap-1"
                        >
                            <div className="text-neutral-400">
                                <LuCopy />
                            </div>
                            전체 복사
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full py-4 pr-4 pl-2">
                    <div className="flex flex-row justify-between ">
                        <p className="text-lg pt-2 pb-3">교정 결과</p>
                        <div className="grid grid-cols-2 grid-rows-2 text-xs py-2 pr-2">
                            <div className="flex text-my-red items-center gap-2">
                                <FaCircle size="6" />
                                맞춤법
                            </div>
                            <div className="flex text-my-purple items-center gap-2">
                                <FaCircle size="6" />
                                표준어 의심
                            </div>
                            <div className="flex text-my-green items-center gap-2">
                                <FaCircle size="6" />
                                띄어쓰기
                            </div>
                            <div className="flex text-my-blue items-center gap-2">
                                <FaCircle size="6" />
                                특수문자
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full bg-white rounded-xl shadow-main  p-4 overflow-auto">
                        <div className="flex flex-col w-full h-full text-sm gap-3">
                            <div className="grid grid-cols-3">
                                <p className="text-my-blue">!!!!!</p>
                                <div className="flex gap-2 items-center">
                                    <FaArrowRight />
                                    <p>특수문자</p>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={undefined}
                                        className="bg-my-blue py-1.5 px-2.5 rounded-md text-xs text-white"
                                    >
                                        삭제
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-3">
                                <p className="text-my-purple">안뇽</p>
                                <div className="flex gap-2 items-center">
                                    <FaArrowRight />
                                    <p className="text-my-purple">안녕</p>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={undefined}
                                        className="bg-my-purple py-1.5 px-2.5 rounded-md text-xs text-white"
                                    >
                                        수정
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full pt-4 justify-between  text-sm">
                        <div className="flex items-center pl-2 text-my-red">교정 개수 3개</div>
                        <div className="flex gap-4">
                            <DisabledButton />
                            <button
                                type="button"
                                onClick={undefined}
                                className="flex px-7 py-2 justify-center items-center bg-white rounded-md shadow-btn"
                            >
                                전체 수정
                            </button>
                            <button
                                type="button"
                                onClick={undefined}
                                className="flex px-7 py-2 justify-center items-center bg-white rounded-md shadow-btn"
                            >
                                다시 검사
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
