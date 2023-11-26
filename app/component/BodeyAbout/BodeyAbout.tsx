import CircelLine from '@/asset/img/circelabout.png'
import unsplashabout from "@/asset/img/unsplashabout.png"
import unsplashabout2 from "@/asset/img/unspalshabout2.png"
import toskade from "@/asset/img/taskade logo.png"
import discord from "@/asset/img/Discord_logo logo.png"
import trello from "@/asset/img/Trello_logo logo.png"
import spotify from "@/asset/img/spotify-1 logo.png"
import Phone from '@/asset/img/iPhone-12.png'
import Image from 'next/image'
import FooterLandingPajeDesktop from '../FooterLandingPajeDesktop/FooterLandingPajeDesktop'
function BodeyAbout() {
    return (
        <>
            <div className="w-full h-[550px] flex">
                <div className="w-[50%] h-full pt-[2%] relative">
                    <div>
                        <Image
                            className='w-[524px] max-lg:w-[377px] h-[524px] max-lg:h-[377px]'
                            src={CircelLine}
                            alt='CircelLine'
                        />
                    </div>
                    <div className='absolute w-full h-full top-[20%] right-[20%]'>
                        <Image
                            className='w-[472px] max-lg:w-[329px] h-[383px] max-lg:h-[253px]'
                            src={unsplashabout}
                            alt='unsplashabout'
                        />
                    </div>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center flex-col px-[60px] leading-[44px]">
                    <div className='text-[32px] max-lg:text-[24px] font-[700px] text-[#161c24] flex justify-start w-full'>داستان <span className='text-[#14A39A]'>پنل من</span></div>
                    <div className='w-full h-[323px] text-[20px] max-lg:text-[14px] font-[500px] text-[#637381] flex justify-start '>
                        <div className='w-[496px] max-lg:w-[331px] h-[323px] max-lg:h-[216px] leading-[39.5px] max-lg:leading-[24px]'>
                            ما از سال 84 کار خود را پرقدرت و با ارائه خدمات به بیزنس های بزرگ آغاز کردیم. تا سالها در حوزه بیزنس های نوپا فعالیتی نداشتیم. اما از سال 1401 بر آن شدیم تا فعالیت هایمان را گسترش دهیم و به بیزنس‌های خرد و کلان بهترین خدمات را ارائه دهیم.
                            بنابراین در بخش‌های وبسایت و نرم‌افزاری تغییراتی به وجود آوردیم تا برای مخاطبانمان به راحتی قابل استفاده باشد.
                            اکنون مدعی آن هستیم که از سیستمی ساده با زیرساختی قابل اعتماد و کارایی بالا بهره می بریم.
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[100px] max-lg:h-[50px] w-full flex justify-center text-[32px] max-lg:text-[24px] font-[700px] text-[#161C24]'>برخی از مشتریان</div>
            <div className='w-full h-[150px] px-[150px] max-lg:px-[60px]'>
                <div className="w-full h-full flex items-center justify-center">
                    <div className='w-full flex justify-between'>
                        <div className='w-[25%] flex justify-start'>
                            <Image
                                className='max-lg:w-[126px] max-lg:h-[35px]'
                                src={toskade}
                                alt="toskad"
                            />
                        </div>
                        <div className='w-[25%]'>
                            <Image
                                className='max-lg:w-[126px] max-lg:h-[35px]'
                                src={discord}
                                alt="discord"
                            />
                        </div>
                        <div className='w-[25%] flex justify-end'>
                            <Image
                                className='max-lg:w-[126px] max-lg:h-[35px]'
                                src={trello}
                                alt="trello"
                            />
                        </div>
                        <div className='w-[25%] flex justify-end'>
                            <Image
                                className='max-lg:w-[126px] max-lg:h-[35px]'
                                src={spotify}
                                alt="spotify"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[100px] w-full flex justify-center text-[32px] max-lg:text-[24px] font-[700px] text-[#161C24]'>آنچه کاربرانمان درباره ما میگویند</div>
            <div className='h-[290px] w-full relative'>
                <div className='w-[1176px] h-[248px] rounded-full bg-[#14A39A] absolute bottom-0 left-[10%] right-[10%] blur-[240px] z-0 opacity-[0.4]'></div>
                <div className='w-full h-full absolute z-10'>
                    <div className='flex gap-10 w-full justify-center'>
                        <div className='bg-white w-[270px] h-[159px] rounded-[30px] p-[2%]'>1</div>
                        <div className='bg-white w-[270px] h-[159px] rounded-[30px] p-[2%]'>2</div>
                        <div className='bg-white w-[270px] h-[159px] rounded-[30px] p-[2%]'>3</div>
                        <div className='bg-white w-[270px] h-[159px] rounded-[30px] p-[2%]'>4</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center relative w-full h-[168px] max-lg:h-[127px]'>
                <div className='w-[1178px] max-lg:w-[770px] h-[168px] max-lg:h-[127px] bg-white absolute z-10 rounded-[24px] flex'>
                    <div className='w-[70%] flex items-center px-5 text-[24px] max-lg:text-[18px] font-[500px]'>
                        ما همیشه از شنیدن نظرات ارزشمند شما و پاسخ به سوالاتتان استقبال می کنیم
                    </div>
                    <div className='w-[30%] flex justify-center items-center'>
                        <div className='w-[160px] h-[48px] flex justify-center items-center rounded-[24px] border-[#FB9149] border-[1.5px] text-[#FB9149] font-[500px] text-[18px]'>تماس با ما</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[550px] flex justify-center items-center px-[50px] max-lg:px-[25px]">
                <div className="w-[50%] h-[50%] flex  items-center flex-col leading-[44px] max-lg:leading-[24px]">
                    <div className='text-[32px] max-lg:text-[24px] font-[700px] text-[#161c24] flex justify-start w-full items-center '>نگاه ما به روزهای پیش رو</div>
                    <div className='w-full h-[323px] max-lg:h-[96px] text-[20px] max-lg:text-[18px] font-[500px] text-[#637381] flex justify-start'>
                        <div className='w-[496px] max-lg:w-[345px] h-[159px] max-lg:h-[96px] leading-[39.5px] max-lg:leading-[24px]'>
                            هر روز مصمم تر از روز قبل در جهت توسعه خدماتمان کوشش می‌کنیم و خواستمان این است تا به کمک تکنولوژی‌های جدید و به روز، سامانه پیامکی پرقدرت تری را فراهم آوریم که در شأن مخاطبان عزیزمان باشد.

                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-full pt-[2%] relative">
                    <div>
                        <Image
                            className='w-[524px] max-lg:w-[377px] h-[524px] max-lg:h-[377px] absolute left-[-10%]'
                            src={CircelLine}
                            alt='CircelLine'
                        />
                    </div>
                    <div>
                        <Image
                            className='w-[472px] max-lg:w-[329px] h-[363px] max-lg:h-[253px] absolute left-[5%] top-[20%]'
                            src={unsplashabout2}
                            alt='unsplashabout2'
                        />
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[50%] flex justify-center items-center flex-col gap-10 relative'>
                    <div className='relative'>
                        <div className='absolute  text-white text-[48px] font-[700px] top-[50%] right-[30%]'>98%</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="247" height="247" viewBox="0 0 247 247" fill="none">
                            <circle cx="123.5" cy="123.5" r="123" stroke="url(#paint0_linear_2_65885)" stroke-opacity="0.24" />
                            <circle cx="123" cy="147" r="100" fill="#FB9149" />
                            <defs>
                                <linearGradient id="paint0_linear_2_65885" x1="123.5" y1="0" x2="123.5" y2="247" gradientUnits="userSpaceOnUse">
                                    <stop />
                                    <stop offset="1" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='text-[20px] font-[500px] text-[#161C24]'>میزان رضایت کاربران</div>
                </div>
                <div className='w-[50%] flex justify-center items-center flex-col gap-10 relative'>
                    <div className='relative'>
                        <div className='absolute  text-white text-[48px] font-[700px] top-[50%] right-[30%]'>97%</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="247" height="247" viewBox="0 0 247 247" fill="none">
                            <circle cx="123.5" cy="123.5" r="123" stroke="url(#paint0_linear_2_65882)" stroke-opacity="0.24" />
                            <circle cx="123" cy="147" r="100" fill="#14A39A" />
                            <defs>
                                <linearGradient id="paint0_linear_2_65882" x1="123.5" y1="0" x2="123.5" y2="247" gradientUnits="userSpaceOnUse">
                                    <stop />
                                    <stop offset="1" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    <div className='text-[20px] font-[500px] text-[#161C24]'>مشتریان فعال ما</div>
                </div>
                <div className='w-[50%] flex justify-center items-center flex-col gap-10 relative'>
                    <div className='relative'>
                        <div className='absolute  text-white text-[48px] font-[700px] top-[50%] right-[30%]'>96%</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="247" height="247" viewBox="0 0 247 247" fill="none">
                            <circle cx="123" cy="147" r="100" fill="#F8C765" />
                            <circle cx="123.5" cy="123.5" r="123" stroke="url(#paint0_linear_2_65879)" stroke-opacity="0.24" />
                            <defs>
                                <linearGradient id="paint0_linear_2_65879" x1="123.5" y1="0" x2="123.5" y2="247" gradientUnits="userSpaceOnUse">
                                    <stop />
                                    <stop offset="1" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    <div className='text-[20px] font-[500px] text-[#161C24]'>رضایت از پشتیبانی</div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-[15%]'>
                <div className='w-[1170px] max-lg:w-[835px] h-[640px] max-lg:h-[457px] flex flex-col'>
                    <div className='h-[30%] relative flex justify-end'>
                        <div className='w-[628px] h-[259px] rounded-full bg-[#14A39A] blur-[240px] '></div>
                    </div>
                    <div className='h-[70%] bg-[#14A39A] rounded-[50px] flex'>
                        <div className='w-[50%] flex  justify-center flex-col gap-20 pr-[5%]'>
                            <div className='text-[24px] font-[500px] text-white'>شماره تماس : </div>
                            <div className='text-[24px] font-[500px] text-white'>آدرس : </div>
                            <div className='text-[24px] font-[500px] text-white'> پست الکترونیکی : </div>
                        </div>
                        <div className='w-[50%] flex items-center justify-center'>
                            <Image
                                className='w-[441px] max-lg:w-[281px] h-[889px] max-lg:h-[395px]'
                                src={Phone}
                                alt='Phone'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[235px] relative'>
                <div className='absolute w-full h-full bg-white'>
                    <FooterLandingPajeDesktop />
                </div>
            </div>
        </>
    )
}

export default BodeyAbout