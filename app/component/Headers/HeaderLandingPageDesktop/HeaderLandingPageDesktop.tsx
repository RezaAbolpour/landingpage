import Link from 'next/link'
import React from 'react'
import { MenueDropDown } from '../MenueDropDown/MenueDropDown'

function HeaderLandingPageDesktop() {
    return (
        <div className='px-[60px] max-lg:px-[30px] pt-[2%]'>
            <div className='h-[200px] w-full relative'>
                <div className='absolute w-full h-full z-10'>
                    <div className='flex w-full h-[60px]'>

                        <div className='w-[20%] h-full text-[36px] max-lg:text-[28px] font-[700px] text-[#161C24] cursor-auto'><Link href="/"><span>پنل</span> <span className="text-[#14A39A]">من</span></Link></div>
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
                                <MenueDropDown/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[467px] h-[259px] rounded-full bg-[#14A39A] absolute left-[-10%] top-[-25%] blur-[240px] z-0'>5</div>
            </div>

        </div>
    )
}

export default HeaderLandingPageDesktop