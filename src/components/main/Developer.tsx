import { MainProps } from "../../types/main";
import DeveloperType from "./DeveloperType";

export default function Developer({ title, sectionId }: MainProps) {
    return (
        <section
            id={sectionId}
            className="bg-black text-white text-center flex flex-col items-center justify-center h-full"
        >
            <h1 className="font-bold text-6xl">{title}</h1>
            <div className="mt-20 flex items-end text-center font-bold justify-between space-x-20">
                <DeveloperType
                    profiles={[{ nickname: "sooyeoniya" }, { nickname: "ssseok" }]}
                    title="FrontEnd"
                >
                    <p className="mt-10 mb-8 font-light text-2xl">
                        사용자 중심의 인터페이스를 디자인하며, <br />
                        최적화된 코드를 통해 원활한 웹 경험을 제공하는 것에 <br />
                        탁월한 프론트엔드 개발자입니다.
                    </p>
                </DeveloperType>
                <DeveloperType
                    profiles={[{ nickname: "hyebinnn" }, { nickname: "philos1234" }]}
                    title="BackEnd"
                >
                    <p className="mt-10 mb-8 font-light text-2xl">
                        안정적인 서버 운영과 효율적인 <br />
                        데이터 처리를 통해 사용자에게 원활한 서비스를 <br />
                        제공하는 백엔드 개발자입니다.
                    </p>
                </DeveloperType>
            </div>
        </section>
    );
}
