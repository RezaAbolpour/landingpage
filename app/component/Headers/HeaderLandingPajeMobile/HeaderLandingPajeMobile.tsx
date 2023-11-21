import React from 'react'
import Menue from '../../Menue/Menue'
import BodeyLandingMobile from '../../BodeyLandingMobile/BodeyLandingMobile'

function HeaderLandingPajeMobile() {
    return (
        <div>
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
                    <div className='bg-white w-1/2 h-[30px] rounded-xl text-[#FB9149] border flex justify-center items-center'>ثبت نام</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLandingPajeMobile