"use client";
import Link from "next/link";
import Menue from "../../Menue/Menue"
import { MenueDropDown } from "../MenueDropDown/MenueDropDown";
function HeaderContact() {
    return (
        <>
            <div className="w-full h-[623px] bgImageContactUs relative max-lg:hidden" >
                <div className='absolute z-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="623" viewBox="0 0 1440 623" fill="none">
                        <path d="M0 0H1440V623H0V0Z" fill="url(#paint0_linear_2_65735)" />
                        <defs>
                            <linearGradient id="paint0_linear_2_65735" x1="1067" y1="345" x2="100" y2="607.499" gradientUnits="userSpaceOnUse">
                                <stop offset="0.3931" stop-color="white" stop-opacity="0.96" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='w-full h-full absolute z-10'>
                    <div className='px-[60px] h-full'>
                        <div className='flex items-center justify-center'>
                            <div className='w-[20%] h-full text-[36px] max-lg:text-[28px] font-[700px] text-[#161C24]'>پنل <span className="text-[#14A39A]">من</span></div>
                            <div className='text-[#637381] font-[500px] text-[16px] flex w-full h-full  items-center max-lg:justify-between'>
                                <div className='w-[15%]  cursor-auto hover:text-[20px]'>
                                    <Link href="/triffs">تعرفه ها</Link>
                                </div>
                                <div className='w-[15%] cursor-auto hover:text-[20px]'>
                                    <Link href="/representation">خدمات</Link>
                                </div>
                                <div className='w-[15%] cursor-auto hover:text-[20px]'>
                                    <Link href="/contactUs">تماس با ما</Link>
                                </div>
                                <div className='w-[15%] cursor-auto hover:text-[20px]'>
                                    <Link href="/FAQ">سولات متداول</Link>
                                </div>
                                <div className='w-[15%]'>
                                    <MenueDropDown />
                                </div>
                            </div>
                        </div>
                        <div className='h-[90%] flex items-center text-[36px]'>راه های ارتباطی با <span className='text-[#14A39A]'>پنل من</span></div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[456px] bgImageContactUsTablate relative lg:hidden max-sm:hidden" >
                <div className='absolute z-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="832" height="462" viewBox="0 0 832 462" fill="none">
                        <path d="M0 0H833V462H0V0Z" fill="url(#paint0_linear_2_66459)" />
                        <defs>
                            <linearGradient id="paint0_linear_2_66459" x1="617.23" y1="255.843" x2="42.4018" y2="377.565" gradientUnits="userSpaceOnUse">
                                <stop offset="0.3931" stop-color="white" stop-opacity="0.96" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='w-full h-full absolute z-10'>
                    <div className='px-[60px] h-full'>
                        <div className='flex items-center justify-center'>
                            <div className='w-[20%] h-full text-[36px] max-lg:text-[28px] font-[700px] text-[#161C24]'>پنل <span className="text-[#14A39A]">من</span></div>
                            <div className='text-[#637381] font-[500px] text-[16px] flex w-full h-full  items-center max-lg:justify-between'>
                                <div className='w-[15%]  cursor-auto hover:text-[20px]'>
                                    <Link href="/triffs">تعرفه ها</Link>
                                </div>
                                <div className='w-[15%] cursor-auto hover:text-[20px]'>
                                    <Link href="/representation">خدمات</Link>
                                </div>
                                <div className='w-[15%] cursor-auto hover:text-[20px]'>
                                    <Link href="/contactUs">تماس با ما</Link>
                                </div>
                                <div className='w-[15%] cursor-auto hover:text-[20px]'>
                                    <Link href="/FAQ">سولات متداول</Link>
                                </div>
                                <div className='w-[15%]'>
                                    <MenueDropDown />
                                </div>
                            </div>
                        </div>
                        <div className='h-[90%] flex items-center text-[36px]'>با تیم <span className='text-[#14A39A]'>پنل</span> من بیشتر آشنا شوید ....</div>
                    </div>
                </div>
            </div>

            <div className='w-full sm:hidden bgImageContactUsMobile h-[300px] relative'>
                <div className='absolute z-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="359" height="300" viewBox="0 0 359 300" fill="none">
                        <path d="M0 0H360V300H0V0Z" fill="url(#paint0_linear_2_66371)" />
                        <defs>
                            <linearGradient id="paint0_linear_2_66371" x1="266.75" y1="166.132" x2="12.2406" y2="202" gradientUnits="userSpaceOnUse">
                                <stop offset="0.3931" stop-color="white" stop-opacity="0.96" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className='w-full h-full absolute z-10'>
                    <div className='p-[15px] h-[30%]'>
                        <div className='flex w-full h-[44px]'>
                            <div className='w-1/6 flex items-center'>
                                <Menue />
                            </div>
                            <div className='w-2/6  flex items-center text-[24px] gap-2'>
                                <div>پنل</div>
                                <div className='text-[#14A39A]'>من</div>
                            </div>
                            <div className='w-4/6 flex items-center gap-2 text-[14px] font-[700px]'>
                                <div className='w-1/2 h-[30px] rounded-xl bg-[#FB9149] text-white flex justify-center items-center'>ورود</div>
                                <div className='w-1/2 h-[30px] rounded-xl text-[#FB9149] border-[#FB9149] border-[1.5px] flex justify-center items-center'>ثبت نام</div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[40%] w-full flex items-center '>
                        <div className='w-full h-[50px]  px-[15px]'>
                            <div className='h-[90%] flex items-center text-[20px]'>با تیم <span className='text-[#14A39A]'>پنل</span> من بیشتر آشنا شوید ....</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeaderContact