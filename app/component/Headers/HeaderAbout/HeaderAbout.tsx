"use client";
import ImageHeaderAbout from '@/asset/img/imagHeaderAboutPage.png'
import { url } from 'inspector'
import Menue from '../../Menue/Menue'
function HeaderAbout() {
    return (
        <>
            <div className="w-full h-[623px] bgImg relative max-lg:hidden " >
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
                                <div className='w-[15%]'>تعرفه ها</div>
                                <div className='w-[15%]'>خدمات</div>
                                <div className='w-[15%]'>پشتیبانی</div>
                                <div className='w-[15%]'>فروشگاه</div>
                                <div className='w-[15%]'>وبلاگ</div>
                            </div>
                        </div>
                        <div className='h-[90%] flex items-center text-[36px]'>با تیم <span className='text-[#14A39A]'>پنل</span> من بیشتر آشنا شوید ....</div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[456px] bgImg relative lg:hidden max-sm:hidden" >
                <div className='absolute z-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="834" height="456" viewBox="0 0 834 456" fill="none">
                        <path d="M0 0H834V456H0V0Z" fill="url(#paint0_linear_2_66065)" />
                        <defs>
                            <linearGradient id="paint0_linear_2_66065" x1="617.971" y1="252.52" x2="36.0964" y2="573.987" gradientUnits="userSpaceOnUse">
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
                                <div className='w-[15%]'>تعرفه ها</div>
                                <div className='w-[15%]'>خدمات</div>
                                <div className='w-[15%]'>پشتیبانی</div>
                                <div className='w-[15%]'>فروشگاه</div>
                                <div className='w-[15%]'>وبلاگ</div>
                            </div>
                        </div>
                        <div className='h-[90%] flex items-center text-[36px]'>با تیم <span className='text-[#14A39A]'>پنل</span> من بیشتر آشنا شوید ....</div>
                    </div>
                </div>
            </div>

            <div className='w-full sm:hidden bgImgMobile h-[290px] relative'>
                <div className='absolute z-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="290" viewBox="0 0 360 290" fill="none">
                        <path d="M0 0H360V290H0V0Z" fill="url(#paint0_linear_2_65969)" />
                        <defs>
                            <linearGradient id="paint0_linear_2_65969" x1="266.75" y1="160.594" x2="12.5879" y2="197.649" gradientUnits="userSpaceOnUse">
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
                    <div className='h-[70%] w-full flex items-center '>
                        <div className='w-full h-[50px]  px-[15px]'>
                            <div className='h-[90%] flex items-center text-[20px]'>با تیم <span className='text-[#14A39A]'>پنل</span> من بیشتر آشنا شوید ....</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderAbout