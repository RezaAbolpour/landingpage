"use client";
import arrowUp from '@/asset/img/arrowup.png'
import arrowDown from '@/asset/img/arrowdown.png'
import { useState } from 'react'
import Image from 'next/image'
function FooterLandingPajeDesktop() {
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
    return (
        <>
            {/* show in 1024 up */}
            <div className='mt-[10%] px-[60px] max-lg:hidden'>
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
                        <div className="bg-[#14A39A] w-[329px] h-[269px] rounded-[329px]  blur-[240px]">
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
                                    <div className="bg-[#FB9149] w-full h-full rounded-full flex justify-center items-center text-white text-[18px] font-[500px] hover:shadow-2xl cursor-pointer">شروع کنید</div>
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

            {/* show in 1024 down */}
            <div className='mt-[10%] px-[30px] h-[178px] lg:hidden max-sm:hidden'>
                <div className='flex h-full'>
                    <div className='w-[50%] relative'>
                        <div className="bg-[#14A39A] w-[329px] h-[269px] rounded-[329px]  blur-[240px] absolute">
                        </div>
                        <div className='w-full h-full absolute flex flex-col gap-10'>
                            <div className="text-[36px] font-[700px] h-[40%]">پنل <span className="text-[#14A39A]">من</span></div>
                            <div className='h-[30%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="196" height="25" viewBox="0 0 196 25" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M182.812 0C179.417 0 178.994 0.0145833 177.658 0.0770833C173.117 0.285417 170.596 2.80417 170.388 7.34583C170.327 8.68125 170.312 9.10625 170.312 12.5C170.312 15.8958 170.327 16.3208 170.388 17.6542C170.596 22.1938 173.117 24.7167 177.658 24.925C178.994 24.9854 179.417 25 182.812 25C186.208 25 186.633 24.9854 187.969 24.925C192.502 24.7167 195.033 22.1979 195.237 17.6542C195.298 16.3208 195.312 15.8958 195.312 12.5C195.312 9.10625 195.298 8.68125 195.237 7.34583C195.033 2.81042 192.51 0.283333 187.969 0.0770833C186.633 0.0145833 186.208 0 182.812 0ZM182.813 2.2541C186.15 2.2541 186.546 2.2666 187.865 2.32702C191.254 2.48119 192.833 4.08744 192.99 7.44994C193.048 8.76869 193.061 9.16244 193.061 12.4999C193.061 15.8374 193.048 16.2333 192.99 17.5499C192.833 20.9104 191.256 22.5208 187.865 22.6749C186.546 22.7333 186.152 22.7479 182.813 22.7479C179.475 22.7479 179.079 22.7354 177.763 22.6749C174.367 22.5187 172.794 20.9062 172.638 17.5499C172.579 16.2333 172.565 15.8374 172.565 12.4999C172.565 9.16244 172.579 8.7666 172.638 7.44994C172.792 4.08535 174.371 2.4791 177.763 2.32494C179.079 2.26452 179.475 2.2541 182.813 2.2541ZM176.394 12.4999C176.394 8.95412 179.269 6.0812 182.813 6.0812C186.356 6.0812 189.231 8.9562 189.231 12.4999C189.231 16.0458 186.356 18.9187 182.813 18.9187C179.269 18.9187 176.394 16.0458 176.394 12.4999ZM182.812 16.6667C180.51 16.6667 178.646 14.8021 178.646 12.5001C178.646 10.2001 180.51 8.3334 182.812 8.3334C185.112 8.3334 186.981 10.198 186.981 12.5001C186.981 14.8021 185.112 16.6667 182.812 16.6667ZM187.983 5.82911C187.983 4.99994 188.656 4.32911 189.483 4.32911C190.315 4.32911 190.985 4.99994 190.985 5.82911C190.985 6.65828 190.312 7.32911 189.483 7.32911C188.654 7.32911 187.983 6.65619 187.983 5.82911Z" fill="#FF690A" />
                                    <path d="M107.812 5.53125C106.894 5.93958 105.904 6.21458 104.867 6.33958C105.927 5.70417 106.737 4.7 107.123 3.50208C106.131 4.08958 105.033 4.51667 103.865 4.74583C102.931 3.74792 101.596 3.125 100.123 3.125C96.8104 3.125 94.3771 6.21458 95.125 9.42292C90.8646 9.20833 87.0833 7.16667 84.5542 4.06458C83.2104 6.36875 83.8583 9.38542 86.1417 10.9125C85.3021 10.8854 84.5125 10.6542 83.8208 10.2708C83.7646 12.6458 85.4688 14.8688 87.9354 15.3646C87.2146 15.5604 86.4229 15.6063 85.6188 15.4521C86.2708 17.4896 88.1687 18.9708 90.4104 19.0125C88.25 20.7042 85.5354 21.4604 82.8125 21.1396C85.0833 22.5958 87.7771 23.4438 90.6729 23.4438C100.198 23.4438 105.577 15.4 105.252 8.18542C106.256 7.46458 107.125 6.56042 107.812 5.53125Z" fill="#FF690A" />
                                    <path d="M4.16667 8.33333H0V12.5H4.16667V25H10.4167V12.5H14.2083L14.5833 8.33333H10.4167V6.59792C10.4167 5.60208 10.6167 5.20833 11.5792 5.20833H14.5833V0H9.575C5.82917 0 4.16667 1.65 4.16667 4.80833V8.33333Z" fill="#FF690A" />
                                </svg>
                            </div>
                            <div className='h-[30%]'>
                                <div className="w-[300px] h-[54px] rounded-[100px] bg-white flex">
                                    <div className='w-[40%] flex items-center justify-center'>
                                        <div className="bg-[#FB9149] w-full h-[90%] rounded-full flex justify-center items-center text-white text-[14px] font-[500px] hover:shadow-2xl cursor-pointer">شروع کنید</div>
                                    </div>
                                    <div className='w-[60%]'>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <input type="text" placeholder="ایمیل خود را وارد کنید..." className="text-[14px] w-[140px] font-[500px] text-[#CFCED3] outline-none border-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] flex gap-20'>
                        <div className="pt-[3%] leading-[50px]">
                            <div className="text-[20px] font-[500px] text-[#1D9F80]">خدمات</div>
                            <div className="text-[16px] font-[500px] text-[#76838B]">سامانه فروش</div>
                            <div className="text-[16px] font-[500px] text-[#76838B]">پنل کاربری</div>
                            <div className="text-[16px] font-[500px] text-[#76838B]">اعطای نمایندگی</div>
                        </div>
                        <div className="pt-[3%] leading-[50px]">
                            <div className="text-[20px] font-[500px] text-[#1D9F80]">شرکت</div>
                            <div className="text-[16px] font-[500px] text-[#76838B]">وبلاگ</div>
                            <div className="text-[16px] font-[500px] text-[#76838B]">فروشگاه</div>
                            <div className="text-[16px] font-[500px] text-[#76838B]">تعرفه ها</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* show in mobile size */}
            <div className='w-full sm:hidden'>
                <div className='w-full h-[80px] flex items-center justify-center'>
                    <div className="text-[36px] font-[700px] h-[40%]">پنل <span className="text-[#14A39A]">من</span></div>
                </div>
                <div className='flex items-center justify-center h-[100px] w-full'>

                    <div className='h-[30%] w-full flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="196" height="25" viewBox="0 0 196 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M182.812 0C179.417 0 178.994 0.0145833 177.658 0.0770833C173.117 0.285417 170.596 2.80417 170.388 7.34583C170.327 8.68125 170.312 9.10625 170.312 12.5C170.312 15.8958 170.327 16.3208 170.388 17.6542C170.596 22.1938 173.117 24.7167 177.658 24.925C178.994 24.9854 179.417 25 182.812 25C186.208 25 186.633 24.9854 187.969 24.925C192.502 24.7167 195.033 22.1979 195.237 17.6542C195.298 16.3208 195.312 15.8958 195.312 12.5C195.312 9.10625 195.298 8.68125 195.237 7.34583C195.033 2.81042 192.51 0.283333 187.969 0.0770833C186.633 0.0145833 186.208 0 182.812 0ZM182.813 2.2541C186.15 2.2541 186.546 2.2666 187.865 2.32702C191.254 2.48119 192.833 4.08744 192.99 7.44994C193.048 8.76869 193.061 9.16244 193.061 12.4999C193.061 15.8374 193.048 16.2333 192.99 17.5499C192.833 20.9104 191.256 22.5208 187.865 22.6749C186.546 22.7333 186.152 22.7479 182.813 22.7479C179.475 22.7479 179.079 22.7354 177.763 22.6749C174.367 22.5187 172.794 20.9062 172.638 17.5499C172.579 16.2333 172.565 15.8374 172.565 12.4999C172.565 9.16244 172.579 8.7666 172.638 7.44994C172.792 4.08535 174.371 2.4791 177.763 2.32494C179.079 2.26452 179.475 2.2541 182.813 2.2541ZM176.394 12.4999C176.394 8.95412 179.269 6.0812 182.813 6.0812C186.356 6.0812 189.231 8.9562 189.231 12.4999C189.231 16.0458 186.356 18.9187 182.813 18.9187C179.269 18.9187 176.394 16.0458 176.394 12.4999ZM182.812 16.6667C180.51 16.6667 178.646 14.8021 178.646 12.5001C178.646 10.2001 180.51 8.3334 182.812 8.3334C185.112 8.3334 186.981 10.198 186.981 12.5001C186.981 14.8021 185.112 16.6667 182.812 16.6667ZM187.983 5.82911C187.983 4.99994 188.656 4.32911 189.483 4.32911C190.315 4.32911 190.985 4.99994 190.985 5.82911C190.985 6.65828 190.312 7.32911 189.483 7.32911C188.654 7.32911 187.983 6.65619 187.983 5.82911Z" fill="#FF690A" />
                            <path d="M107.812 5.53125C106.894 5.93958 105.904 6.21458 104.867 6.33958C105.927 5.70417 106.737 4.7 107.123 3.50208C106.131 4.08958 105.033 4.51667 103.865 4.74583C102.931 3.74792 101.596 3.125 100.123 3.125C96.8104 3.125 94.3771 6.21458 95.125 9.42292C90.8646 9.20833 87.0833 7.16667 84.5542 4.06458C83.2104 6.36875 83.8583 9.38542 86.1417 10.9125C85.3021 10.8854 84.5125 10.6542 83.8208 10.2708C83.7646 12.6458 85.4688 14.8688 87.9354 15.3646C87.2146 15.5604 86.4229 15.6063 85.6188 15.4521C86.2708 17.4896 88.1687 18.9708 90.4104 19.0125C88.25 20.7042 85.5354 21.4604 82.8125 21.1396C85.0833 22.5958 87.7771 23.4438 90.6729 23.4438C100.198 23.4438 105.577 15.4 105.252 8.18542C106.256 7.46458 107.125 6.56042 107.812 5.53125Z" fill="#FF690A" />
                            <path d="M4.16667 8.33333H0V12.5H4.16667V25H10.4167V12.5H14.2083L14.5833 8.33333H10.4167V6.59792C10.4167 5.60208 10.6167 5.20833 11.5792 5.20833H14.5833V0H9.575C5.82917 0 4.16667 1.65 4.16667 4.80833V8.33333Z" fill="#FF690A" />
                        </svg>
                    </div>
                </div>
                <div className="justify-center items-center flex max-sm:p-5">
                    <div className='text-[#919EAB] font-[500px] leading-8 text-[16px] '>
                        <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                            طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                            ازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                            ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                            شناخت فراوان</div>
                    </div>
                </div>
                <div>
                    <div className=' w-full h-full flex flex-col gap-8 justify-center items-center relative'>
                        {
                            showItem == 1
                                ? (<div className='w-[534px] h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5 '>
                                    <div className="flex">
                                        <div className='font-[500px] text-[24px] max-lg:text-[20px] flex justify-start  items-center text-white w-[80%]'>خدمات</div>
                                        <div className='justify-end  flex  items-center w-[20%]' onClick={handleClickShowItemOne}>
                                            <Image
                                                src={arrowUp}
                                                alt="arrowUp"
                                                width={8}
                                                height={5}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start  gap-10 text-white font-[500px] text-[16px] max-lg:text-[12px] mt-5">
                                        <div>سامانه فروش</div>
                                        <div>پنل کاربری</div>
                                        <div>اعطای نمایندگی</div>
                                    </div>

                                </div>)
                                : (<div className='w-[534px] h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                                    <div className='font-[500px] text-[24px] max-lg:text-[20px] grow justify-start text-[#14A39A]'>خدمات</div>
                                    <div className='flex items-center grow justify-end' onClick={handleClickShowItemOne}>
                                        <Image
                                            src={arrowDown}
                                            alt="arrowDown"
                                            width={8}
                                            height={5}
                                        />

                                    </div>
                                </div>)
                        }
                        {
                            showItem == 2
                                ? (<div className='w-[534px] h-[214px] max-lg:w-[328px] max-lg:h-[214px] rounded-[24px] bg-[#14A39A] px-5'>
                                    <div className="flex">
                                        <div className='font-[500px] text-[24px] max-lg:text-[20px]  h-[44px] flex items-center text-white w-[80%] justify-start'>شرکت</div>
                                        <div className='justify-end  flex w-[20%] items-center' onClick={handleClickShowItemTwo}>
                                            <Image
                                                src={arrowUp}
                                                alt="arrowUp"
                                                width={8}
                                                height={5}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start  gap-10 text-white font-[500px] text-[16px] max-lg:text-[12px] mt-5">
                                        <div>سامانه فروش</div>
                                        <div>پنل کاربری</div>
                                        <div>اعطای نمایندگی</div>
                                    </div>

                                </div>)
                                : (<div className='w-[534px] h-[77px] max-lg:w-[328px] max-lg:h-[77px] rounded-[24px] bg-white flex items-center px-5 '>
                                    <div className='font-[500px] text-[24px] max-lg:text-[20px] grow justify-start text-[#14A39A]'>شرکت</div>
                                    <div className='flex items-center grow justify-end' onClick={handleClickShowItemTwo}>
                                        <Image
                                            src={arrowDown}
                                            alt="arrowDown"
                                            width={8}
                                            height={5}
                                        />

                                    </div>
                                </div>)
                        }


                    </div>
                </div>
                <div className="flex  w-full  items-center mt-5 justify-center">
                    <div className='w-[319px]  flex justify-between items-center shadow-2xl bg-white rounded-[100px]'>
                        <div className="w-[147px] h-[36px] flex items-center pr-[2%]">
                            <input type="text" placeholder="ایمیل خود را وارد کنید..." className="text-[14px] font-[500px] text-[#CFCED3] outline-none border-none" />
                        </div>
                        <div className="w-[132px] h-[48px] flex items-center justify-center p-[1%] ">
                            <div className="bg-[#FB9149] w-full h-full rounded-full flex justify-center items-center text-white text-[14px] font-[500px] hover:shadow-2xl cursor-pointer">شروع کنید</div>
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

        </>
    )
}

export default FooterLandingPajeDesktop