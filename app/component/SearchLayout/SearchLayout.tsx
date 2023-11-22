import React from 'react'

function SearchLayout() {
    return (
        <>
            <div className='mt-[12%] h-[54px] w-full relative'>
                <div className='bg-[#14A39A] absolute right-[25%] w-2/6 blur-[130px] h-[60px]'></div>
                <div className='bg-white absolute w-full rounded-full'>
                    <div className="flex  w-full justify-between items-center">
                        <div className="w-[147px] h-[36px] flex items-center pr-[5%]">
                            <input type="text" placeholder="ایمیل خود را وارد کنید..." className="text-[14px] font-[500px] text-[#CFCED3] outline-none border-none" />
                        </div>
                        <div className="w-[132px] h-[48px] flex items-center justify-center p-[1%] ">
                            <div className="bg-[#FB9149] w-full h-full rounded-full flex justify-center items-center text-white text-[14px] font-[500px]">شروع کنید</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SearchLayout