import Image from 'next/image'
import CircelLine from '@/asset/img/circelfull.png'
import phone from '@/asset/img/iPhone-12.png'
import arrowUp from '@/asset/img/arrowup.png'
import arrowDown from '@/asset/img/arrowdown.png'
import Circelaround from '@/asset/img/circelaroundpic.png'
import mosharekat1 from '@/asset/img/mosharekat1.png'
import mosharekat2 from '@/asset/img/mosharekat2.png'
import mosharekat3 from '@/asset/img/mosharekat3.png'
import toskade from "@/asset/img/taskade logo.png"
import discord from "@/asset/img/Discord_logo logo.png"
import trello from "@/asset/img/Trello_logo logo.png"
import spotify from "@/asset/img/spotify-1 logo.png"
import cancel from "@/asset/img/cancel.png"
import tick from "@/asset/img/tick.png"
import circel from "@/asset/img/circel.png"
import { useState } from 'react'
function BodeyRepresentation() {
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

    function handleClickShowItemFive() {
        if (showItem == 5) {
            setShowItem(0)
        } else {
            setShowItem(5)
        }
    }

    function handleClickShowItemSix() {
        if (showItem == 6) {
            setShowItem(0)
        } else {
            setShowItem(6)
        }
    }


    return (
        <>
            <div className='h-[630px] max-sm:h-[700px] max-lg:h-[400px] max-sm:items-center max-sm:gap-10 w-full flex pr-[180px] max-lg:pr-[60px] max-sm:px-[30px] max-sm:flex-col'>
                <div className=' w-[40%] max-sm:w-full flex justify-center items-center'>
                    <div className='h-[350px] max-sm:h-[300px] w-full max-sm:flex max-sm:items-center  max-sm:flex-col'>
                        <div className='text-[#161C24] text-[36px] max-lg:text-[24px] max-sm:text-[20px] font-[700px] max-sm:w-[241px] max-sm:h-[77px] max-sm:text-center'>نمایندگی ما راهی آسان برای درامدزایی شما</div>
                        <div className='w-[435px] max-lg:w-[280px] h-[132px] max-lg:h-[88px] text-[#637381] text-[18px] font-[500px] leading-[44px] max-sm:text-center'>
                            شروع یک کسب و کار موفق با ثبت نام و دریافت نمایندگی پنل
                        </div>
                        <div className='w-[152px] h-[48px] rounded-full bg-[#FB9149] text-white flex items-center mt-[8%] justify-center cursor-pointer hover:shadow-2xl'>ثبت نام</div>
                    </div>
                </div>
                <div className='w-[60%] max-sm:w-full relative max-sm:flex  max-sm:justify-center'>
                    <Image
                        className='absolute w-[752px] max-sm:w-[319px] max-lg:w-[460px] h-[752px] max-sm:h-[319px] max-lg:h-[460px] z-10'
                        src={CircelLine}
                        alt='CircelLine'
                    />
                    <Image
                        className='absolute w-[324px] max-sm:w-[132px] max-lg:w-[197px] h-[654px] max-sm:h-[286px] max-lg:h-[424px] right-[26%] top-[2%] z-30'
                        src={phone}
                        alt='phone'
                    />
                    <div className='w-[1000px] max-lg:w-[750px] h-[354px] bg-[#14A39A] opacity-[0.6] rounded-full left-0 absolute top-[25%] blur-[240px] z-0'></div>
                </div>
            </div>
            <div className='bg-white h-[450px] max-sm:w-full max-sm:h-[520px]  relative'>
                <div className='w-full h-full absolute z-20 bg-white'>
                    <div className='h-[200px] w-full flex items-center justify-center '>
                        <div className='h-[100px] w-full flex items-center justify-center text-[32px] font-[700px] text-[#161C24]'>راههای دریافت نمایندگی</div>
                    </div>
                    <div className='w-[1000px] max-sm:w-full  h-[354px] max-sm:h-[200px] max-lg:h-[165px] rounded-full absolute bg-[#14A39A] z-0 blur-[240px] opacity-[0.32]'></div>
                    <div className='w-full h-full px-[40px] max-sm:px-[10px]  absolute z-10'>
                        <div className='flex justify-center max-sm:items-center gap-16 max-sm:flex-col max-sm:gap-5'>
                            <div className='flex gap-10 flex-col'>
                                {
                                    showItem == 5
                                        ? (<div className='w-[534px] h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                                            <div className="flex">
                                                <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemFive}>
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
                                            <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                                            </div>
                                            <div className="flex h-[70px] justify-between items-center text-white">

                                            </div>
                                        </div>)
                                        : (<div className='w-[534px] h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                                            <div className='font-[500px] text-[16px] max-lg:text-[14px] grow justify-start'>نمایندگی فروش
                                            </div>
                                            <div className='flex items-center grow justify-end' onClick={handleClickShowItemFive}>
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
                            <div className='flex gap-10 flex-col'>
                                {
                                    showItem == 6
                                        ? (<div className='w-[534px] h-[214px] max-lg:w-[328px] max-sm:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                                            <div className="flex">
                                                <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemSix}>
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
                                            <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                                            </div>
                                            <div className="flex h-[70px] justify-between items-center text-white">

                                            </div>
                                        </div>)
                                        : (<div className='w-[534px] h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                                            <div className='font-[500px] text-[16px] max-lg:text-[14px] grow justify-start'>نمایندگی پیشرفته
                                            </div>
                                            <div className='flex items-center grow justify-end' onClick={handleClickShowItemSix}>
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

            <div className='w-full h-[240px] max-sm:h-[330px]  relative'>
                <div className='absolute w-full h-[168px] max-sm:h-full z-20'>
                    <div className='w-full h-full  flex items-center justify-center'>
                        <div className='w-[75%] max-lg:w-[95%] h-full flex max-sm:flex-col bg-white shadow-2xl rounded-[24px] max-sm:justify-center max-sm:items-center max-sm:gap-14'>
                            <div className='w-[70%] h-full flex items-center justify-center'>
                                <div className='w-[706px] max-sm:w-full h-[100px] text-[24px] max-lg:text-[18px] font-[500px] leading-[50px] pr-5 max-sm:text-center'>
                                    چنانچه نیاز به شغل دوم  دارید و وقت ارائه خدمات پشتیبانی پس از فروش را ندارید، همکاری در فروش مناسب شماست
                                </div>
                            </div>
                            <div className='w-[30%] h-full flex items-center justify-center'>
                                <div className='w-[160px] max-sm:w-full h-[48px] text-[#FB9149] txet-[18px] fonnt-[500px] flex items-center justify-center border-[1.5px] border-[#FB9149] rounded-[24px]'>مشاور باما</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='h-[500px] max-sm:h-[1400px] w-full relative'>
                <div className='h-[25%] max-sm:h-[15%] flex items-center justify-center'>
                    <div className='w-[800px] max-sm:w-full h-[44px] text-[28px] max-lg:text-[20px] max-sm:text-[20px] font-[700px] text-[#161C24] flex items-center justify-center max-sm:text-center'>
                        مشارکت با پنل من از چه راههایی برای شما قابلیت درآمدزایی دارد
                    </div>
                </div>
                <div className='h-[75%] max-sm:h-[1100px] w-full relative'>
                    <div className='w-full h-full absolute'>
                        <div className='w-full h-full flex items-center justify-center'>
                            <div className='bg-[#14A39A] w-[915px] max-sm:w-full h-[179px] opacity-[0.3] blur-[240px]'>5</div>
                        </div>
                    </div>

                    <div className='w-full h-full absolute'>
                        <div className='w-full h-full flex max-sm:flex-col items-center justify-center gap-28 max-sm:gap-0 max-lg:px-[10px] max-sm:px-[10px]'>
                            <div className='w-[270px] max-sm:w-full h-[300px] '>
                                <div className='h-[80%] max-lg:h-[60%] relative max-sm:flex max-sm:justify-center'>

                                    <Image
                                        className='absolute w-[200px] max-lg:w-[149px] h-[200px] max-lg:h-[149px] bottom-0 right-[8%] max-sm:right-[31%] max-sm:left-[31%] '
                                        src={mosharekat3}
                                        alt='mosharekat3'
                                    />
                                    <Image
                                        className=' w-[247px] max-lg:w-[184px] h-[247px] max-lg:h-[184px]'
                                        src={Circelaround}
                                        alt='Circelaround'
                                    />
                                </div>
                                <div className='h-[20%] text-[20px] max-lg:text-[18px] font-[500px] text-[#161C24] w-full flex items-center justify-center'>فروش پیامک</div>
                            </div>
                            <div className='w-[270px] max-sm:w-full h-[300px]'>
                                <div className='h-[80%] max-lg:h-[60%] relative max-sm:flex max-sm:justify-center'>

                                    <Image
                                        className='absolute w-[200px] max-lg:w-[149px] h-[200px] max-lg:h-[149px] bottom-0 right-[8%] max-sm:right-[31%] max-sm:left-[31%] '
                                        src={mosharekat2}
                                        alt='mosharekat2'
                                    />
                                    <Image
                                        className=' w-[247px] max-lg:w-[184px] h-[247px] max-lg:h-[184px]'
                                        src={Circelaround}
                                        alt='Circelaround'
                                    />
                                </div>
                                <div className='h-[20%] text-[20px] max-lg:text-[18px] font-[500px] text-[#161C24] w-full flex items-center justify-center'>فروش بسته های ایران پیامک</div>
                            </div>
                            <div className='w-[270px] max-sm:w-full h-[300px] '>
                                <div className='h-[80%] max-lg:h-[60%] relative max-sm:flex max-sm:justify-center'>

                                    <Image
                                        className='absolute w-[200px] max-lg:w-[149px] h-[200px] max-lg:h-[149px] bottom-0 right-[8%] max-sm:right-[31%] max-sm:left-[31%] '
                                        src={mosharekat1}
                                        alt='mosharekat1'
                                    />
                                    <Image
                                        className=' w-[247px] max-lg:w-[184px] h-[247px] max-lg:h-[184px]'
                                        src={Circelaround}
                                        alt='Circelaround'
                                    />
                                </div>
                                <div className='h-[20%] text-[20px] max-lg:text-[18px] font-[500px] text-[#161C24] w-full  flex items-center justify-center'>فروش خطوط اختصاصی مشتریان</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[240px] max-sm:h-[330px]  relative'>
                <div className='absolute w-full h-[168px] max-sm:h-full z-20'>
                    <div className='w-full h-full  flex items-center justify-center'>
                        <div className='w-[75%] max-lg:w-[95%] h-full flex max-sm:flex-col bg-white shadow-2xl rounded-[24px] max-sm:justify-center max-sm:items-center max-sm:gap-14'>
                            <div className='w-[70%] h-full flex items-center justify-center'>
                                <div className='w-[706px] h-[100px] text-[24px] max-lg:text-[18px] font-[500px] leading-[50px] pr-5 max-sm:text-center'>
                                    اگر مهارت فروش دارید ولی سرمایه کافی رای شروع یک کسب و کار را ندارید همکاری در فروش مناسب شماست
                                </div>
                            </div>
                            <div className='w-[30%] h-full flex items-center justify-center'>
                                <div className='w-[160px] h-[48px] text-[#FB9149] txet-[18px] fonnt-[500px] flex items-center justify-center border-[1.5px] border-[#FB9149] rounded-[24px]'>مشاور باما</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='h-[640px] max-sm:h-[1200px] max-lg:hg-[430px] flex items-center justify-center'>
                <div className='h-[455px] max-lg:h-[340px] w-[1170px] max-sm:w-[400px] max-lg:w-[729px] max-sm:h-[800px] bg-[#14A39A] flex max-sm:flex-col rounded-[50px]'>
                    <div className='w-[50%] h-full flex items-center justify-center  max-sm:w-full'>
                        <div className='h-[400px] w-[530px] leading-[50px] max-sm:leading-[20px] flex justify-center max-sm:items-center flex-col max-lg:px-[20px]'>
                            <div className='text-[28px] max-lg:text-[20px] font-[700px] text-white max-sm:text-center max-sm:w-[50%] max-sm:flex max-sm:justify-center max-sm:items-center max-sm:leading-10'>اگر نمایندگی پنل ما را دریافت کنید:</div>
                            <div className='h-[79px] w-full  max-sm:w-[60%] text-[#E6E6E9] text-[20px] max-sm:text-[14px] max-lg:text-[14px] font-[500px] max-sm:text-center max-sm:flex max-sm:items-center max-sm:justify-center'>
                                نیاز به تمدید سالیانه ندارید و می توانید بسته های جدید با تعرفه های دلخواه تعریف کنید.
                            </div>
                            <div className='h-[79px] w-full max-sm:w-[50%] max-sm:flex max-sm:items-center max-sm:justify-center text-[#E6E6E9] text-[20px] max-sm:text-[14px] max-lg:text-[14px] font-[500px] max-sm:text-center'>
                                پشتیبانی پس از فروش با ماست و امکان دادن نماینگی به متقاضیان دیگر را دارید.
                            </div>
                            <div className='h-[79px] w-full max-sm:w-[50%] max-sm:flex max-sm:items-center max-sm:justify-center text-[#E6E6E9] text-[20px] max-sm:text-[14px] max-lg:text-[14px] font-[500px] max-sm:text-center'>
                                ضمانت سی رو بازگشت وجه را به شما می دهیم.
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] max-sm:w-full h-full relative'>
                        <div className='w-[628px] h-[259px] rounded-full absolute left-[1%] top-[10%] bg-[#14A39A] opacity-[0.6] blur-[240px]'>
                        </div>
                        <Image
                            className='w-[441px] max-lg:w-[246px] max-sm:w-[230px] h-[889px] max-lg:h-[500px] max-sm:h-[464px] absolute top-[-20%] right-[5%] left-[5%] max-sm:left-[20%] max-sm:right-[20%] max-sm:top-[10%]'
                            src={phone}
                            alt='phone'
                        />
                    </div>
                </div>
            </div>

            <div className='bg-white w-full h-[250px] max-sm:h-[330px]  relative'>
                <div className='w-full h-full absolute top-[-37%] max-lg:top-[-60%] bg-white flex items-center justify-center'>
                    <div className='w-[1170px] max-lg:h-[80%] max-lg:items-end max-lg:justify-center flex'>
                        <div className='w-full flex max-sm:flex-col max-sm:gap-16 px-[30px] max-lg:h-[50%] max-lg:justify-center max-lg:items-center'>
                            <div className='w-[25%] max-sm:w-full flex justify-start max-sm:justify-center'>
                                <Image
                                    className='max-lg:w-[118px] max-lg:h-[35px] max-sm:h-[40px] max-sm:w-[150px]'
                                    src={toskade}
                                    alt="toskad"
                                />
                            </div>
                            <div className='w-[25%] max-sm:w-full max-sm:justify-center max-sm:flex'>
                                <Image
                                    className='max-lg:w-[118px] max-lg:h-[35px] max-sm:h-[40px] max-sm:w-[150px]'
                                    src={discord}
                                    alt="discord"
                                />
                            </div>
                            <div className='w-[25%] max-sm:w-full max-sm:justify-center flex justify-end'>
                                <Image
                                    className='max-lg:w-[118px] max-lg:h-[35px] max-sm:h-[40px] max-sm:w-[150px]'
                                    src={trello}
                                    alt="trello"
                                />
                            </div>
                            <div className='w-[25%] max-sm:w-full max-sm:justify-center flex justify-end'>
                                <Image
                                    className='max-lg:w-[118px] max-lg:h-[35px] max-sm:h-[40px] max-sm:w-[150px]'
                                    src={spotify}
                                    alt="spotify"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[500px] flex flex-col justify-center items-center gap-10'>
                <div className='w-[400px] h-[44px] text-[32px] max-lg:text-[20px] flex justify-center items-center font-[700px] text-[#161C24]'>تعرفه دریافت نمایندگی <span className='text-[#14A39A]'> پنل من</span></div>
                <div className='w-[718px] max-sm:w-[329px] h-[253px] '>
                    <div className='w-full h-full shadow-2xl rounded-md'>

                        <div className='flex  w-full h-[33%] items-center justify-center'>
                            <div className='w-1/3 flex items-center justify-center h-full'>روش کسب دارمد</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>وب سایت اختصاصی</div>
                            <div className='w-1/3 flex items-center justify-center h-full'> قیمت</div>
                        </div>

                        <div className='w-full h-[1px] bg-[#D1D6D8]'></div>

                        <div className='flex  w-full h-[33%] items-center justify-center'>
                            <div className='w-[670px] h-[53px] text-white flex items-center justify-center bg-[#14A39A] rounded-full'>
                                <div className='w-1/3 flex items-center justify-center h-full'>دریافت پنل</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>
                                    <Image
                                        src={cancel}
                                        alt='cancel'
                                    />
                                </div>
                                <div className='w-1/3 flex items-center justify-center h-full'> رایگان</div>
                            </div>
                        </div>

                        <div className='flex  w-full h-[33%] items-center justify-center'>
                            <div className='w-1/3 flex items-center justify-center h-full'>دریافت نمایندگی</div>
                            <div className='w-1/3 flex items-center justify-center h-full'>
                                <Image
                                    src={tick}
                                    alt='tick'
                                />
                            </div>
                            <div className='w-1/3 flex items-center justify-center h-full'> 520 هزار تومان</div>
                        </div>

                    </div>
                </div>
                <div className='w-[160px] h-[48px] text-[18px] font-[500px] flex items-center justify-center text-[#FB9149] border-[1.5px] border-[#FB9149] rounded-[100px]'>ثبت نام</div>
            </div>

            <div className='w-full h-[500px] flex flex-col max-lg:hidden'>
                <div className='flex flex-col justify-center items-center gap-10 w-full h-full'>
                    <div className='w-[400px] h-[44px] text-[32px] max-lg:text-[20px] flex items-center justify-center font-[700px] text-[#161C24]'>خطوط اختصاصی و عمومی</div>
                    <div className='w-[1200px] h-[182px] '>
                        <div className='w-full h-full shadow-2xl rounded-md'>

                            <div className='flex  w-full h-[50%] items-center justify-center'>
                                <div className='w-1/3 flex items-center justify-center h-full'>اپراتور</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>1000و3000</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>2000</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>5001</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>021(خط ثابت)</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>5004</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>9000</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>پیام صوتی</div>
                            </div>

                            <div className='w-full h-[1px] bg-[#D1D6D8]'></div>

                            <div className='flex  w-full h-[50%] items-center justify-center text-[15px] text-[#637381] font-[500px]'>
                                <div className='w-1/3 flex items-center justify-center h-full'>تعرفه هر پیامک(تومان)</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>44</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>46.1</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>39</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>46.1</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>44.9</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>44</div>
                                <div className='w-1/3 flex items-center justify-center h-full'>193.1</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full h-[200px] flex justify-center text-[#637381]'>
                    <div className='w-[1200px] h-[44px] text-[18px] font-[500px]'>مالیات ارزش افزوده و 30 ریال تبصره 6 ماده واحده لایحه بوده کل کشور به مبالغ فوق اضافه می گردد.</div>
                </div>
            </div>


            <div className='w-full h-[500px] flex flex-col  lg:hidden max-sm:hidden'>
                <div className='flex flex-col justify-center items-center gap-10 w-full h-full'>
                    <div className='w-[400px] h-[44px] text-[32px] max-lg:text-[20px] flex items-center justify-center font-[700px] text-[#161C24]'>خطوط اختصاصی و عمومی</div>
                    <div className='w-[700px] h-[144px] '>
                        <div className='w-full h-full shadow-2xl rounded-md'>

                            <div className='flex  w-full h-[50%] items-center justify-center'>
                                <div className='w-2/3 flex items-center justify-center h-full text-[16px]'>معیار</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>1000و3000</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>2000</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>3000</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>5000</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>9000</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>9999</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>21000</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>021و026</div>
                            </div>

                            <div className='w-full h-[1px] bg-[#D1D6D8]'></div>

                            <div className='flex  w-full h-[50%] items-center justify-center text-[15px] text-[#637381] font-[500px]'>
                                <div className='w-2/3 flex items-center justify-center h-full text-[14px]'>تعرفه هر پیامک(تومان)</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>44</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>39</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>55</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>66</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>49</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>29</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>36</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>79</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full h-[200px] flex justify-center text-[#637381]'>
                    <div className='w-[600px] h-[44px] text-[14px] font-[500px]'>مالیات ارزش افزوده و 30 ریال تبصره 6 ماده واحده لایحه بوده کل کشور به مبالغ فوق اضافه می گردد.</div>
                </div>
            </div>
            <div className='w-full h-[450px] sm:hidden'>
                <div className='flex flex-col justify-center items-center gap-10 w-full h-full'>
                    <div className='w-[400px] h-[44px] text-[32px] max-lg:text-[20px] flex items-center justify-center font-[700px] text-[#161C24]'>خطوط اختصاصی و عمومی</div>
                    <div className='w-[344px] h-[285px] '>
                        <div className='w-full h-full shadow-2xl rounded-md'>

                            <div className='flex  w-full h-[25%] items-center justify-center'>
                                <div className='w-2/3 flex items-center justify-center h-full text-[16px]'>اپراتور</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>1000,3000</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>2000</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>50001</div>
                            </div>

                            <div className='w-full h-[1px] bg-[#D1D6D8]'></div>

                            <div className='flex  w-full h-[25%] items-center justify-center text-[15px] text-[#637381] font-[500px]'>
                                <div className='w-2/3 flex items-center justify-center h-full text-[14px]'>تعرفه هر پیامک(تومان)</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>44</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>39</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>55</div>
                            </div>

                            <div className='flex  w-full h-[25%] items-center justify-center text-[15px] text-[#637381] font-[500px]'>
                                <div className='w-2/3 flex items-center justify-center h-full text-[14px]'>021(خط ثابت)</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>44</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>39</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>55</div>
                            </div>

                            <div className='w-full h-[1px] bg-[#D1D6D8]'></div>

                            <div className='flex  w-full h-[25%] items-center justify-center text-[15px] text-[#637381] font-[500px]'>
                                <div className='w-2/3 flex items-center justify-center h-full text-[14px]'>44</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>44</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>39</div>
                                <div className='w-1/3 flex items-center justify-center h-full text-[12px]'>55</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full h-[50px] flex justify-center text-[#637381]'>
                    <div className='w-[70%] h-[44px] text-[14px] font-[500px] text-center'>مالیات ارزش افزوده و 30 ریال تبصره 6 ماده واحده لایحه بوده کل کشور به مبالغ فوق اضافه می گردد.</div>
                </div>
            </div>

            <div className='relative max-sm:mt-20'>
                <div className='flex flex-col justify-center items-center gap-5 w-full h-full'>
                    <div className='w-[400px] h-[44px] text-[32px] font-[700px] text-[#161C24] flex items-center justify-center max-sm:text-center max-sm:text-[20px]'>سوالات متداول</div>
                    <div className='w-[410px] h-[44px] text-[18px] font-[500px] text-[#637381] flex items-center justify-center max-sm:text-center max-sm:text-[14px]'>پاسخ سوالات متداول برای اخذ نمایندگی ایران اس ام اس</div>
                    <div className='w-full h-[600px] max-sm:h-[800px] flex max-sm:flex-col py-[1%]'>
                        <div className='w-[60%] relative max-sm:w-full max-sm:h-[480px]'>
                            <div className='bg-[#14A39A] w-[628px] h-[259px] rounded-full absolute z-0 blur-[240px]'></div>
                            <div className='w-full max-sm:h-[400px] absolute z-10'>
                                <div className=' w-full h-full flex flex-col gap-8 justify-center items-center'>
                                    {
                                        showItem == 1
                                            ? (<div className='w-[534px] h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                                                <div className="flex">
                                                    <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemFive}>
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
                                                <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white">

                                                </div>
                                            </div>)
                                            : (<div className='w-[534px] h-[77px] max-lg:w-[328px] max-lg:h-[48px] rounded-[24px] bg-white flex items-center px-5 transition-[height] delay-150 duration-300 ease-in-out'>
                                                <div className='font-[500px] text-[16px] max-lg:text-[12px] grow justify-start'>امکان بازگشت وجه و غیرقابل سازی نمایندگی وجود دارد؟</div>
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
                                            ? (<div className='w-[534px] h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                                                <div className="flex">
                                                    <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemFive}>
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
                                                <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white">

                                                </div>
                                            </div>)
                                            : (<div className='w-[534px] h-[77px] max-lg:w-[328px] max-lg:h-[48px] rounded-[24px] bg-white flex items-center px-5 '>
                                                <div className='font-[500px] text-[16px] max-lg:text-[12px] grow justify-start'>نمایندگی بر روی چه آدرس اینترنتی قرار میگیرد؟</div>
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
                                            ? (<div className='w-[534px] h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                                                <div className="flex">
                                                    <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemFive}>
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
                                                <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white">

                                                </div>
                                            </div>)
                                            : (<div className='w-[534px] h-[77px] max-lg:w-[328px] max-lg:h-[48px] rounded-[24px] bg-white flex items-center px-5 '>
                                                <div className='font-[500px] text-[16px] max-lg:text-[12px] grow justify-start'>تضمینی بر درآمد و سود نمایندگی وجود دارد؟</div>
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
                                            ? (<div className='w-[534px] h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                                                <div className="flex">
                                                    <div className='grow justify-end  flex h-[44px] items-center' onClick={handleClickShowItemFive}>
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
                                                <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                                                </div>
                                                <div className="flex h-[70px] justify-between items-center text-white">

                                                </div>
                                            </div>)
                                            : (<div className='w-[534px] h-[77px] max-lg:w-[328px] max-lg:h-[48px] rounded-[24px] bg-white flex items-center px-5 '>
                                                <div className='font-[500px] text-[16px] max-lg:text-[12px] grow justify-start'>نمایندگی بر روی چه آدرس اینترنتی قرار میگیرد؟</div>
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
                        <div className='w-[40%] max-sm:w-full relative max-sm:h-[430px]'>
                            <Image
                                className='w-[489px] max-lg:w-[325px] max-sm:w-[292px] h-[489px] max-lg:h-[325px] max-sm:h-[292px] left-0  bottom-0 max-lg:bottom-[20%] absolute'
                                src={circel}
                                alt='circel'
                            />
                            <Image
                                className='w-[246px] max-lg:w-[125px] max-sm:w-[128px] h-[489px] max-lg:h-[271px] max-sm:h-[277px] top-0 max-lg:top-[20%] max-sm:top-0 max-sm:right-[25%] absolute'
                                src={phone}
                                alt='phone'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodeyRepresentation