import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
type propse={image:string|StaticImport,titel:string}
function CradImage({image,titel}:propse) {
    return (
        <>
            <div className="bg-white w-[50%] h-[203px] flex justify-center pt-[2%] pb-[2%] z-50 rounded-2xl flex-col">
                <div className="h-[75%] flex justify-center">
                    <Image
                        className="h-[100%] w-[90%]"
                        src={image}
                        alt={"unspalsh2"}
                    />
                </div>
                <div className="h-[25%] flex flex-col justify-center items-center leading-[19px]">
                    <div className="text-[12px] font-[500px] text-[#0E0A23]">{titel}</div>
                    <div className="text-[12px] font-[500px] text-[#FF690A]">ادامه مطلب...</div>
                </div>
            </div>
        </>
    )
}

export default CradImage