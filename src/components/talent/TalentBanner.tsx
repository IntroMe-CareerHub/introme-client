import NavigationLinksButton from "./buttons/NavigationLinksButton.tsx";
import TalentIconSlider from "./TalentIconSlider.tsx";
import { TalentBannerProps } from "../../types/company";
import { useNavigate } from "react-router-dom";

export default function TalentBanner({ companyData }: TalentBannerProps) {
    const { id, name, image, identityColor, companyInfo, updatedAt, talents } = companyData;
    const { location, url, recruitUrl, techBlog } = companyInfo;

    const navigate = useNavigate();
    const handleAddTalent = () => {
        console.log("companyId:", id);
        if (id) navigate(`/company/talent/${id}/form`);
    };

    return (
        <div className={`bg-[${identityColor}] pt-28 px-9 pb-8`}>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div className="flex pt-10 pr-4 w-36 justify-end">
                        <div className="flex h-20 w-20 p-2 rounded-xl bg-white">
                            <img src={image} alt={undefined} />
                        </div>
                    </div>
                    <div className="grow">
                        <div className="flex justify-between">
                            <div className="content-end text-xl font-GmarketSansBold">
                                기업 인재상
                            </div>
                            <button
                                className={"py-2 px-4 rounded-xl bg-white"}
                                onClick={handleAddTalent}
                            >
                                인재상 추가
                            </button>
                        </div>
                        <div className="h-20 text-6xl content-center font-GmarketSansBold">
                            {name}
                        </div>
                    </div>
                </div>
                <div className="pl-36">{location}</div>
                <TalentIconSlider talents={talents} />
                <div className="flex gap-3 pl-12">
                    <NavigationLinksButton text="웹 사이트" isBlue={true} url={url} />
                    <NavigationLinksButton text="채용 사이트" url={recruitUrl} />
                    <NavigationLinksButton text="기술 블로그" url={techBlog} />
                </div>
                <div className="flex justify-end">
                    마지막 업데이트: {new Date(updatedAt).toLocaleString()}
                </div>
            </div>
        </div>
    );
}
