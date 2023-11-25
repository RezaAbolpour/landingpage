import ImageHeaderAbout from '@/asset/img/imagHeaderAboutPage.png'
import { url } from 'inspector'
function HeaderAbout() {
    return (
        <div className="w-full h-[623px] bg-red-500 bgImg relative" >
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
    )
}

export default HeaderAbout