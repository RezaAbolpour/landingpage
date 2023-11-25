import CircelLine from '@/asset/img/circelabout.png'
import unsplashabout from "@/asset/img/unsplashabout.png"
import toskade from "@/asset/img/taskade logo.png"
import discord from "@/asset/img/Discord_logo logo.png"
import trello from "@/asset/img/Trello_logo logo.png"
import spotify from "@/asset/img/spotify-1 logo.png"
import Image from 'next/image'
function BodeyAbout() {
    return (
        <>
            <div className="w-full h-[550px] flex">
                <div className="w-[50%] h-full pt-[2%] relative">
                    <div>
                        <Image
                            className='w-[524px] h-[524px]'
                            src={CircelLine}
                            alt='CircelLine'
                        />
                    </div>
                    <div className='absolute w-full h-full top-[20%] right-[20%]'>
                        <Image
                            className='w-[472px] h-[383px]'
                            src={unsplashabout}
                            alt='unsplashabout'
                        />
                    </div>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center flex-col px-[60px] leading-[44px]">
                    <div className='text-[32px] font-[700px] text-[#161c24] flex justify-start w-full'>داستان <span className='text-[#14A39A]'>پنل من</span></div>
                    <div className='w-full h-[323px] text-[20px] font-[500px] text-[#637381] flex justify-start '>
                        <div className='w-[496px] h-[323px] leading-[39.5px]'>
                            ما از سال 84 کار خود را پرقدرت و با ارائه خدمات به بیزنس های بزرگ آغاز کردیم. تا سالها در حوزه بیزنس های نوپا فعالیتی نداشتیم. اما از سال 1401 بر آن شدیم تا فعالیت هایمان را گسترش دهیم و به بیزنس‌های خرد و کلان بهترین خدمات را ارائه دهیم.
                            بنابراین در بخش‌های وبسایت و نرم‌افزاری تغییراتی به وجود آوردیم تا برای مخاطبانمان به راحتی قابل استفاده باشد.
                            اکنون مدعی آن هستیم که از سیستمی ساده با زیرساختی قابل اعتماد و کارایی بالا بهره می بریم.
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[100px] w-full flex justify-center text-[32px] font-[700px] text-[#161C24]'>برخی از مشتریان</div>
            <div className='w-full h-[150px] px-[150px]'>
                <div className="w-full h-full flex items-center justify-center">
                    <div className='w-full flex'>
                        <div className='w-[25%] flex justify-start'>
                            <Image
                                className='max-lg:w-[118px] max-lg:h-[35px]'
                                src={toskade}
                                alt="toskad"
                            />
                        </div>
                        <div className='w-[25%]'>
                            <Image
                                className='max-lg:w-[118px] max-lg:h-[35px]'
                                src={discord}
                                alt="discord"
                            />
                        </div>
                        <div className='w-[25%] flex justify-end'>
                            <Image
                                className='max-lg:w-[118px] max-lg:h-[35px]'
                                src={trello}
                                alt="trello"
                            />
                        </div>
                        <div className='w-[25%] flex justify-end'>
                            <Image
                                className='max-lg:w-[118px] max-lg:h-[35px]'
                                src={spotify}
                                alt="spotify"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[100px] w-full flex justify-center text-[32px] font-[700px] text-[#161C24]'>آنچه کاربرانمان درباره ما میگویند</div>
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
            <div className='flex justify-center relative w-full h-[168px]'>
                <div className='w-[1178px] h-[168px] bg-white absolute z-10 rounded-[24px] flex'>
                    <div className='w-[70%] flex items-center px-5 text-[24px] font-[500px]'>
                        ما همیشه از شنیدن نظرات ارزشمند شما و پاسخ به سوالاتتان استقبال می کنیم
                    </div>
                    <div className='w-[30%] flex justify-center items-center'>
                        <div className='w-[160px] h-[48px] flex justify-center items-center rounded-[24px] border-[#FB9149] border-[1.5px] text-[#FB9149] font-[500px] text-[18px]'>تماس با ما</div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[100px]'></div>
        </>
    )
}

export default BodeyAbout