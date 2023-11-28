import cicelline from "@/asset/img/circel-line.png"
import Image from "next/image"
function BodeyNumber() {
    return (
        <>
            <div className='w-full h-[60px] flex items-center justify-center' >
                <div className='text-[#161C24] text-[32px] font-[700px]'>خطوط پیامکی اختصاصی در <span className='text-[#14A39A]'>پنل من</span></div>
            </div>

            <div className='w-full h-[60px] flex items-center justify-center mt-[4%]' >
                <div className='text-[#637181] text-[18px] font-[500px] w-[1028px] h-[88px] leading-[44px] flex items-center justify-center'>خطوط اختصاصی ارسال پیامک های تبلیغاتی ، همانند اپراتورهای تلفن همراه ، با شماره های متفاوتی ارائه می شوند .
                    اپراتورهای سرویس دهنده ایران اس ام اس ، با شماره های زیر موجود هستند که با کلیک بر روی هر کدام مشخصات و تعرفه های آنها را مشاهده میکنید.</div>
            </div>

            <div className='w-full h-[524px] relative mt-4 flex'>
                <div className="w-[58%]">
                    <div className="h-[35%] flex items-end justify-end">
                        <div className="w-[190px] h-[56px] border-[1.5px] border-[#FB9149] text-[#FB9149] rounded-full flex justify-center items-center text-[20px] font-[500px]">1000</div>
                    </div>
                </div>
                <div className='w-[42%]'>
                    <Image
                        className="w-[524px] h-[524px] absolute left-[-10%] z-0"
                        src={cicelline}
                        alt="cicelline"
                    />
                </div>
            </div>
            <div className="w-full  h-[616px] relative">
                <div className="w-full h-full absolute top-[-50%] z-10 ">
                    <div className='w-full h-[616px] flex flex-col mt-[100px]'>
                        <div className='flex flex-col justify-center items-center gap-10 w-full h-full'>
                            <div className='w-[400px] h-[44px] text-[20px] font-[700px] text-[#161C24] flex items-center justify-center'>خطوط اختصاصی اپراتور 1000</div>
                            <div className='w-[855px] h-[558px]'>
                                <div className='w-full h-full shadow-2xl rounded-md px-[20px] bg-white'>

                                    <div className='flex  w-full h-[12%] items-center justify-center'>
                                        <div className='w-1/3 flex items-center justify-center h-full'>ردیف</div>
                                        <div className='w-1/3 flex items-center justify-center h-full'>نمونه شماره</div>
                                        <div className='w-1/3 flex items-center justify-center h-full'>تعدا ارقام</div>
                                        <div className='w-1/3 flex items-center justify-center h-full flex-col'>
                                            <div>قیمت سفارشی</div>
                                            <div>(تومان)</div>
                                        </div>
                                        <div className='w-1/3 flex items-center justify-center h-full flex-col'>
                                            <div>قیمت غیر سفارشی</div>
                                            <div>(تومان)</div>
                                        </div>
                                    </div>

                                    <div className='w-full h-[1px] bg-[#D1D6D8]'></div>

                                    <div className='flex  w-full h-[12%] items-center justify-center text-[#637381] text-[18px] font-[500px]'>
                                        <div className='w-1/3 flex items-center justify-center h-full'>1</div>
                                        <div className='w-1/3 flex items-center justify-center h-full'>********1000</div>
                                        <div className='w-1/3 flex items-center justify-center h-full'>14</div>
                                        <div className='w-1/3 flex items-center justify-center h-full'>99,000</div>
                                        <div className='w-1/3 flex items-center justify-center h-full'>49,000</div>
                                    </div>
                                    


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="bg-red-500">5555</div>
        </>
    )
}

export default BodeyNumber