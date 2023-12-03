// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import React, { MouseEvent, useState } from 'react';

function Carsor() {
  const [order1, setorder1] = React.useState("order-1  w-[127px] h-[169px]")
  const [order2, setorder2] = React.useState("order-2  w-[215px] h-[286px]")
  const [order3, setorder3] = React.useState("order-3  w-[270px] h-[359px]")
  const [order4, setorder4] = React.useState("order-4  w-[215px] h-[286px]")
  const [order5, setorder5] = React.useState("order-5  w-[127px] h-[169px]")
  const [cardoriginal, setcardoriginal] = useState("3")
  const typeCard: Array<String> = ["w-[127px] h-[169px]", "w-[215px] h-[286px]"]
  const orders: Array<String> = ["order-1", "order-2", "order-3", "order-4", "order-5"]
  function handlclckcard(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    console.log(order3);
    if (event.currentTarget.id == "1") {

      if (cardoriginal == "2") {
        setorder1(perv => {
          setorder2(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      else if (cardoriginal == "3") {
        setorder1(perv => {
          setorder3(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "4") {
        setorder1(perv => {
          setorder4(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "5") {
        setorder1(perv => {
          setorder5(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      setcardoriginal(event.currentTarget.id)

    }
    else if (event.currentTarget.id == "2") {
      if (cardoriginal == "1") {
        setorder2(perv => {
          setorder1(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      else if (cardoriginal == "3") {
        setorder2(perv => {
          setorder3(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "4") {
        setorder2(perv => {
          setorder4(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "5") {
        setorder2(perv => {
          setorder5(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      setcardoriginal(event.currentTarget.id)

    }
    else if (event.currentTarget.id == "3") {
      if (cardoriginal == "1") {
        setorder3(perv => {
          setorder1(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      else if (cardoriginal == "2") {
        setorder3(perv => {
          setorder2(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "4") {
        setorder3(perv => {
          setorder4(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "5") {
        setorder3(perv => {
          setorder5(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      setcardoriginal(event.currentTarget.id)

    }
    else if (event.currentTarget.id == "4") {
      if (cardoriginal == "1") {
        setorder4(perv => {
          setorder1(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      else if (cardoriginal == "2") {
        setorder4(perv => {
          setorder2(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "3") {
        setorder4(perv => {
          setorder3(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "5") {
        setorder4(perv => {
          setorder5(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      setcardoriginal(event.currentTarget.id)


    }
    else if (event.currentTarget.id == "5") {
      if (cardoriginal == "1") {
        setorder5(perv => {
          setorder1(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      else if (cardoriginal == "2") {
        setorder5(perv => {
          setorder2(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "4") {
        setorder5(perv => {
          setorder4(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      } else if (cardoriginal == "3") {
        setorder5(perv => {
          setorder3(perv)
          return "order-3  w-[270px] h-[359px]"
        })
      }

      setcardoriginal(event.currentTarget.id)



    }

  }
  return (
    <div className='w-full h-[600px] flex items-center justify-center bg-red-500 '>
      <div className='w-[1300px] h-[500px] bg-blue-300 flex items-center justify-center'>
        <div className='h-[400px] w-full bg-yellow-500 flex gap-5 justify-center items-center' onClick={handlclckcard}>
          <div className={`bg-[#FFF] transition-all delay-75 duration-1000 ease-out ${order1}`} id="1">1</div>
          <div className={`bg-[#dda4a4] transition-all delay-75 duration-1000 ease-out ${order2}`} id='2'>2</div>
          <div className={`bg-[#8a4b4b] transition-all delay-75 duration-1000 ease-out ${order3}`} id='3'>3</div>
          <div className={`bg-[#240b0b] transition-all delay-75 duration-1000 ease-out ${order4}`} id='4'>4</div>
          <div className={`bg-[#818181] transition-all delay-75 duration-1000 ease-out ${order5}`} id='5'>5</div>
        </div>
      </div>
    </div>
  )
}

export default Carsor