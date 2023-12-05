"use client";

import React from 'react'
import Menue from '../../Menue/Menue'
import Link from 'next/link';
import { MenueDropDown } from '../MenueDropDown/MenueDropDown';

function Header() {
    return (
        <>
            <div className='w-full h-[200px] flex items-center justify-center relative max-lg:hidden'>
                <div className='w-[1200px] h-full flex'>
                    <div className='w-[50%] h-full'>
                        <div className='h-[60px] w-full flex items-center text-[36px] font-[700px]'>پنل <span className="text-[#14A39A]">من</span></div>
                    </div>
                    <div className='w-[50%] h-[60px] relative'>
                        <div className='absolute w-full h-full flex items-center justify-center z-10 text-[16px] text-[#637181] font-[500px]'>
                            <div className='w-[20%] flex justify-end cursor-auto hover:text-[20px]'>
                                <Link href="/triffs">تعرفه ها</Link>
                            </div>
                            <div className='w-[20%] flex justify-end cursor-auto hover:text-[20px]'>
                                <Link href="/representation">خدمات</Link>
                            </div>
                            <div className='w-[20%] flex justify-end cursor-auto hover:text-[20px]'>
                                <Link href="/contactUs">تماس با ما</Link>
                            </div>
                            <div className='w-[20%] flex justify-end cursor-auto hover:text-[20px]'>
                                <Link href="/FAQ">سولات متداول</Link>
                            </div>
                            <div className='w-[20%] flex justify-end'>
                                <MenueDropDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[467px] h-[259px] rounded-full bg-[#14A39A] absolute left-[-8%] blur-[240px] opacity-[0.3] z-0'>5</div>
            </div>

            <div className="w-full h-[100px]  relative lg:hidden max-sm:hidden" >

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
                    </div>
                </div>
            </div>

            <div className='w-full sm:hidden  h-[100px] relative'>

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

                </div>
            </div>
        </>



    )
}

export default Header