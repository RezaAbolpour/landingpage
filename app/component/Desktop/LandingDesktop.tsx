import CircelLine from "@/asset/img/circel-line.png"
import Circel from "@/asset/img/circel.png"
import Phone from '@/asset/img/iPhone-12.png'
import Unsplash1 from "@/asset/img/upspalsh1.png"
import Unsplash2 from "@/asset/img/unsplash2.png"
import map from "@/asset/img/mapdesktop.png"
import Image from 'next/image'
import arrowUp from '@/asset/img/arrowup.png'
import arrowDown from '@/asset/img/arrowdown.png'
import KH from "@/asset/img/kh.png"
import strok from "@/asset/img/strok.png"
import fromlocation from "@/asset/img/from.png"
import id from "@/asset/img/id.png"
import ke from "@/asset/img/ke.png"
import mm from "@/asset/img/mm.png"
import toskade from "@/asset/img/taskade logo.png"
import discord from "@/asset/img/Discord_logo logo.png"
import trello from "@/asset/img/Trello_logo logo.png"
import spotify from "@/asset/img/spotify-1 logo.png"
import unsplash from "@/asset/img/unsplash_FV3GConVSss.png"
import { useState } from 'react'
import React from 'react'
function LandingDesktop() {
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
            <div dir='rtl'>
                <div className="w-full h-[259px] pr-[8%] relative">
                    <div className="flex h-2/6">
                        <div className="w-1/6 text-[36px] font-[700px] text-[#161C24] pt-[2%]" >پنل <span className="text-[#14A39A]">من</span></div>
                        <div className="flex w-5/6 items-center gap-[12%] text-[16px] font-[500px] text-[#637381] pt-[2%]">
                            <div>تعرفه ها</div>
                            <div>خدمات</div>
                            <div>پشتیبانی</div>
                            <div>فروشگاه</div>
                            <div>وبلاگ</div>
                        </div>
                        <div className="bg-[#14A39A] w-[30%] h-[360px] blur-[240px] rounded-full">1</div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='flex font-[700px]'>
                        <div className='w-[45%] text-[30px] mt-[120px] max-md:text-[28px]'>
                            <div className='px-28 max-md:px-[25px]'>
                                <div className='w-[506px] text-[36px] max-md:w-[348px] max-md:text-[28px]'>
                                    <div>وقت طلاست</div>
                                    <div>با سامانه پیامکی <span className='text-[#14A39A]'>پنل من </span>و با تبلیغات</div>
                                    <div>صحیح زمان را مدیریت کنید</div>
                                </div>

                                <div className='bg-white flex rounded-full border items-center justify-center text-[20px] mt-5 w-[425px] h-[64px] max-md:w-[319px] max-md:h-[54px] max-md:mt-[20%]'>
                                    <input type="text" placeholder='ایمیل خود را وارد کنید...' className='w-[60%] rounded-full p-2 text-[16px] outline-none bg-white text-[#CFCED3] text-right font-[500px]' />
                                    <div className='bg-[#e67d37] w-[178px] rounded-full flex justify-center items-center p-2 text-white  h-[56px] max-md:w-[132px] max-md:h-[48px]'>شروع کنید</div>
                                </div>
                            </div>

                            <div className='bg-[#14A39A]  h-[250px] absolute w-full blur-[200px] opacity-[0.6] rounded-3xl'>5</div>
                        </div>
                        <div className='w-[55%] relative h-[600px] max-md:w-[493px] max-md:h-[493px]'>
                            <Image
                                className='absolute'
                                src={CircelLine}
                                alt='Image'
                                height={800}
                                width={1200}
                            />
                            <Image
                                className='absolute left-[-10%] top-[35%] max-md:w-[392px] max-md:h-[330px]'
                                src={Circel}
                                alt='Image'
                                height={500}
                                width={715}
                            />
                            <Image
                                className='absolute left-[15%] top-[0%] max-md:w-[262px] max-md:h-[528px]'
                                src={Phone}
                                alt='Image'
                                height={700}
                                width={540}

                            />
                        </div>
                    </div>

                    <div className='bg-white absolute w-full h-[623px] bottom-[-127%]'>
                        <div className='relative'>

                            <div className='bg-white drop-shadow-lg w-[270px] h-[359px] absolute rounded-[30px] top-[-150px] right-[100px] z-1 max-md:w-[153px] max-md:h-[203px] max-md:right-[20px] max-md:top-[-45px]'>
                                <div className='w-[234px] h-[234px] rounded-[24px] bg-white m-[17px] max-md:w-[132px] max-md:h-[132px] max-md:m-[10px]'>
                                    <Image
                                        src={Unsplash2}
                                        alt='Image'
                                    />
                                </div>
                                <div className="text-[24px] font-[500px]  max-md:text-[12px]  flex items-center justify-center">دریافت نمایندگی</div>
                                <div className="text-[16px] font-[500px] text-[#FF690A]  mt-[5px] max-md:text-[12px] flex items-center justify-center">ادامه مطب ...</div>
                            </div>

                            <div className='bg-white drop-shadow-lg w-[270px] h-[359px] absolute rounded-[30px] top-[-150px] right-[400px] z-1 max-md:w-[149px] max-md:h-[203px] max-md:right-[200px] max-md:top-[-45px]'>
                                <div className='w-[234px] h-[234px] rounded-[24px] bg-white m-[17px] max-md:w-[132px] max-md:h-[132px] max-md:m-[10px]'>
                                    <Image
                                        src={Unsplash1}
                                        alt='Image'
                                    />
                                </div>
                                <div className="text-[24px] font-[500px]  max-md:text-[12px]  flex items-center justify-center">آمار موفقیت ما</div>
                                <div className="text-[16px] font-[500px] text-[#FF690A]  mt-[5px] max-md:text-[12px] flex items-center justify-center">ادامه مطب ...</div>
                            </div>

                            <div className="w-[120px] h-[46px] rounded-[100px] bg-[#fff] absolute top-[540px] right-[410px] drop-shadow-2xl z-50">
                                <div className="flex justify-center items-center h-full w-full gap-2">
                                    <div className="">Cambodia</div>
                                    <div className="">
                                        <Image
                                            src={KH}
                                            alt="flagKH"
                                            width={20}
                                            height={20}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="w-[120px] h-[46px] rounded-[100px] bg-[#fff] absolute top-[520px] right-[220px] drop-shadow-2xl z-50">
                                <div className="flex justify-center items-center h-full w-full gap-2">
                                    <div className="">Myanmar</div>
                                    <div className="">
                                        <Image
                                            src={mm}
                                            alt="flagMyanmar"
                                            width={20}
                                            height={20}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="w-[120px] h-[46px] rounded-[100px] bg-[#fff] absolute top-[700px] right-[380px] drop-shadow-2xl z-50">
                                <div className="flex justify-center items-center h-full w-full gap-2">
                                    <div className="">Indonesia</div>
                                    <div className="">
                                        <Image
                                            src={id}
                                            alt="flagIndonesia"
                                            width={20}
                                            height={20}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="w-[120px] h-[46px] rounded-[100px] bg-[#fff] absolute top-[775px] right-[40px] drop-shadow-2xl z-50">
                                <div className="flex justify-center items-center h-full w-full gap-2">
                                    <div className="">Kenya</div>
                                    <div className="">
                                        <Image
                                            src={ke}
                                            alt="flagkenya"
                                            width={20}
                                            height={20}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="absolute top-[615px] right-[300px] z-50">
                                <Image
                                    src={strok}
                                    alt="strok"
                                    width={120}
                                    height={50}
                                />
                            </div>

                            <div className="absolute top-[590px] right-[250px] z-50">
                                <Image
                                    src={fromlocation}
                                    alt="fromlocation"
                                    width={150}
                                    height={73}
                                />
                            </div>

                            <div className='absolute top-[200px]'>
                                <Image
                                    src={map}
                                    alt='imge'
                                    height={1638}
                                    width={815}

                                />
                            </div>
                            <div className='top-[1050px] absolute w-[510px] h-[250px] right-[150px]'>
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
                        <div className='absolute  w-[250px] left-[280px] top-[350px]'>
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
                        {/* blur under menue */}
                        <div className='bg-[#14A39A] absolute top-[1100px] left-[50px] w-[628px] h-[400px] opacity-[60%] blur-[200px]'></div>
                        {/* plans menue */}
                        <div className='absolute top-[1000px] left-[40px] w-[534px] h-[517px] flex flex-col gap-8'>
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
                        <div className="absolute top-[1500px] left-[50px] w-[628px] h-[259px] rounded-[628px] blur-[240px] bg-[#14A39A]"></div>
                        <div className="w-[1170px] h-[455px] absolute top-[1570px] left-[50px] bg-[#14A39A] rounded-[50px]">
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
                        <div className="w-full h-[455px] absolute top-[2025px] bg-[#fff]">
                            <div>
                                <div className="w-full  flex justify-center">
                                    <div className="w-[1070px] h-[56px] mr-[150px] flex items-center justify-between mt-[150px]">
                                        <div>
                                            <Image
                                                src={toskade}
                                                alt="toskad"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={discord}
                                                alt="discord"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={trello}
                                                alt="trello"
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={spotify}
                                                alt="spotify"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[150px] w-full">
                                <div className="mx-[55px] w-full flex gap-10">
                                    <div className="w-2/6 relative flex flex-col gap-10">
                                        <div className="bg-[#14A39A] w-[628px] h-[371px]  absolute blur-[150px] top-[25%] opacity-[20%]"></div>
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
                                    <div className="w-4/6">
                                        <div className="h-2/6 flex flex-col items-center justify-center leading-[51px]">
                                            <div className="font-[700px] text-[28px] text-[#020c18]">نمایندگی <span className="text-[#14A39A]">پنل من </span>راهی برای درآمد زایی شما</div>
                                            <div className="leading-[40px] flex flex-col justify-center items-center text-[#637381] text-[20px] font-[500px]">
                                                <div>با دریافت نمایندگی پنل من سامانه ای مشابه سامانه ما داشته</div>
                                                <div>باشید و با نام تجاری خودتان به کسب درامد در این حوزه</div>
                                                <div>بپردازید.</div>
                                            </div>
                                        </div>
                                        <div className="h-4/6">
                                            <div className="w-full h-[450px]">
                                                <Image
                                                    className="w-full h-[453px]"
                                                    src={unsplash}
                                                    alt="unsplash"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pl-[100px] mt-[100px] h-[275px] flex justify-between pr-[50px]">
                                <div className="pt-[3%] leading-[70px]">
                                    <div className="text-[36px] font-[700px]">پنل <span className="text-[#14A39A]">من</span></div>
                                    <div className="text-[16px] text-[#919EAB] font-[500px] leading-8">
                                        <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</div>
                                        <div>طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله</div>
                                        <div>ازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای</div>
                                        <div>ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه</div>
                                        <div>شناخت فراوان</div>
                                    </div>
                                </div>
                                <div className="pt-[3%] leading-[50px] W-[65px]">
                                    <div className="text-[20px] font-[500px] text-[#1D9F80]">خدمات</div>
                                    <div className="text-[16px] font-[500px] text-[#76838B]">سامانه فروش</div>
                                    <div className="text-[16px] font-[500px] text-[#76838B]">پنل کاربری</div>
                                    <div className="text-[16px] font-[500px] text-[#76838B]">اعطای نمایندگی</div>
                                </div>
                                <div className="pt-[3%] leading-[50px] W-[65px]">
                                    <div className="text-[20px] font-[500px] text-[#1D9F80]">شرکت</div>
                                    <div className="text-[16px] font-[500px] text-[#76838B]">وبلاگ</div>
                                    <div className="text-[16px] font-[500px] text-[#76838B]">فروشگاه</div>
                                    <div className="text-[16px] font-[500px] text-[#76838B]">تعرفه ها</div>
                                </div>
                                <div className="w-[329px] h-[269px] relative">
                                    <div className="bg-[#14A39A] w-[329px] h-[269px] rounded-[329px] relative blur-[240px]">
                                    </div>
                                    <div className="flex justify-between absolute w-[195px] h-[25px] left-[-12%] top-[15%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="196" height="25" viewBox="0 0 196 25" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M182.812 0C179.417 0 178.994 0.0145833 177.658 0.0770833C173.117 0.285417 170.596 2.80417 170.388 7.34583C170.327 8.68125 170.312 9.10625 170.312 12.5C170.312 15.8958 170.327 16.3208 170.388 17.6542C170.596 22.1938 173.117 24.7167 177.658 24.925C178.994 24.9854 179.417 25 182.812 25C186.208 25 186.633 24.9854 187.969 24.925C192.502 24.7167 195.033 22.1979 195.237 17.6542C195.298 16.3208 195.312 15.8958 195.312 12.5C195.312 9.10625 195.298 8.68125 195.237 7.34583C195.033 2.81042 192.51 0.283333 187.969 0.0770833C186.633 0.0145833 186.208 0 182.812 0ZM182.813 2.2541C186.15 2.2541 186.546 2.2666 187.865 2.32702C191.254 2.48119 192.833 4.08744 192.99 7.44994C193.048 8.76869 193.061 9.16244 193.061 12.4999C193.061 15.8374 193.048 16.2333 192.99 17.5499C192.833 20.9104 191.256 22.5208 187.865 22.6749C186.546 22.7333 186.152 22.7479 182.813 22.7479C179.475 22.7479 179.079 22.7354 177.763 22.6749C174.367 22.5187 172.794 20.9062 172.638 17.5499C172.579 16.2333 172.565 15.8374 172.565 12.4999C172.565 9.16244 172.579 8.7666 172.638 7.44994C172.792 4.08535 174.371 2.4791 177.763 2.32494C179.079 2.26452 179.475 2.2541 182.813 2.2541ZM176.394 12.4999C176.394 8.95412 179.269 6.0812 182.813 6.0812C186.356 6.0812 189.231 8.9562 189.231 12.4999C189.231 16.0458 186.356 18.9187 182.813 18.9187C179.269 18.9187 176.394 16.0458 176.394 12.4999ZM182.812 16.6667C180.51 16.6667 178.646 14.8021 178.646 12.5001C178.646 10.2001 180.51 8.3334 182.812 8.3334C185.112 8.3334 186.981 10.198 186.981 12.5001C186.981 14.8021 185.112 16.6667 182.812 16.6667ZM187.983 5.82911C187.983 4.99994 188.656 4.32911 189.483 4.32911C190.315 4.32911 190.985 4.99994 190.985 5.82911C190.985 6.65828 190.312 7.32911 189.483 7.32911C188.654 7.32911 187.983 6.65619 187.983 5.82911Z" fill="#FF690A" />
                                            <path d="M107.812 5.53125C106.894 5.93958 105.904 6.21458 104.867 6.33958C105.927 5.70417 106.737 4.7 107.123 3.50208C106.131 4.08958 105.033 4.51667 103.865 4.74583C102.931 3.74792 101.596 3.125 100.123 3.125C96.8104 3.125 94.3771 6.21458 95.125 9.42292C90.8646 9.20833 87.0833 7.16667 84.5542 4.06458C83.2104 6.36875 83.8583 9.38542 86.1417 10.9125C85.3021 10.8854 84.5125 10.6542 83.8208 10.2708C83.7646 12.6458 85.4688 14.8688 87.9354 15.3646C87.2146 15.5604 86.4229 15.6063 85.6188 15.4521C86.2708 17.4896 88.1687 18.9708 90.4104 19.0125C88.25 20.7042 85.5354 21.4604 82.8125 21.1396C85.0833 22.5958 87.7771 23.4438 90.6729 23.4438C100.198 23.4438 105.577 15.4 105.252 8.18542C106.256 7.46458 107.125 6.56042 107.812 5.53125Z" fill="#FF690A" />
                                            <path d="M4.16667 8.33333H0V12.5H4.16667V25H10.4167V12.5H14.2083L14.5833 8.33333H10.4167V6.59792C10.4167 5.60208 10.6167 5.20833 11.5792 5.20833H14.5833V0H9.575C5.82917 0 4.16667 1.65 4.16667 4.80833V8.33333Z" fill="#FF690A" />
                                        </svg>
                                    </div>
                                    <div className="w-[425px] h-[64px] rounded-[108px] bg-white top-[50%] absolute right-[-15%]">
                                        <div className="flex  w-full justify-between items-center">
                                            <div className="w-[147px] h-[36px] flex items-center pr-[5%]">
                                                <input type="text" placeholder="ایمیل خود را وارد کنید..." className="text-[16px] font-[500px] text-[#CFCED3] outline-none border-none" />
                                            </div>
                                            <div className="w-[178px] h-[62px] flex items-center justify-center p-[1%] ">
                                                <div className="bg-[#FB9149] w-full h-full rounded-full flex justify-center items-center text-white text-[18px] font-[500px]">شروع کنید</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px] flex w-full justify-center px-[50px]">
                                <div className="w-full h-[1.5px] bg-[#A3ACB1]"></div>
                            </div>
                            <div className="w-full  flex justify-center items-center p-[20px]">
                                <div className="text-[12px] font-[500px] text-[#A3ACB1]">2018 - 2022 تمامی حقوق محفوظ است.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>

    )
}

export default LandingDesktop