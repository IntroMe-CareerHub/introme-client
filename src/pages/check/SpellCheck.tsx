import { GrPowerReset } from "react-icons/gr";
import { LuCopy } from "react-icons/lu";
import { BsToggleOn } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

export default function SpellCheck() {
    return (
        <div className="flex flex-col justify-center items-center h-screen px-4 pb-4">
            <div className="w-full p-6 text-center font-GmarketSansMedium">Header</div>
            <div className="flex justify-center items-center bg-main-3 bg-opacity-15 w-full flex-grow rounded-xl shadow-main">
                <div className="flex flex-col w-full h-full py-4 pl-4 pr-2">
                    <div className="grid grid-cols-2 font-GmarketSansMedium pt-2 pb-3">
                        <p className="text-lg">원문</p>
                        <div className="flex gap-4 justify-end items-center">
                            <div className="flex gap-2 justify-end items-center">
                                <p className="text-xs">공백</p>
                                <BsToggleOn size="20" color="#1DCD8B" />
                            </div>
                            <div className="flex gap-2 justify-end items-center">
                                <div className="relative flex gap-1">
                                    <div className="cursor-pointer text-gray-500">
                                        <AiOutlineInfoCircle />
                                    </div>
                                    <p className="text-xs">특수문자</p>
                                    <div
                                        className="before:absolute z-0 before:border-l-8 before:border-r-8
                                                    before:border-b-8 before:border-transparent before:border-b-white
                                                    before:-bottom-2 before:left-0 before:filter before:drop-shadow"
                                    ></div>
                                    <div className="absolute z-50 bg-white py-2 px-3 rounded-full shadow-toggle text-xs -bottom-10 -left-56">
                                        <p className="text-nowrap">
                                            ‘.’과 ‘,’를 제외한 모든 특수문자는 제거됩니다.
                                        </p>
                                    </div>
                                </div>
                                <BsToggleOn size="20" color="#1DCD8B" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full bg-white rounded-xl shadow-main font-GmarketSansMedium px-4 pt-4 pb-2 gap-2">
                        <p className="text-sm text-neutral-400 grow">검사할 내용을 입력하세요.</p>
                        <p className="flex h-13 text-xs text-zinc-500 justify-end">
                            0/20000(글자수) | 0/40000(byte)
                        </p>
                    </div>
                    <div className="flex w-full pt-4 gap-4 font-GmarketSansMedium text-sm">
                        <div className="flex px-8 py-2 justify-center items-center bg-black bg-opacity-5 text-neutral-400 rounded-md shadow-btn">
                            !@#$%
                        </div>
                        <div className="flex pl-6 pr-8 py-2 justify-center items-center bg-white rounded-md shadow-btn gap-1">
                            <div className="text-neutral-400">
                                <GrPowerReset />
                            </div>
                            초기화
                        </div>
                        <div className="flex px-8 py-2 justify-center items-center bg-black bg-opacity-5 text-neutral-400 rounded-md shadow-btn">
                            !@#$%
                        </div>
                        <div className="flex pl-4 pr-6 py-2 justify-center items-center bg-white rounded-md shadow-btn gap-1">
                            <div className="text-neutral-400">
                                <LuCopy />
                            </div>
                            전체 복사
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full py-4 pr-4 pl-2">
                    <div className="flex flex-row justify-between font-GmarketSansMedium">
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
                    <div className="w-full h-full bg-white rounded-xl shadow-main font-GmarketSansMedium p-4">
                        <p className="w-full h-full text-sm grow">결과 내용</p>
                    </div>
                    <div className="flex w-full pt-4 justify-between font-GmarketSansMedium text-sm">
                        <div className="flex items-center pl-2 text-my-red">교정 개수 3개</div>
                        <div className="flex gap-4">
                            <div className="flex px-8 py-2 justify-center items-center bg-black bg-opacity-5 text-neutral-400 rounded-md shadow-btn">
                                !@#$%
                            </div>
                            {/*<div className="flex px-7 py-2 justify-center items-center bg-white rounded-md shadow-btn">*/}
                            {/*    전체 수정*/}
                            {/*</div>*/}
                            {/*<div className="flex px-8 py-2 justify-center items-center bg-black bg-opacity-5 text-neutral-400 rounded-md shadow-btn">*/}
                            {/*    !@#$%*/}
                            {/*</div>*/}
                            <div className="flex px-7 py-2 justify-center items-center bg-white rounded-md shadow-btn">
                                다시 검사
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
