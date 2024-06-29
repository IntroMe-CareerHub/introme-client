import Spinner from "../assets/Spinner.gif";

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h3>잠시만 기다려주세요.</h3>
            <img src={Spinner} alt="로딩" className="w-1/12" />
        </div>
    );
}
