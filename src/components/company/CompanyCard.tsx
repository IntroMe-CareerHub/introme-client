import { RiShareBoxLine } from "react-icons/ri";
import { CompanyCardProps } from "../../types/company";
import { Link } from "react-router-dom";

export default function CompanyCard({ id, image, location, url, name, talents }: CompanyCardProps) {
    // 이벤트 버블링 방지
    const handlePropagation = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.stopPropagation();
    };
    return (
        <Link
            to={`/company/talent/${id}`}
            className="border border-[#EAEBEC] rounded-2xl cursor-pointer"
        >
            <div className="p-6">
                <div className="flex  items-center">
                    <div className="bg-slate-500 w-[60px] h-[60px] mr-3" />
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold">{name}</h3>
                        <span className="text-xs text-[#8A8A8A]">{location}</span>
                    </div>
                    <a
                        target="_blank"
                        href={`http://${url}`}
                        className="ml-auto"
                        onClick={handlePropagation}
                    >
                        <RiShareBoxLine />
                    </a>
                </div>
                <div className="w-full h-[1px] bg-[#F0F0F0] my-3" />
                <div className="flex flex-col space-y-2">
                    {talents.map(talent => (
                        <span key={talent.id} className="font-semibold text-xs">
                            {talent.icon} {talent.keyword}
                        </span>
                    ))}
                </div>
                <div className="flex justify-end text-sm text-[#8A8A8A]">총 {talents.length}개</div>
            </div>
        </Link>
    );
}
