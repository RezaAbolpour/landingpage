import React from 'react'

function Header() {
    return (
        <div className='w-full h-[200px] flex items-center justify-center relative'>
            <div className='w-[1200px] h-full flex'>
                <div className='w-[50%] h-full'>
                    <div className='h-[60px] w-full flex items-center text-[36px] font-[700px]'>پنل <span className="text-[#14A39A]">من</span></div>
                </div>
                <div className='w-[50%] h-[60px] relative'>
                    <div className='absolute w-full h-full flex items-center justify-center z-10 text-[16px] text-[#637181] font-[500px]'>
                        <div className='w-[20%] flex justify-end'>تعرفه ها</div>
                        <div className='w-[20%] flex justify-end'>خدمات</div>
                        <div className='w-[20%] flex justify-end'>پشتیبانی</div>
                        <div className='w-[20%] flex justify-end'>فروشگاه</div>
                        <div className='w-[20%] flex justify-end'>وبلاگ</div>
                    </div>
                </div>
            </div>
            <div className='w-[467px] h-[259px] rounded-full bg-[#14A39A] absolute left-[-8%] blur-[240px] opacity-[0.3] z-0'>5</div>
        </div>
    )
}

export default Header