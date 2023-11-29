import circelaroundpic from "@/asset/img/circelaroundpinwebsrvice.png"
import laptop from "@/asset/img/laptap.png"
import Image from "next/image"
import CarouselComponent from "../carsor/Carsor"
import HomeSlider from "../slider/HomeSlider"
function BodeyWebService() {
    return (
        <>
            <div className=' w-full flex items-center justify-center'>
                <div className='w-[1169px] h-[1169px] relative'>
                    <Image
                        className="w-full h-full absolute"
                        src={circelaroundpic}
                        alt="circelaroundpic"
                    />
                    <div className="w-full h-[50%] flex flex-col justify-center items-center gap-14">
                        <div className="font-[700px] text-[36px] text-[#161c24] w-[600px] h-[80px] flex items-center justify-center">وب سرویس پیامکی ا بشناسیم</div>
                        <div className="w-[774px] h-[79px] text-[#637381] text-[20px] font-[500px] leading-[40px] flex items-center justify-center">سایت یا نرم افزار خود را به پنل‌های پیامکی ایران پیامک مجهز کنید تا به کسب و کار شما رونق ببخشد.
                            با این کار سایت یا نرم افزار شما قادر به ارسال پیامک در شرایط مختلف خواهد بود.</div>
                        <div className="flex items-center justify-center gap-20">
                            <div className="w-[152px] h-[48px] bg-[#FB9449] text-white text-[18px] font-[500px] flex items-center justify-center rounded-full">ثبت نام</div>
                            <div className="w-[160px] h-[48px] text-[#FB9149] border-[1.5px] border-[#FB9149] flex items-center justify-center rounded-full">درخواست مشاوره</div>
                        </div>
                    </div>

                    <div className="w-full h-[50%] relative">
                        <div className="w-full h-full absolute bg-white">
                            <div className="w-full h-full flex items-center justify-center flex-col">
                                <div className="text-[#161c24] text-[32px] font-[700px]">نمونه کد در ربان های مختلف</div>
                                <Image
                                    src={laptop}
                                    alt="laptop"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className=" w-full h-[180px] flex items-center justify-center flex-col gap-10">
                <div className="w-full h-[150px] flex items-center justify-center">
                    <div className="w-[1000px] h-[73px]  gap-5 flex items-center justify-center">
                        <div className="w-[163px] h-[73px] rounded-[100px] text-[24px] font-[500px] shadow-2xl flex items-center justify-center bg-[#FB9149] text-white">php</div>
                        <div className="w-[163px] h-[73px] rounded-[100px] text-[24px] font-[500px] shadow-2xl flex items-center justify-center">Delphi</div>
                        <div className="w-[163px] h-[73px] rounded-[100px] text-[20px] font-[500px] shadow-2xl flex items-center justify-center">تحت ویندوز C#</div>
                        <div className="w-[163px] h-[73px] rounded-[100px] text-[24px] font-[500px] shadow-2xl flex items-center justify-center">تحت وب C#</div>
                        <div className="w-[163px] h-[73px] rounded-[100px] text-[24px] font-[500px] shadow-2xl flex items-center justify-center">Linux Shell</div>
                        <div className="w-[163px] h-[73px] rounded-[100px] text-[24px] font-[500px] shadow-2xl flex items-center justify-center">VB6</div>
                    </div>
                </div>
                <div className="w-[160px] h-[48px] text-[#FB9149] border-[1.5px] border-[#FB9149] text-[18px] rounded-[100px] flex items-center justify-center">همه نمونه کد ها</div>
            </div>

            <div className="w-full h-[300px] flex items-center justify-center ">
                <div className=" w-[910px] h-[189px] bg-[#14A39A] rounded-[24px]">
                    <div className="h-[60%] flex">
                        <div className="w-[55%] h-full flex items-center justify-center">
                            <div className="w-[282px] h-[82px] text-white text-[20px] font-[500px]">وب سرویس پنل من به شما ضمانت بازگشت وجه میدهد.</div>
                        </div>
                        <div className="w-[50%] h-full flex justify-center items-center">
                            <div className="w-[282px] h-[82px] text-white text-[20px] font-[500px]">وب سرویس پنل من با وجود ارسال سریع تعرفه های پایینی دارد.</div>
                        </div>
                    </div>
                    <div className="h-[45%] flex items-center justify-center">
                        <div className="w-[200px] h-[50px] text-white font-[500px] text-[20px] border-[1.5px] border-white rounded-[100px] flex items-center justify-center">همه امکانات </div>
                    </div>
                </div>
            </div>

            <div className="h-[150px] flex items-center justify-center">
                <div className="text-[32px] font-[700px] text-[#161C24]">نرم افزار خود را به کمک افزونه ها به  <span className="text-[#14A39A]">پنل من </span> متصل بکنید</div>
            </div>

            <HomeSlider width={150} height={150} />
            {/* <div className="bg-red-500 h-[200px] w-full">
                <CarouselComponent />
            </div> */}
        </>
    )
}

export default BodeyWebService