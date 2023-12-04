import cicelline from "@/asset/img/circel-line.png"
import circelLineLeft from '@/asset/img/circel-lin-left.png'
import cancel from "@/asset/img/cancel.png"
import Image from "next/image"
function BodeyNumber() {
    return (
        <>
            <div className='w-full h-[60px] max-sm:h-[180px] flex items-center justify-center' >
                <div className='text-[#161C24] text-[32px] max-lg:text-[24px] font-[700px] max-lg:text-center max-lg:mb-14 max-sm:text-center max-sm:w-[90%]'>خطوط پیامکی اختصاصی در <span className='text-[#14A39A]'>پنل من</span></div>
            </div>

            <div className='w-full h-[60px] max-sm:h-[180px] flex items-center justify-center mt-[4%] ' >
                <div className='text-[#637181] text-[18px] max-lg:text-center font-[500px] w-[1028px] max-lg:w-[80%] h-[88px] leading-[44px] flex items-center justify-center max-sm:text-center'>خطوط اختصاصی ارسال پیامک های تبلیغاتی ، همانند اپراتورهای تلفن همراه ، با شماره های متفاوتی ارائه می شوند .
                    اپراتورهای سرویس دهنده ایران اس ام اس ، با شماره های زیر موجود هستند که با کلیک بر روی هر کدام مشخصات و تعرفه های آنها را مشاهده میکنید.</div>
            </div>

            <div className='w-full h-[524px] relative mt-4 max-lg:mt-[150px] flex'>
                <div className="w-[58%] max-lg:w-[60%] max-sm:w-full">
                    <div className="h-[35%] flex items-end justify-end max-lg:items-start max-lg:justify-end max-sm:justify-center">
                        <div className="w-[190px] h-[56px] border-[1.5px] border-[#FB9149] text-[#FB9149] rounded-full flex justify-center items-center text-[20px] font-[500px]">1000</div>
                    </div>
                </div>
                <div className='w-[42%] max-lg:w-[40%] max-sm:hidden'>
                    <Image
                        className="w-[524px] max-lg:w-[380px] h-[524px] max-lg:h-[380px] absolute left-[-10%] z-0"
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
                            <div className='w-[855px] max-lg:w-[70%] h-[558px]'>
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

            <div className="w-full h-[200px] max-lg:h-[150px] flex items-center justify-center">
                <div className="bg-[#14A39A] rounded-[16px] w-[70%] max-lg:w-[80%] h-full flex items-center">
                    <div className="w-[70%]  h-full flex items-center justify-center">
                        <div className="w-[85%] h-full text-white flex items-center justify-center text-[24px] max-lg:text-[16px]">آیا برای انتخاب خط مورد نظرتان نیاز به مشورت با کارشناسان ما داارید؟</div>
                    </div>
                    <div className="w-[30%] h-full flex items-center justify-center">
                        <div className="w-[60%] max-lg:w-[80%] h-[56px] text-[18px] flex items-center justify-center text-white border-[1.5px] border-white rounded-[100px]">شروع کنید</div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[800px] flex items-center justify-center mt-[10%]">
                <div className="w-[90%] h-full">
                    <div className="w-full h-[15%] flex items-center justify-center">
                        <div className="w-[300px] h-[40px] flex items-center justify-center text-[20px] text-[#161C24] font-[500px]">
                            مقایسه خطوط از نظر برخی ویژگی ها
                        </div>
                    </div>

                    <div className="w-full h-[85%] bg-white shadow-2xl rounded-md px-[20px]">
                        <div className='flex  w-full h-[10%] items-center justify-center'>
                            <div className='w-[80%] flex items-center justify-center h-full'>معیار</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>1000</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>2000</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>3000</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>5000</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>9000</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>9999</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>21000</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>021و026</div>
                        </div>

                        <div className='w-full h-[1px] bg-[#D1D6D8]'></div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center  h-full'>ارسال لینک در متن پیامک</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M1 14L14 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14 14L1 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center  h-full'>قابلیت خدمات سازی خطوط</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M1 14L14 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14 14L1 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                                    <path d="M1 6L5.99412 11L16 1" stroke="#A3ACB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center h-full'>کیفیت ارسال از نظر تحویل به گیرنده</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                بالا
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                بالا
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                مناسب
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                مناسب
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                        </div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center h-full'>سرعت ارسال پیامک</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                بالا
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                بالا
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                مناسب
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                مناسب
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                        </div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center h-full'>گزارش دقیق تحویل به گیرنده</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                        </div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center h-full'>بازگشت هزینه پیامک های نرسیده به مخابرات</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                        </div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center h-full'>بازگشت هزینه پیامک های نرسیده به گوشی</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                        </div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center h-full'>هزینه ارسال پیامک</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                        </div>

                        <div className='flex  w-full h-[10%] items-center justify-center text-[#637381] text-[16px] font-[500px]'>
                            <div className='w-[80%] flex items-center h-full'>هزینه خرید اختصاصی</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

        </>
    )
}

export default BodeyNumber