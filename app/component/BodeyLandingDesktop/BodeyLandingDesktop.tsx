import React from 'react'
import CircelLine from "@/asset/img/circel-line.png"
import Circel from "@/asset/img/circel.png"
import Phone from '@/asset/img/iPhone-12.png'
import Unsplash1 from "@/asset/img/upspalsh1.png"
import map from "@/asset/img/mapdesktop.png"
import Unsplash2 from "@/asset/img/unsplash2.png"
import arrowUp from '@/asset/img/arrowup.png'
import arrowDown from '@/asset/img/arrowdown.png'
import toskade from "@/asset/img/taskade logo.png"
import discord from "@/asset/img/Discord_logo logo.png"
import trello from "@/asset/img/Trello_logo logo.png"
import spotify from "@/asset/img/spotify-1 logo.png"
import unsplash from "@/asset/img/unsplash_FV3GConVSss.png"
import { useState } from 'react'
import Image from 'next/image'
function BodeyLandingDesktop() {
    const [showItem, setShowItem] = useState(0)
    function handleClickShowItemOne() {
        if (showItem == 1) {
            setShowItem(0)
        } else {
            setShowItem(1)
        }

    }

    function handleClickShowItemTwo() {
        if (showItem == 2) {
            setShowItem(0)
        } else {
            setShowItem(2)
        }
    }

    function handleClickShowItemThree() {
        if (showItem == 3) {
            setShowItem(0)
        } else {
            setShowItem(3)
        }
    }

    function handleClickShowItemFour() {
        if (showItem == 4) {
            setShowItem(0)
        } else {
            setShowItem(4)
        }
    }
    return (
        <>
            <div className=''>
                <div className='h-[1169px] flex relative'>
                    <div className='w-[35%]  relative'>
                        <div className='pr-[60px]'>
                            <div className='w-[506px] text-[36px] mt-[20%]'>
                                <div className='iran-sans'>وقت طلاست</div>
                                <div>با سامانه پیامکی <span className='text-[#14A39A]'>پنل من </span>و با تبلیغات</div>
                                <div>صحیح زمان را مدیریت کنید</div>
                            </div>
                            <div className='bg-white flex rounded-full border items-center justify-center text-[20px] mt-[20%] w-[425px] h-[64px] '>
                                <input type="text" placeholder='ایمیل خود را وارد کنید...' className='w-[60%] rounded-full p-2 text-[16px] outline-none bg-white text-[#CFCED3] text-right font-[500px]' />
                                <div className='bg-[#e67d37] w-[178px] rounded-full flex justify-center items-center p-2 text-white  h-[56px]'>شروع کنید</div>
                            </div>
                        </div>
                        <div className='bg-[#14A39A] w-[1000px] h-[354px] absolute bottom-[5%] rounded-full opacity-[0.32] blur-[240px] z-20'>1</div>
                    </div>
                    <div className=' w-[65%] relative'>
                        <Image
                            className='absolute left-0'
                            src={CircelLine}
                            alt='CircelLine'
                        />
                        <Image
                            className='absolute left-[-12%] w-[725px] h-[725px] bottom-[15%]'
                            src={Circel}
                            alt='Circel'
                        />
                        <Image
                            className='absolute left-[10%] w-[540px] h-[1100px] top-0'
                            src={Phone}
                            alt='Phone'
                        />
                    </div>
                    <div className='absolute w-full h-[350px] bottom-0 bg-white '>
                        <div className='relative w-full h-full'>
                            <div className='absolute top-[-20%] w-full h-full z-30'>
                                <div className='flex pr-[60px] gap-20'>
                                    <div className='bg-white rounded-[24px]'>
                                        <div className='w-[234px] h-[234px] rounded-[24px] bg-white m-[17px]'>
                                            <Image
                                                src={Unsplash2}
                                                alt='Image'
                                            />
                                        </div>
                                        <div className="text-[24px] font-[500px] flex items-center justify-center">دریافت نمایندگی</div>
                                        <div className="text-[16px] font-[500px] text-[#FF690A]  mt-[5px]  flex items-center justify-center">ادامه مطب ...</div>
                                    </div>

                                    <div className='bg-white rounded-[24px]'>
                                        <div className='w-[234px] h-[234px] rounded-[24px] bg-white m-[17px]'>
                                            <Image
                                                src={Unsplash2}
                                                alt='Image'
                                            />
                                        </div>
                                        <div className="text-[24px] font-[500px] flex items-center justify-center">دریافت نمایندگی</div>
                                        <div className="text-[16px] font-[500px] text-[#FF690A]  mt-[5px]  flex items-center justify-center">ادامه مطب ...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-[60px] flex w-full relative'>
                    <div className='w-[60%]'>
                        <Image
                            src={map}
                            alt='imge'
                            height={1638}
                            width={815}

                        />
                    </div>
                    <div className='w-[40%] pt-[10%]'>
                        <div className='relative w-[492px] h-[88px] font-[700px] text-[32px]'>
                            <div>با <span className='text-[#1D9F80]'>پنل من </span>با تجارت های روز دنیا را تجربه کنید .....</div>
                        </div>
                        <div className='w-[496px] h-[157px] font-[500px] text-[20px] text-[#637381] mt-10 leading[39.5px]'>
                            <div>هر روز مصمم تر از روز قبل در جهت توسعه خدماتمان کوشش</div>
                            <div>می‌کنیم و خواستمان این است تا به کمک تکنولوژی‌های جدید و به</div>
                            <div>روز، سامانه پیامکی پرقدرت تری را فراهم آوریم که در شأن </div>
                            <div>  مخاطبان عزیزمان باشد.</div>
                        </div>
                        <div className='bg-[#e67d37] w-[178px] rounded-full p-2 text-white  h-[56px] flex justify-center items-center'>شروع کنید</div>
                    </div>

                </div>
                <div className='h-[500px] '>
                    <div className='flex h-full w-full'>
                        <div className='w-[50%] relative'>
                            <div className='absolute w-full  pr-[60px] top-[-18%] h-[200px]'>
                                <div className='relative w-[492px] h-[88px] font-[700px] text-[32px]'>
                                    <div>با انتخاب پنل مناسب، در جهت رشد کسب و کارتان گام بردارید.</div>
                                </div>
                                <div className='w-[496px] h-[157px] font-[500px] text-[20px] text-[#637381] mt-10 leading[39.5px]'>
                                    <div>پنل های  ما با شعار تعرفه‌های پایین و کیفیت بالا به گونه‌ای طراحی</div>
                                    <div> شده‌اند که نیازهای شما را برآورده سازند و سبب رشد کسب و کارتان</div>
                                    <div>گردند.</div>

                                </div>
                            </div>
                        </div>
                        <div className='w-[50%] relative'>
                            <div className='bg-[#14A39A] w-[628px] h-[259px] rounded-full absolute z-0 blur-[240px]'></div>
                            <div className='absolute top-[-21%] left-[15%] right-[8%] z-10'>
                                <div className=' w-full h-full flex flex-col gap-8 justify-center items-center'>
                                    {
                                        showItem == 1
                                            ? (<div className='w-[534px] h-[214px] rounded-[24px] bg-[#14A39A] px-5 transition-[height] delay-150 duration-300 ease-in-out'>
                                                <div className="flex">
                                                    <div className='font-[500px] text-[24px] grow justify-start h-[44px] items-center text-white w-[100px]'>پنل پایه</div>
                                                    <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemOne}>
                                                        <span className="ml-2 w-[24PX] bg-[#96f3ea] h-[24PX] rounded-full flex justify-center items-center">
                                                            <Image
                                                                src={arrowUp}
                                                                alt="arrowUp"
                                                                width={8}
                                                                height={5}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px]">
                                                    <div>1 خط اختصاصی</div>
                                                    <div>100 پیامک هدیه</div>
                                                    <div>30% امکانات پنل</div>
                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white">
                                                    <div className="font-[500px] text-[24px]">60 هزار تومتن</div>
                                                    <div className="w-[122px] h-[40px] rounded-[100px] bg-[#FB9149] flex justify-center items-center">ثبت نام</div>
                                                </div>
                                            </div>)
                                            : (<div className='w-[534px] h-[77px] rounded-[24px] bg-white flex items-center px-5 transition-[height] delay-150 duration-300 ease-in-out'>
                                                <div className='font-[500px] text-[24px] grow justify-start'>پنل پایه</div>
                                                <div className='flex items-center grow justify-end' onClick={handleClickShowItemOne}>
                                                    <span className="ml-2 w-[24PX] bg-[#96f3ea] h-[24PX] rounded-full flex justify-center items-center">
                                                        <Image
                                                            src={arrowDown}
                                                            alt="arrowDown"
                                                            width={8}
                                                            height={5}
                                                        />
                                                    </span>

                                                </div>
                                            </div>)
                                    }
                                    {
                                        showItem == 2
                                            ? (<div className='w-[534px] h-[214px] rounded-[24px] bg-[#14A39A] px-5'>
                                                <div className="flex">
                                                    <div className='font-[500px] text-[24px] grow justify-start h-[44px] items-center text-white w-[100px]'>پنل تجاری</div>
                                                    <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemTwo}>
                                                        <span className="ml-2 w-[24PX] bg-[#96f3ea] h-[24PX] rounded-full flex justify-center items-center">
                                                            <Image
                                                                src={arrowUp}
                                                                alt="arrowUp"
                                                                width={8}
                                                                height={5}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px]">
                                                    <div>1 خط اختصاصی</div>
                                                    <div>100 پیامک هدیه</div>
                                                    <div>30% امکانات پنل</div>
                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white">
                                                    <div className="font-[500px] text-[24px]">60 هزار تومتن</div>
                                                    <div className="w-[122px] h-[40px] rounded-[100px] bg-[#FB9149] flex justify-center items-center">ثبت نام</div>
                                                </div>
                                            </div>)
                                            : (<div className='w-[534px] h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                                                <div className='font-[500px] text-[24px] grow justify-start'>پنل تجاری</div>
                                                <div className='flex items-center grow justify-end' onClick={handleClickShowItemTwo}>
                                                    <span className="ml-2 w-[24PX] bg-[#96f3ea] h-[24PX] rounded-full flex justify-center items-center">
                                                        <Image
                                                            src={arrowDown}
                                                            alt="arrowDown"
                                                            width={8}
                                                            height={5}
                                                        />
                                                    </span>

                                                </div>
                                            </div>)
                                    }
                                    {
                                        showItem == 3
                                            ? (<div className='w-[534px] h-[214px] rounded-[24px] bg-[#14A39A] px-5'>
                                                <div className="flex">
                                                    <div className='font-[500px] text-[24px] grow justify-start h-[44px] items-center text-white w-[100px]'>پنل شرکتی</div>
                                                    <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemThree}>
                                                        <span className="ml-2 w-[24PX] bg-[#96f3ea] h-[24PX] rounded-full flex justify-center items-center">
                                                            <Image
                                                                src={arrowUp}
                                                                alt="arrowUp"
                                                                width={8}
                                                                height={5}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px]">
                                                    <div>1 خط اختصاصی</div>
                                                    <div>100 پیامک هدیه</div>
                                                    <div>30% امکانات پنل</div>
                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white">
                                                    <div className="font-[500px] text-[24px]">60 هزار تومتن</div>
                                                    <div className="w-[122px] h-[40px] rounded-[100px] bg-[#FB9149] flex justify-center items-center">ثبت نام</div>
                                                </div>
                                            </div>)
                                            : (<div className='w-[534px] h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                                                <div className='font-[500px] text-[24px] grow justify-start'>پنل شرکتی</div>
                                                <div className='flex items-center grow justify-end' onClick={handleClickShowItemThree}>
                                                    <span className="ml-2 w-[24PX] bg-[#96f3ea] h-[24PX] rounded-full flex justify-center items-center">
                                                        <Image
                                                            src={arrowDown}
                                                            alt="arrowDown"
                                                            width={8}
                                                            height={5}
                                                        />
                                                    </span>

                                                </div>
                                            </div>)
                                    }
                                    {
                                        showItem == 4
                                            ? (<div className='w-[534px] h-[214px] rounded-[24px] bg-[#14A39A] px-5'>
                                                <div className="flex">
                                                    <div className='font-[500px] text-[24px] grow justify-start h-[44px] items-center text-white w-[100px]'>پنل اقتصادی</div>
                                                    <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemFour}>
                                                        <span className="ml-2 w-[24PX] bg-[#96f3ea] h-[24PX] rounded-full flex justify-center items-center">
                                                            <Image
                                                                src={arrowUp}
                                                                alt="arrowUp"
                                                                width={8}
                                                                height={5}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px]">
                                                    <div>1 خط اختصاصی</div>
                                                    <div>100 پیامک هدیه</div>
                                                    <div>30% امکانات پنل</div>
                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white">
                                                    <div className="font-[500px] text-[24px]">60 هزار تومتن</div>
                                                    <div className="w-[122px] h-[40px] rounded-[100px] bg-[#FB9149] flex justify-center items-center">ثبت نام</div>
                                                </div>
                                            </div>)
                                            : (<div className='w-[534px] h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                                                <div className='font-[500px] text-[24px] grow justify-start'>پنل اقتصادی</div>
                                                <div className='flex items-center grow justify-end' onClick={handleClickShowItemFour}>
                                                    <span className="ml-2 w-[24PX] bg-[#96f3ea] h-[24PX] rounded-full flex justify-center items-center">
                                                        <Image
                                                            src={arrowDown}
                                                            alt="arrowDown"
                                                            width={8}
                                                            height={5}
                                                        />
                                                    </span>

                                                </div>
                                            </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[60px] h-[455px] w-full'>
                    <div className='bg-[#14A39A] rounded-[50px] w-full h-full'>
                        <div className=" flex h-full w-full">
                            <div className="w-4/6 h-full relative">
                                <div className="absolute top-[-130px] right-[100px]">
                                    <Image
                                        src={Phone}
                                        alt="phone"
                                        width={393}
                                        height={847}
                                    />
                                </div>
                            </div>
                            <div className="w-3/6 h-full pt-[50px]">
                                <div className="text-[#fff] w-[368px]]  font-[700px] text-[28px] flex justify-start items-center h-[20px]">ویژگی هایی که ما را متفاوت میکند</div>
                                <div className="h-[132px] flex flex-col gap-20">
                                    <div className="w-[428px] font-[500px] text-[18px] pt-[50px] h-[132px] text-[#E6E6E9] leading-[44px]">
                                        <div>ما با داشتن بانک شماره‌های جامع و به روز، و ارائه انواع</div>
                                        <div>خدمات پیامکی و با پشتیبانی کامل، همواره سعی در جلب</div>
                                        <div>  رضایت کاربران خود داریم.</div>
                                    </div>
                                    <div className="h-[132px] w-full flex justify-start items-center">
                                        <div className='bg-[#e67d37] w-[178px] rounded-full flex justify-center items-center p-2 text-white  h-[56px]'>شروع کنید</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[300px] w-full relative bg-white'>
                    <div className='w-full h-full absolute'>
                        <div className="w-full  flex justify-center px-[60px]  h-full items-center">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className='w-full flex'>
                                    <div className='w-[25%] flex justify-start'>
                                        <Image
                                            src={toskade}
                                            alt="toskad"
                                        />
                                    </div>
                                    <div className='w-[25%]'>
                                        <Image
                                            src={discord}
                                            alt="discord"
                                        />
                                    </div>
                                    <div className='w-[25%] flex justify-end'>
                                        <Image
                                            src={trello}
                                            alt="trello"
                                        />
                                    </div>
                                    <div className='w-[25%] flex justify-end'>
                                        <Image
                                            src={spotify}
                                            alt="spotify"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex px-[50px] relative'>
                    <div className="bg-[#14A39A] w-[628px] h-[371px]  absolute blur-[150px] top-[25%] opacity-[20%]"></div>
                    <div className='w-[35%] flex justify-center items-center gap-[50px] flex-col'>
                        <div className="w-[393px] h-[201px] rounded-[24px] bg-white z-50 flex flex-col items-center justify-center">
                            <div className="h-[44px] font-[500px] text-[24px] grow flex justify-center items-center">نمایندگی فروش</div>
                            <div className="leading-[24px] grow text-[#637381] text-[16px] font-[500px]">
                                <div>یک پنل کاربری رایگان از ما دریافت میکنید و در</div>
                                <div>فروش با ما همکاری خواهید داشت</div>
                            </div>
                            <div className="grow text-[16px] font-[500px] text-[#FF690A]">ادامه مطلب....</div>
                        </div>
                        <div className="w-[393px] h-[201px] rounded-[24px] bg-white z-50 flex flex-col items-center justify-center">
                            <div className="h-[44px] font-[500px] text-[24px] grow flex justify-center items-center">نمایندگی پیشرفته</div>
                            <div className="leading-[24px] grow text-[#637381] text-[16px] font-[500px]">
                                <div>سایت اختصاصی و پنل اختصاصی با لوگو و نام</div>
                                <div>مخصوص خودتان خواهید داشت</div>
                            </div>
                            <div className="grow text-[16px] font-[500px] text-[#FF690A]">ادامه مطلب....</div>
                        </div>
                        <div className="w-[393px] h-[201px] rounded-[24px] bg-white z-50 flex flex-col items-center justify-center">
                            <div className="h-[44px] font-[500px] text-[24px] grow flex justify-center items-center">پشتیبانی</div>
                            <div className="leading-[24px] grow text-[#637381] text-[16px] font-[500px]">
                                <div>پشتیبانی پس از فروش بر عهده کارشناس ماست</div>
                                <div></div>
                            </div>
                            <div className="grow text-[16px] font-[500px] text-[#FF690A]">ادامه مطلب....</div>
                        </div>
                    </div>
                    <div className='w-[65%]'>
                        <div className="h-2/6 flex flex-col items-center justify-center leading-[51px]">
                            <div className="font-[700px] text-[28px] text-[#020c18]">نمایندگی <span className="text-[#14A39A]">پنل من </span>راهی برای درآمد زایی شما</div>
                            <div className="leading-[40px] flex flex-col justify-center items-center text-[#637381] text-[20px] font-[500px]">
                                <div>با دریافت نمایندگی پنل من سامانه ای مشابه سامانه ما داشته</div>
                                <div>باشید و با نام تجاری خودتان به کسب درامد در این حوزه</div>
                                <div>بپردازید.</div>
                            </div>
                        </div>
                        <div className="h-full">
                            <div className="w-full h-full">
                                <Image
                                    className="w-full h-[465px]"
                                    src={unsplash}
                                    alt="unsplash"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default BodeyLandingDesktop