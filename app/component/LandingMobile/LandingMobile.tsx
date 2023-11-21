import React from 'react'
import Menue from '../Menue/Menue'
import BodeyLandingMobile from '../BodeyLandingMobile/BodeyLandingMobile'
import HeaderLandingPajeMobile from '../Headers/HeaderLandingPajeMobile/HeaderLandingPajeMobile'

function LandingMobile() {
    return (
        <div dir='rtl' className='p-[15px]'>
            <HeaderLandingPajeMobile/>
            <BodeyLandingMobile/>
        </div>
    )
}

export default LandingMobile