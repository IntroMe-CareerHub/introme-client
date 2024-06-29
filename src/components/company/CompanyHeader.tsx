/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

interface CompanyHeaderProps {
    totalElements: number | undefined;
}

export default function CompanyHeader({ totalElements }: CompanyHeaderProps) {
    return (
        <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-2">
                <h1 className="font-GmarketSansBold text-3xl">기업별 인재상</h1>
                <span className="text-[#8A8A8A] text-sm">총 {totalElements}개 기업</span>
            </div>
            <div className="flex">
                <Link to={"/company/add"} className="border border-[#E0E0E0] rounded-lg p-3 mr-1">
                    <FaPlus className="w-5 h-5 text-[#817e7e]" />
                </Link>
                <button className="flex space-x-8 items-center border border-[#E0E0E0] rounded-lg px-4 mr-2">
                    <span className="text-sm text-[#474747]">전체</span>
                    <FaAngleDown />
                </button>
                <div className="flex items-center relative">
                    <input
                        className="w-ful h-full  border border-[#E0E0E0] rounded-lg pl-4 pr-9 placeholder:text-xs "
                        type="text"
                        placeholder="기업명을 검색해주세요."
                    />
                    <IoSearch className="absolute w-5 h-5 right-3" />
                </div>
            </div>
        </div>
    );
}
