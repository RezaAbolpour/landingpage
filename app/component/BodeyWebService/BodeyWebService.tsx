import circelaroundpic from "@/asset/img/circelaroundpinwebsrvice.png"
import laptop from "@/asset/img/laptap.png"
import Image from "next/image"
import Phone from '@/asset/img/halfPhone.png'
import CarouselComponent from "../carsor/Carsor"
import FooterLandingPajeDesktop from "../FooterLandingPajeDesktop/FooterLandingPajeDesktop"
function BodeyWebService() {
    return (
        <>
            <div className=' w-full flex items-center justify-center'>
                <div className='w-[1169px] max-sm:w-full max-lg:w-[804px] h-[1169px] max-lg:h-[804px] relative'>
                    <Image
                        className="w-full h-full absolute max-sm:hidden"
                        src={circelaroundpic}
                        alt="circelaroundpic"
                    />
                    <div className="w-full h-[50%] flex flex-col justify-center items-center gap-14">
                        <div className="font-[700px] text-[36px] max-lg:text-[24px] text-[#161c24] w-[600px] max-sm:w-full h-[80px] flex items-center justify-center max-lg:text-center">وب سرویس پیامکی ا بشناسیم</div>
                        <div className="w-[774px] max-sm:w-[80%] max-lg:w-[70%] h-[79px] text-[#637381] text-[20px] font-[500px] leading-[40px] flex items-center justify-center max-lg:text-center max-sm:text-center">سایت یا نرم افزار خود را به پنل‌های پیامکی ایران پیامک مجهز کنید تا به کسب و کار شما رونق ببخشد.
                            با این کار سایت یا نرم افزار شما قادر به ارسال پیامک در شرایط مختلف خواهد بود.</div>
                        <div className="flex items-center justify-center w-full max-sm:mt-10">
                            <div className="w-[80%] flex items-center justify-center gap-20 max-sm:gap-2">
                                <div className="w-[30%] max-sm:w-[50%] h-[48px] bg-[#FB9449] text-white text-[18px] font-[500px] flex items-center justify-center rounded-full">ثبت نام</div>
                                <div className="w-[30%] max-sm:w-[50%] h-[48px] text-[#FB9149] border-[1.5px] border-[#FB9149] flex items-center justify-center rounded-full">درخواست مشاوره</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[50%] relative bg-red-500">
                        <div className="w-full h-full absolute  bg-white">
                            <div className="w-full h-full flex items-center justify-center flex-col">
                                <div className="text-[#161c24] text-[32px] max-lg:text-[18px] font-[700px]">نمونه کد در ربان های مختلف</div>
                                <Image
                                    className="max-lg:w-[426px] max-lg:h-[306px]"
                                    src={laptop}
                                    alt="laptop"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full  flex items-center justify-center flex-col gap-10 px-2">
                <div className="w-full  flex items-center justify-center mt-5">
                    <div className="w-full max-lg:w-[90%] max-sm:w-full  gap-5 flex flex-wrap items-center justify-center">
                        <div className="w-[163px] max-lg:w-[180px] max-sm:w-[30%] h-[73px] max-lg:h-[55px] rounded-[100px] text-[24px] max-lg:text-[16px] font-[500px] shadow-2xl flex items-center justify-center bg-[#FB9149] text-white">php</div>
                        <div className="w-[163px] max-lg:w-[180px] max-sm:w-[30%] h-[73px] max-lg:h-[55px] rounded-[100px] text-[24px] max-lg:text-[16px] font-[500px] shadow-2xl flex items-center justify-center">Delphi</div>
                        <div className="w-[163px] max-lg:w-[180px] max-sm:w-[30%] h-[73px] max-lg:h-[55px] rounded-[100px] text-[20px] max-lg:text-[16px] font-[500px] shadow-2xl flex items-center justify-center">تحت ویندوز C#</div>
                        <div className="w-[163px] max-lg:w-[180px] max-sm:w-[30%] h-[73px] max-lg:h-[55px] rounded-[100px] text-[24px] max-lg:text-[16px] font-[500px] shadow-2xl flex items-center justify-center">تحت وب C#</div>
                        <div className="w-[163px] max-lg:w-[180px] max-sm:w-[30%] h-[73px] max-lg:h-[55px] rounded-[100px] text-[24px] max-lg:text-[16px] font-[500px] shadow-2xl flex items-center justify-center">Linux Shell</div>
                        <div className="w-[163px] max-lg:w-[180px] max-sm:w-[30%] h-[73px] max-lg:h-[55px] rounded-[100px] text-[24px] max-lg:text-[16px] font-[500px] shadow-2xl flex items-center justify-center">VB6</div>
                    </div>
                </div>
                <div className="w-[160px] h-[48px] text-[#FB9149] border-[1.5px] border-[#FB9149] text-[18px] rounded-[100px] flex items-center justify-center">همه نمونه کد ها</div>
            </div>

            <div className="w-full h-[450px] flex items-center justify-center px-2">
                <div className="w-[75%] max-lg:w-[80%] max-sm:w-[100%] h-[189px] max-sm:h-[400px] bg-[#14A39A] rounded-[24px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
                    <div className="h-[60%] flex max-sm:flex-col">
                        <div className="w-[55%] h-full flex items-center justify-center max-sm:w-full">
                            <div className="w-[282px] h-[82px] text-white text-[20px] font-[500px] max-sm:text-center">وب سرویس پنل من به شما ضمانت بازگشت وجه میدهد.</div>
                        </div>
                        <div className="w-[50%] h-full flex justify-center items-center max-sm:w-full">
                            <div className="w-[282px] h-[82px] text-white text-[20px] font-[500px] max-sm:text-center">وب سرویس پنل من با وجود ارسال سریع تعرفه های پایینی دارد.</div>
                        </div>
                    </div>
                    <div className="h-[45%] flex items-center justify-center">
                        <div className="w-[200px] h-[50px] text-white font-[500px] text-[20px] border-[1.5px] border-white rounded-[100px] flex items-center justify-center">همه امکانات </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-full h-[150px] flex items-center justify-center">
                <div className="w-[80%]  flex items-center justify-center text-center text-[32px] max-lg:text-center max-lg:text-[24px] font-[700px] text-[#161C24]">نرم افزار خود را به کمک افزونه ها به  <span className="text-[#14A39A]">پنل من </span> متصل بکنید</div>
            </div> */}

            {/* <CarouselComponent /> */}

            <div className="w-full h-[770px] max-lg:h-[450px] max-sm:h-[900px]  flex items-center justify-center max-lg:text-[16px] ">
                <div className="w-[75%] max-sm:w-[95%] h-[90%] relative max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
                    <div className="w-full h-[30%] mazx-sm:hidden"></div>
                    <div className="w-full h-[70%] bg-[#14A39A] rounded-[50px] flex max-sm:flex-col max-sm:justify-center ">

                        <div className="w-[50%] max-sm:w-full h-full flex justify-center ">
                            <div className="w-[70%] h-full flex flex-col justify-around ">
                                <div className="w-full text-[28px] max-lg:text-[24px] text-white font-[500px] max-sm:flex max-sm:justify-center">راهنمای استفاده</div>
                                <div className="w-full text-[20px] max-lg:text-[16px] text-[#E6E6E9] font-[500px] max-sm:flex max-sm:justify-center">راهنمای ارسال</div>
                                <div className="w-full text-[20px] max-lg:text-[16px] text-[#E6E6E9] font-[500px] max-sm:flex max-sm:justify-center">راهتمای دفترچه تلفن</div>
                                <div className="w-full text-[20px] max-lg:text-[16px] text-[#E6E6E9] font-[500px] max-sm:flex max-sm:justify-center">راهنمای ارسال رمز پویا (OTP)</div>
                                <div className="w-full text-[20px] max-lg:text-[16px] text-[#E6E6E9] font-[500px] max-sm:flex max-sm:justify-center">راهنمای زمانبندی پیامک</div>
                                <div className="w-full text-[20px] max-lg:text-[16px] text-[#E6E6E9] font-[500px] max-sm:flex max-sm:justify-center">
                                    <div className="w-[175px] h-[56px] bg-[#FB9149] rounded-full flex items-center justify-center text-white text-[18px]">سایر راهنماها</div>
                                </div>
                            </div>
                        </div>

                        <div className="h-full w-[50%] max-sm:w-full flex  justify-center max-sm:relative">
                            <Image
                                className="w-[440px] max-lg:w-[220px] h-full  absolute top-0"
                                src={Phone}
                                alt="phone"
                            />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default BodeyWebService