import Image from 'next/image'
import CircelLine from '@/asset/img/circelfull.png'
import phone from '@/asset/img/iPhone-12.png'
import arrowUp from '@/asset/img/arrowup.png'
import arrowDown from '@/asset/img/arrowdown.png'
import { useState } from 'react'
function BodeyFAQ() {
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
      <div className='h-[752px] max-lg:h-[420px] max-sm:h-[800px] w-full flex max-sm:flex-col pr-[180px] max-lg:px-[40px] max-sm:px-[10px]'>
        <div className=' w-[40%] max-lg:w-[55%] max-sm:w-full flex justify-center items-center max-lg:items-start'>
          <div className='h-[350px] w-full'>
            <div className='text-[#161C24] text-[36px] max-lg:text-[24px] font-[700px] max-lg:mb-5  lg:mb-10 max-sm:text-center'>سولات متداول</div>
            <div className='w-[435px] max-lg:w-[98%] h-[132px] text-[#637381] text-[18px] max-lg:text-[14px] font-[500px] leading-[44px] max-sm:text-center'>
              با انتخاب یکی از گزینه های زیر به بخش سوالات همان قسمت خواهید رفت، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به آن میشود .
            </div>
            <div className='max-sm:w-full max-sm:h-100px] max-sm:flex max-sm:justify-center max-sm:items-center'>
              <div className='w-[152px] max-lg:w-[132px] h-[48px] max-lg:text-[14px] rounded-full bg-[#FB9149] text-white flex items-center mt-[8%] justify-center cursor-pointer hover:shadow-2xl'>ثبت نام</div>
            </div>
          </div>
        </div>
        <div className='w-[60%] h-[800px] max-lg:w-[45%] max-sm:w-full relative flex flex-col items-center justify-center'>
          <div className='w-[90%] h-[750px] relative'>
            <Image
              className='absolute w-full lg:h-[85%] max-lg:h-[40%] max-sm:h-[40%] max-sm:top-[5%] max-sm:bottom-[5%]  z-10'
              src={CircelLine}
              alt='CircelLine'
            />
            <Image
              className='absolute lg:w-[324px] max-lg:w-[132px] max-sm:w-[132px] lg:h-[654px] max-lg:h-[324px] max-sm:h-[324px] top-0 max-sm:top-[3%] translate-x-[-50%] left-[50%]  z-30'
              src={phone}
              alt='phone'
            />
          </div>
          <div className='w-[467px] max-sm:w-full h-[259px] bg-[#14A39A] opacity-[0.6] rounded-full left-0 absolute top-[25%] blur-[240px] z-0'></div>
        </div>
      </div>

      <div className='bg-white h-[450px] max-sm:h-[850px] relative'>
        <div className='absolute w-full h-full top-[-25%] max-sm:top-[-10%] bg-white z-20'>
          <div className='h-[200px] max-sm:h-[100px] w-full flex items-center justify-center '>
            <div className='h-[100px] max-sm:h-auto  w-full flex items-center justify-center text-[32px] font-[700px] text-[#161C24]'>نمایندگی</div>
          </div>
          <div className='w-[1000px] max-sm:w-full h-[354px] rounded-full absolute bg-[#14A39A] z-0 blur-[240px] opacity-[0.32]'></div>
          <div className='w-full h-full absolute'>
            <div className='w-full h-full flex max-sm:flex-col justify-center gap-16 max-lg:gap-10 max-sm:px-[10px]'>
              <div className='flex gap-10 flex-col max-sm:justify-center max-sm:items-center'>
                {
                  showItem == 1
                    ? (<div className='w-[530px] max-sm:w-full h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                      <div className="flex">
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
                      <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                      </div>
                      <div className="flex h-[70px] justify-between items-center text-white">

                      </div>
                    </div>)
                    : (<div className='w-[530px] max-sm:w-full h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                      <div className='font-[500px] text-[16px] max-lg:text-[14px] grow justify-start'>تضمینی بر درآمد و سود نمایندگی وجود دارد؟
                      </div>
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
                    ? (<div className='w-[530px] max-sm:w-full h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                      <div className="flex">
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
                      <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                      </div>
                      <div className="flex h-[70px] justify-between items-center text-white">

                      </div>
                    </div>)
                    : (<div className='w-[530px] max-sm:w-full h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                      <div className='font-[500px] text-[16px] max-lg:text-[14px] grow justify-start'>تضمینی بر درآمد و سود نمایندگی وجود دارد؟
                      </div>
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
                    ? (<div className='w-[530px] max-sm:w-full h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                      <div className="flex">
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
                      <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                      </div>
                      <div className="flex h-[70px] justify-between items-center text-white">

                      </div>
                    </div>)
                    : (<div className='w-[530px] max-sm:w-full h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                      <div className='font-[500px] text-[16px] max-lg:text-[14px] grow justify-start'>تضمینی بر درآمد و سود نمایندگی وجود دارد؟
                      </div>
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
              </div>
              <div className='flex gap-10 flex-col max-sm:justify-center max-sm:items-center'>
                {
                  showItem == 4
                    ? (<div className='w-[530px] max-sm:w-full h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                      <div className="flex">
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
                      <div className="flex h-[70px] justify-between items-center text-white font-[500px] text-[16px] max-lg:text-[12px]">

                      </div>
                      <div className="flex h-[70px] justify-between items-center text-white">

                      </div>
                    </div>)
                    : (<div className='w-[530px] max-sm:w-full h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                      <div className='font-[500px] text-[16px] max-lg:text-[14px] grow justify-start'>نمایندگی بر روی چه آدرس اینترنتی قرار می گیرد؟
                      </div>
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
                {
                  showItem == 5
                    ? (<div className='w-[530px] max-sm:w-full h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
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
                    : (<div className='w-[530px] max-sm:w-full h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                      <div className='font-[500px] text-[16px] max-lg:text-[14px] grow justify-start'>نمایندگی بر روی چه آدرس اینترنتی قرار می گیرد؟
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
                {
                  showItem == 6
                    ? (<div className='w-[530px] max-sm:w-full h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
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
                    : (<div className='w-[530px] max-sm:w-full h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                      <div className='font-[500px] text-[16px] max-lg:text-[14px] grow justify-start'>نمایندگی بر روی چه آدرس اینترنتی قرار می گیرد؟
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
    </>
  )
}

export default BodeyFAQ