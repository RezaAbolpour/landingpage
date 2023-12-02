import Image from "next/image";
import CircelLine from '@/asset/img/circelabout.png'
export default function Bodeycontact() {
    return (
        <>
            <div className=" text-[36px] font-[700px] text-[#161C24] px-[60px] max-lg:text-[20px] max-lg:font-[500px] max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-10 max-sm:text-[20px]">تماس با ما</div>
            <div className="mt-[5%] px-[60px] flex gap-10 max-sm:flex-col max-sm:justify-center max-sm:px-[20px]">
                <form action="">
                    <div className="w-1/2 flex flex-col gap-10 max-sm:w-full max-sm:justify-center max-sm:items-center">
                        <div className="w-[534px] max-lg:w-[328px] max-sm:w-[310px] h-[56px] rounded-[24px] p-[16px] border border-[#919EAB]">
                            <input type="text" placeholder="نام" className="outline-none border-none w-full" />
                        </div>
                        <div className="w-[534px] max-lg:w-[328px] max-sm:w-[310px] h-[56px] rounded-[24px] p-[16px] border border-[#919EAB]">
                            <input type="text" placeholder="نام خانوادگی" className="outline-none border-none w-full" />
                        </div>
                        <div className="w-[534px] max-lg:w-[328px] max-sm:w-[310px] h-[56px] rounded-[24px] p-[16px] border border-[#919EAB]">
                            <input type="text" placeholder="ایمیل" className="outline-none border-none w-full" />
                        </div>
                        <div className="w-[534px] max-lg:w-[328px] max-sm:w-[310px] h-[56px] rounded-[24px] p-[16px] border border-[#919EAB]">
                            <input type="text" placeholder="شماره تماس" className="outline-none border-none w-full" />
                        </div>
                        <div className="w-[534px] max-lg:w-[328px] max-sm:w-[300px] h-[203px] rounded-[24px] p-[16px] border border-[#919EAB]">
                            <textarea name="" id="" className="w-full h-full border-none outline-none" placeholder="پیام خود را اینجا بنویسید"></textarea>
                        </div>
                    </div>
                    <div className="mt-[30px] max-sm:flex max-sm:justify-center max-sm:items-center">
                        <div className="w-[160px] max-lg:w-[132px] h-[48px] rounded-[100px] bg-[#FB9149] text-white text-[18px] max-lg:text-[14px] font-[500px] flex items-center justify-center hover:shadow-2xl cursor-pointer">ارسال</div>
                    </div>
                </form>
                <div className="w-1/2 flex flex-col gap-12 max-sm:w-full max-sm:justify-center max-sm:items-center">
                    <div className="w-[549px] max-lg:w-[310px] h-[217px] bg-[#14A39A] rounded-[16px] p-[10px] flex flex-col gap-10 justify-center">
                        <div className="text-[24px] font-[500px] text-white">پاسخگویی 24 ساعته</div>
                        <div className="flex text-white text-[18px] font-[500px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M15.4 20.0001C6.89938 19.9891 0.0110183 13.1007 0 4.60011C0 2.0596 2.05949 0.000114295 4.6 0.000114295C4.85834 -0.00185351 5.11625 0.0215927 5.37 0.0701143C5.61531 0.106415 5.85647 0.166704 6.09 0.250114C6.42419 0.367371 6.67143 0.65265 6.74 1.00011L8.11 7.00011C8.18503 7.33103 8.08714 7.67742 7.85 7.92011C7.72 8.06011 7.71 8.07011 6.48 8.71011C7.46499 10.871 9.1932 12.6063 11.35 13.6001C12 12.3601 12.01 12.3501 12.15 12.2201C12.3927 11.983 12.7391 11.8851 13.07 11.9601L19.07 13.3301C19.4061 13.4081 19.6782 13.6538 19.79 13.9801C19.8744 14.2175 19.938 14.4617 19.98 14.7101C20.0202 14.9614 20.0403 15.2156 20.04 15.4701C20.0016 17.9989 17.929 20.0224 15.4 20.0001Z" fill="white" />
                            </svg>
                            <div>021-91015000</div>
                        </div>
                        <div className="flex text-white text-[18px] font-[500px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M15.4 20.0001C6.89938 19.9891 0.0110183 13.1007 0 4.60011C0 2.0596 2.05949 0.000114295 4.6 0.000114295C4.85834 -0.00185351 5.11625 0.0215927 5.37 0.0701143C5.61531 0.106415 5.85647 0.166704 6.09 0.250114C6.42419 0.367371 6.67143 0.65265 6.74 1.00011L8.11 7.00011C8.18503 7.33103 8.08714 7.67742 7.85 7.92011C7.72 8.06011 7.71 8.07011 6.48 8.71011C7.46499 10.871 9.1932 12.6063 11.35 13.6001C12 12.3601 12.01 12.3501 12.15 12.2201C12.3927 11.983 12.7391 11.8851 13.07 11.9601L19.07 13.3301C19.4061 13.4081 19.6782 13.6538 19.79 13.9801C19.8744 14.2175 19.938 14.4617 19.98 14.7101C20.0202 14.9614 20.0403 15.2156 20.04 15.4701C20.0016 17.9989 17.929 20.0224 15.4 20.0001Z" fill="white" />
                            </svg>
                            <div>051-91015000</div>
                        </div>
                    </div>
                    <div className="w-[549px] max-lg:w-[310px] h-[315px] bg-[#14A39A] rounded-[16px] p-[10px] flex flex-col gap-7 justify-center">
                        <div className="text-[24px] font-[500px] text-white">تماس باما</div>
                        <div className="text-[18px] font-[500px] text-white">تهران بلوار میرداماد خیابان مینا</div>
                        <div className="text-[18px] font-[500px] text-white">تلفن: 021-913030000</div>
                        <div className="text-[18px] font-[500px] text-white">مشهد بلوار احمد آباد خیابان شیرین</div>
                        <div className="text-[18px] font-[500px] text-white">تلفن:051-91015000</div>
                    </div>
                </div>
            </div>

            <div className="w-full max-sm:items-center max-sm:justify-center max-sm:flex max-lg:w-[770px] max-sm:w-full h-[524px] max-lg:h-[340px] mt-[50px] relative flex items-center pr-[60px] max-lg:px-[35px] max-sm:px-[0px]">
                <Image
                    className="w-[524px] h-[524px] absolute left-0 max-lg:left-[-15%] z-0 max-sm:hidden"
                    src={CircelLine}
                    alt="CircelLine"
                />
                <div className="w-[1200px] max-lg:w-[770px] max-sm:w-[310px] h-[340px] rounded-[16px] z-10 bgImageContactUsMap"></div>
            </div>
            <div className="px-[60px] max-lg:px-[30px] mt-20 w-full max-sm:flex max-sm:justify-center max-sm:items-center">
                <div className="w-[1200px] max-sm:w-[310px] max-lg:w-[710px] h-[340px] max-sm:h-auto max-lg:h-[280px] rounded-[16px] bg-[#14A39A] flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:py-10 max-sm:px-[35px]">
                    <div className="w-[35%] flex flex-col leading-[39px] gap-5 max-sm:w-full">
                        <div className="h-[55%] flex flex-col items-start justify-end leading-[39px] gap-5 pr-[10%] max-sm:p-0  max-sm:w-full max-sm:py-10">
                            <div className="text-[28px] max-lg:text-[18px] font-[700px] text-white max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:flex">درخواستی نمایندگی پنل من</div>
                            <div className="text-[20px] max-lg:text-[14px] font-[500px] text-white max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:flex">ما با شما تماس میگیریم</div>
                        </div>
                    </div>
                    <div className="w-[65%] flex justify-center items-center max-sm:flex-col">
                        <form action="" className="flex flex-col justify-center items-center gap-5 max-sm:gap-10 max-sm:px-5">
                            <div className="flex gap-10 max-sm:flex-col">
                                <div className="w-[300px] max-lg:w-[205px] max-sm:w-[300px] h-[56px] border rounded-[24px] flex items-center justify-center px-2">
                                    <input type="text" placeholder="نام" className="outline-none border-none w-full pr-4 bg-[#14A39A] text-white placeholder-white" />

                                </div>
                                <div className="w-[300px] max-lg:w-[205px] max-sm:w-[300px] h-[56px] border rounded-[24px] flex items-center justify-center px-2">
                                    <input type="text" placeholder="ایمیل" className="outline-none border-none w-full pr-4 bg-[#14A39A] text-white placeholder-white" />

                                </div>
                            </div>
                            <div className="flex gap-10 max-sm:flex-col">
                                <div className="w-[300px] max-lg:w-[205px] max-sm:w-[300px] h-[56px] border rounded-[24px] flex items-center justify-center px-2">
                                    <input type="text" placeholder="نام خانوادگی" className="outline-none border-none w-full pr-4 bg-[#14A39A] text-white placeholder-white" />

                                </div>
                                <div className="w-[300px] max-lg:w-[205px] max-sm:w-[300px] h-[56px] border rounded-[24px] flex items-center justify-center px-2">
                                    <input type="text" placeholder="شماره تماس" className="outline-none border-none w-full pr-4 bg-[#14A39A] text-white placeholder-white" />

                                </div>
                            </div>
                            <div className="flex gap-10 max-sm:flex-col">
                                <div className="w-[160px] h-[48px] border rounded-[24px] flex items-center justify-center text-white hover:shadow-2xl cursor-pointer">ارسال</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
