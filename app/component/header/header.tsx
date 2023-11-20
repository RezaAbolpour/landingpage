
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
import { useState } from 'react'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

function Header() {
    const [showItem, setShowItem] = useState(0)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
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
                <div className='h-[150px]'>
                    <div className='h-[80px] w-full flex items-center'>
                        <div className='mx-32 text-3xl font-bold grow-[1]'><span className='font-[700px] text-[#161C24]'>پنل</span> <span className='font-[700px] text-[#14A39A]'>من</span></div>
                        <div className='flex items-center gap-16 grow-[4] font-[16px] font-sans'>
                            <div>تعرفعه ها</div>
                            <div>خدمات</div>
                            <div>پشتیبانی</div>
                            <div> فروشگاه</div>
                            <div>وبلاگ</div>
                        </div>
                        <div className='bg-gradient-to-r from-[#14A39A] from-5% w-[467px] h-[259px] opacity-[0.6] blur-[150px]'></div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='flex font-[700px]'>
                        <div className='w-[45%] text-[30px] mt-[120px]'>
                            <div className='px-28'>
                                <div className='w-[506px] text-[36px]'>
                                    <div>وقت طلاست</div>
                                    <div>با سامانه پیامکی <span className='text-[#14A39A]'>پنل من </span>و با تبلیغات</div>
                                    <div>صحیح زمان را مدیریت کنید</div>
                                </div>

                                <div className='bg-white flex rounded-full border items-center justify-center text-[20px] mt-5 w-[425px] h-[64px]'>
                                    <input type="text" placeholder='ایمیل خود را وارد کنید...' className='w-[60%] rounded-full p-2 text-[16px] outline-none bg-white text-[#CFCED3] text-right font-[500px]' />
                                    <div className='bg-[#e67d37] w-[178px] rounded-full flex justify-center items-center p-2 text-white  h-[56px]'>شروع کنید</div>
                                </div>
                            </div>

                            <div className='bg-[#14A39A]  h-[250px] absolute w-full blur-[200px] opacity-[0.6] rounded-3xl'>5</div>
                        </div>
                        <div className='w-[55%] relative h-[600px]'>
                            <Image
                                className='absolute'
                                src={CircelLine}
                                alt='Image'
                                height={800}
                                width={1200}
                            />
                            <Image
                                className='absolute left-[-10%] top-[35%]'
                                src={Circel}
                                alt='Image'
                                height={500}
                                width={715}
                            />
                            <Image
                                className='absolute left-[15%] top-[0%]'
                                src={Phone}
                                alt='Image'
                                height={700}
                                width={540}

                            />
                        </div>
                    </div>

                    <div className='bg-white absolute w-full h-[623px] bottom-[-127%]'>
                        <div className='relative'>
                            <div className='bg-white drop-shadow-lg w-[270px] h-[359px] absolute rounded-[30px] top-[-150px] right-[100px] z-1'>
                                <div className='w-[234px] h-[234px] rounded-[24px] bg-white m-[17px]'>
                                    <Image
                                        src={Unsplash2}
                                        alt='Image'
                                    />
                                </div>
                                <div className="text-[24px] font-[500px] mr-[17px]">دریافت نمایندگی</div>
                                <div className="text-[16px] font-[500px] text-[#FF690A] mr-[17px] mt-[5px]">ادامه مطب ...</div>
                            </div>

                            <div className='bg-white drop-shadow-lg w-[270px] h-[359px] absolute rounded-[30px] top-[-150px] right-[400px] z-1'>
                                <div className='w-[234px] h-[234px] rounded-[24px] bg-white m-[17px]'>
                                    <Image
                                        src={Unsplash1}
                                        alt='Image'
                                    />
                                </div>
                                <div className="text-[24px] font-[500px] mr-[17px]">آمار موفقیت ما</div>
                                <div className="text-[16px] font-[500px] text-[#FF690A] mr-[17px] mt-[5px]">ادامه مطب ...</div>
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
                                    ? (<div className='w-[534px] h-[214px] rounded-[24px] bg-[#14A39A] px-5'>
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
                                    : (<div className='w-[534px] h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
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

        </>

    )
}

export default Header