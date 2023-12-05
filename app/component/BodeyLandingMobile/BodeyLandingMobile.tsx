import Image from "next/image"
import SearchLayout from "../SearchLayout/SearchLayout"
import circelLine from "@/asset/img/circel-line.png"
import circel from "@/asset/img/circel.png"
import phone from "@/asset/img/iPhone-12.png"
import unspalsh1 from "@/asset/img/upspalsh1.png"
import unspalsh2 from "@/asset/img/unsplash2.png"
import CradImage from "../Card/CradImage"
import map from "@/asset/img/map.png"
import arrowUp from '@/asset/img/arrowup.png'
import arrowDown from '@/asset/img/arrowdown.png'
import toskade from "@/asset/img/taskade logo.png"
import discord from "@/asset/img/Discord_logo logo.png"
import trello from "@/asset/img/Trello_logo logo.png"
import spotify from "@/asset/img/spotify-1 logo.png"
import { useState } from 'react'
import React from 'react'
function BodeyLandingMobile() {
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
            <div className='mt-[10%] '>
                <div className="flex flex-col  items-center text-[20px] font-[500px] leading-[40px] px-[15px]">
                    <span>وقت طلاست</span>
                    <span>با سامانه پیامکی  <span className='text-[#14A39A]'>پنل من </span>و با تبلیغات</span>
                    <span>صحیح زمان را مدیریت کنید</span>

                    <SearchLayout />

                </div>

                <div className=" w-full mt-[25%] h-[383px] relative pl-0">
                    <Image
                        className="w-[65%] h-[65%] absolute left-0 bottom-0"
                        src={circel}
                        alt={"circel"}
                    />
                    <Image
                        className="w-[55%] h-[100%] absolute bottom-0 left-[15%]"
                        src={phone}
                        alt={"phone"}
                    />
                    <Image
                        className="w-full h-full"
                        src={circelLine}
                        alt={"circelLine"}
                    />
                </div>

                <div className="w-full h-[330px] relative">
                    <div className="w-full absolute h-full top-[-5%] bg-white">
                        <div className="px-[15px] relative w-full h-full pt-[50px]">
                            <div className="flex justify-between gap-10 w-full">
                                <div className="w-[188px] h-[90px] absolute bg-[#14A39A] right-[20%] blur-[130px] z-0"></div>
                                <CradImage image={unspalsh2} titel="دریافت نمایندگی" />
                                <CradImage image={unspalsh1} titel="آمار موفقیت" />

                            </div>

                        </div>

                    </div>

                </div>
                <div className="flex items-center justify-center flex-col leading-[44px] text-[18px] font-[500px] text-[#161C24]">
                    <div>با <span className="text-[#1D9F80]">پنل من </span> با پنل من تجارتهای روز دنیا را </div>
                    <div>تجربه کنید.و ...</div>
                </div>

                <div className="flex flex-col leading-[24px] text-[14px] font-[500px] text-[#637381] justify-center items-center mt-[10%] px-[15px]">
                    <div>هر روز مصمم تر از روز قبل در جهت توسعه</div>
                    <div>خدماتمان کوشش می‌کنیم و خواستمان این است تا</div>
                    <div>به کمک تکنولوژی‌های جدید و به روز، سامانه</div>
                    <div>پیامکی پرقدرت تری را فراهم آوریم که در شأن </div>
                    <div>مخاطبان عزیزمان باشد.</div>
                </div>

                <div className="mt-[10%] px-[15px] flex justify-center items-center">
                    <div className="w-[132px] h-[48px] bg-[#FB9149] text-white flex items-center justify-center rounded-full">شروع کنید</div>
                </div>

                <div className="mt-[10%] h-[205px] w-full">
                    <Image
                        className="w-full h-full"
                        src={map}
                        alt="map"
                    />
                </div>

                <div className="mt-[10%] px-[15px]">
                    <div className="text-[18px] font-[500px] text-[#0E0A23] leading-[44px] flex flex-col items-center justify-center">
                        <div>با انتخاب پنل مناسب در جهت رشد کسب و</div>
                        <div>کارتان گام بردارید.</div>
                    </div>
                </div>

                <div className="mt-[10%] px-[15px]">
                    <div className="text-[14px] font-[500px] text-[#637381] leading-[24px] flex flex-col items-center justify-center">
                        <div>پنل های  ما با شعار تعرفه‌های پایین و کیفیت بالا</div>
                        <div>به گونه‌ای طراحی شده‌اند که نیازهای شما را برآورده</div>
                        <div>سازند و سبب رشد کسب و کارتان گردند.</div>
                    </div>
                </div>

                <div className="px-[15px] h-[500px] relative mt-[10%]">
                    <div className="relative h-full ">
                        <div className="absolute z-50 w-full h-full">
                            <div className='w-full h-full flex flex-col gap-8  '>
                                {
                                    showItem == 1
                                        ? (<div className='w-full dropDown h-[214px] rounded-[24px] bg-[#14A39A] px-5'>
                                            <div className="showchild flex">
                                                <div className='font-[500px] text-[20px] grow justify-start h-[44px] items-center text-white w-[100px]'>پنل پایه</div>
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
                                            <div className="showchild flex h-[70px] justify-between items-center text-white font-[500px] text-[12px]">
                                                <div>1 خط اختصاصی</div>
                                                <div>100 پیامک هدیه</div>
                                                <div>30% امکانات پنل</div>
                                            </div>
                                            <div className="showchild flex h-[70px] justify-between items-center text-white ">
                                                <div className="font-[500px] text-[20px]">60 هزار تومتن</div>
                                                <div className="w-[122px] h-[40px] rounded-[100px] bg-[#FB9149] flex justify-center items-center">ثبت نام</div>
                                            </div>
                                        </div>)
                                        : (<div className='w-full dropUp h-[77px] rounded-[20px] bg-white flex items-center px-5  justify-center'>
                                            <div className='font-[500px] text-[20px] grow justify-start'>پنل پایه</div>
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
                                        ? (<div className='w-full dropDown h-[214px] rounded-[20px] bg-[#14A39A] px-5'>
                                            <div className="showchild flex">
                                                <div className='font-[500px] text-[20px] grow justify-start h-[44px] items-center text-white w-[100px]'>پنل تجاری</div>
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
                                            <div className="showchild flex h-[70px] justify-between items-center text-white font-[500px] text-[12px]">
                                                <div>1 خط اختصاصی</div>
                                                <div>100 پیامک هدیه</div>
                                                <div>30% امکانات پنل</div>
                                            </div>
                                            <div className="showchild flex h-[70px] justify-between items-center text-white">
                                                <div className="font-[500px] text-[20px]">60 هزار تومتن</div>
                                                <div className="w-[122px] h-[40px] rounded-[100px] bg-[#FB9149] flex justify-center items-center">ثبت نام</div>
                                            </div>
                                        </div>)
                                        : (<div className='w-full dropUp h-[77px] rounded-[20px] bg-white flex items-center px-5 '>
                                            <div className='font-[500px] text-[20px] grow justify-start'>پنل تجاری</div>
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
                                        ? (<div className='w-full dropDown h-[214px] rounded-[20px] bg-[#14A39A] px-5'>
                                            <div className="showchild flex">
                                                <div className='font-[500px] text-[20px] grow justify-start h-[44px] items-center text-white w-[100px]'>پنل شرکتی</div>
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
                                            <div className="showchild flex h-[70px] justify-between items-center text-white font-[500px] text-[12px]">
                                                <div>1 خط اختصاصی</div>
                                                <div>100 پیامک هدیه</div>
                                                <div>30% امکانات پنل</div>
                                            </div>
                                            <div className="showchild flex h-[70px] justify-between items-center text-white">
                                                <div className="font-[500px] text-[20px]">60 هزار تومتن</div>
                                                <div className="w-[122px] h-[40px] rounded-[100px] bg-[#FB9149] flex justify-center items-center">ثبت نام</div>
                                            </div>
                                        </div>)
                                        : (<div className='w-full dropUp h-[77px] rounded-[20px] bg-white flex items-center px-5 '>
                                            <div className='font-[500px] text-[20px] grow justify-start'>پنل شرکتی</div>
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
                                        ? (<div className='w-full dropDown h-[214px] rounded-[20px] bg-[#14A39A] px-5'>
                                            <div className="showchild flex">
                                                <div className='font-[500px] text-[20px] grow justify-start h-[44px] items-center text-white w-[100px]'>پنل اقتصادی</div>
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
                                            <div className="showchild flex h-[70px] justify-between items-center text-white font-[500px] text-[12px]">
                                                <div>1 خط اختصاصی</div>
                                                <div>100 پیامک هدیه</div>
                                                <div>30% امکانات پنل</div>
                                            </div>
                                            <div className="showchild flex h-[70px] justify-between items-center text-white">
                                                <div className="font-[500px] text-[20px]">60 هزار تومتن</div>
                                                <div className="w-[122px] h-[40px] rounded-[100px] bg-[#FB9149] flex justify-center items-center">ثبت نام</div>
                                            </div>
                                        </div>)
                                        : (<div className='w-full dropUp h-[77px] rounded-[20px] bg-white flex items-center px-5 '>
                                            <div className='font-[500px] text-[20px] grow justify-start'>پنل اقتصادی</div>
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
                    <div className="absolute w-[188px] h-[457px] rounded-[457px] bg-[#14A39A] right-[30%] top-[5%] blur-[130px] z-0 opacity-[0.4]"></div>
                </div>

                <div className="w-full h-[600px] relative px-[15px] mt-5">
                    <div className="w-full h-full bg-[#14A39A] rounded-[50px] relative">
                        <div className="flex justify-center items-center px-[10px]">
                            <div className="mt-[5%] text-[18px] font-[500px] text-[#FFF]">ویژگی هایی که ما را متفاوت میکند</div>
                        </div>

                        <div className="flex justify-center items-center leading-[24px] flex-col mt-[5%] text-[#E6E6E6] text-[12px] font-[500px] px-[10px]">
                            <div>ما با داشتن بانک شماره‌های جامع و به روز، و ارائه انواع</div>
                            <div>خدمات پیامکی و با پشتیبانی کامل، همواره سعی در جلب</div>
                            <div>  رضایت کاربران خود داریم.</div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <div className="mt-[10%] w-[178px] h-[56px] bg-[#FB9149] text-white flex items-center justify-center rounded-full text-[18px] font-[500px]">خرید اشتراک</div>
                        </div>
                        <div className="absolute right-[22%] top-[50%] left-[22%]">
                            <Image
                                className="h-[350px] w-[200px]"
                                src={phone}
                                alt="phone"
                            />
                        </div>
                        <div className="absolute  opacity-[0.2] bottom-[-12%] bg-[#14A39A] w-[628px] h-[100px] blur-[240px]"></div>
                    </div>
                </div>
                <div className="bg-white relative h-[450px] w-full flex items-center flex-col justify-center gap-10 pt-[15%]">
                    <div>
                        <Image
                            className="w-[133px]"
                            src={spotify}
                            alt="spotify"
                        />
                    </div>
                    <div>
                        <Image
                            className="w-[208px]"
                            src={trello}
                            alt="trello"
                        />
                    </div>
                    <div>
                        <Image
                            className="w-[133px]"
                            src={discord}
                            alt="discord"
                        />
                    </div>
                    <div>
                        <Image
                            className="w-[133px]"
                            src={toskade}
                            alt="toskade"
                        />
                    </div>
                </div>
                <div >
                    <div className="flex items-center justify-center">
                        <div className="font-[500px] text-[18px] text-[#020c18]">نمایندگی <span className="text-[#14A39A]">پنل من </span>راهی برای درآمد زایی شما</div>
                    </div>
                    <div className="leading-[40px] flex flex-col justify-center items-center text-[#637381] text-[12px] font-[500px] mt-[5%]">
                        <div>با دریافت نمایندگی پنل من سامانه ای مشابه سامانه ما داشته</div>
                        <div>باشید و با نام تجاری خودتان به کسب درامد در این حوزه</div>
                        <div>بپردازید.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodeyLandingMobile