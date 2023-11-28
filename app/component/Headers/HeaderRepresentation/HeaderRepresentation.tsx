function HeaderRepresentation() {
    return (
        <>
            <div className='w-full h-[100px] flex items-center justify-center'>
                <div className='h-[80px] w-full flex items-centerm pr-[160px]'>
                    <div className='w-[40%] flex items-center text-[36px] font-[700px]'>
                        پنل <span className='text-[#14A39A]'>من</span>
                    </div>
                    <div className='w-[60%] flex items-center justify-center text-[16px] font-[500px] text-[#637181]'>
                        <div className='w-[20%]'>تعرفه ها</div>
                        <div className='w-[20%]'>خدمات</div>
                        <div className='w-[20%]'>پشتیبانی</div>
                        <div className='w-[20%]'>فروشگاه</div>
                        <div className='w-[20%]'>وبلاگ</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderRepresentation