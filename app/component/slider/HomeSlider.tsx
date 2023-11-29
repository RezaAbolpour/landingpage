"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AwesomeSlider,{AwesomeSliderInfo} from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import t1 from '@/asset/img/iPhone-12.png'
import t2 from '@/asset/img/iPhone-12.png'
import t3 from '@/asset/img/iPhone-12.png'
import t4 from '@/asset/img/iPhone-12.png'
import t5 from '@/asset/img/iPhone-12.png'

const HomeSliderLG = () => {
  const [sizeP1, setSizeP1] = useState("h-[400px]");
  const [z1, setZ1] = useState("z-50");
  const [locationP1, setLocationP1] = useState("");
  /******************************************* */
  const [sizeP2, setSizeP2] = useState("h-[300px]");
  const [z2, setZ2] = useState("z-40");
  const [locationP2, setLocationP2] = useState("translate-x-[-300px]");
  /******************************************* */
  const [sizeP3, setSizeP3] = useState("h-[300px]");
  const [z3, setZ3] = useState("z-40");
  const [locationP3, setLocationP3] = useState("translate-x-60");
  /******************************************* */
  const [sizeP4, setSizeP4] = useState("h-[300px]");
  const [z4, setZ4] = useState("z-40");
  const [locationP4, setLocationP4] = useState("translate-x-60");
  useEffect(() => {
    let index = 0;
    setInterval(() => {
      if (index < 4) {
        switch (index) {
          case 1:
            setLocationP1("translate-x-60");
            setSizeP1("h-[300px]");
            setZ1("z-40");
            //******************* */
            setLocationP2("");
            setSizeP2("h-[400px]");
            setZ2("z-50");
            //******************* */
            setLocationP3("");
            setSizeP3("h-[300px]");
            setZ3("z-30");
            //******************* */
            setLocationP4("translate-x-[-300px]");
            setSizeP4("h-[300px]");
            setZ4("z-40");
            break;
          case 2:
            setLocationP1("");
            setSizeP1("h-[300px]");
            setZ1("z-30");
            //******************* */
            setLocationP2("translate-x-60");
            setSizeP2("h-[300px]");
            setZ2("z-40");
            //******************* */
            setLocationP3("translate-x-[-300px]");
            setSizeP3("h-[300px]");
            setZ3("z-40");
            //******************* */
            setLocationP4("");
            setSizeP4("h-[400px]");
            setZ4("z-50");
            break;
          case 3:
            setLocationP1("translate-x-[-300px]");
            setSizeP1("h-[300px]");
            setZ1("z-40");
            //******************* */
            setLocationP2("");
            setSizeP2("h-[300px]");
            setZ2("z-30");
            //******************* */
            setLocationP3("");
            setSizeP3("h-[400px]");
            setZ3("z-50");
            //******************* */
            setLocationP4("translate-x-60");
            setSizeP4("h-[300px]");
            setZ4("z-40");
            break;
          default:
            break;
        }
      } else {
        index = 0;
        setLocationP1("");
        setSizeP1("h-[400px]");
        setZ1("z-50");
        //******************* */
        setLocationP2("translate-x-[-300px]");
        setSizeP2("h-[300px]");
        setZ2("z-40");
        //******************* */
        setLocationP3("translate-x-60");
        setSizeP3("h-[300px]");
        setZ3("z-40");
        //******************* */
        setLocationP4("");
        setSizeP4("h-[300px]");
        setZ4("z-30");
      }
      index++;
    }, 4000);
  }, []);
  return (
    <div
      className={`w-full flex justify-center items-center mt-5 relative h-[400px]`}
    >
      <Image
        src={t1}
        alt="Image"
        className={`duration-500 rounded-md w-[250px] absolute ${sizeP1} ${z1} ${locationP1}  shadow transition-all ease-in-out delay-500 transform duration-500`}
      />
      <Image
        src={t2}
        alt="Image"
        className={`duration-500 rounded-md w-[250px] absolute ${sizeP2} ${z2} ${locationP2}  transition-all ease-in-out delay-500 transform duration-500`}
      />
      <Image
        src={t4}
        alt="Image"
        className={`duration-500 rounded-md w-[250px] absolute ${sizeP3} ${z3} ${locationP3}  transition-all ease-in-out delay-500 transform duration-500`}
      />
      <Image
        src={t3}
        alt="Image"
        className={`duration-500 rounded-md w-[250px] absolute ${sizeP4} ${z4} ${locationP4}  transition-all ease-in-out delay-500 transform duration-500`}
      />
    </div>
  );
};

const HomeSliderMaxLG = () => {
  const dataSlideSho = [1, 2, 3]; // تعداد تصاویر بر اساس طول اسلاید
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // تغییر شماره اسلاید به اسلاید بعدی
      setActiveIndex((prevIndex) =>
        prevIndex === dataSlideSho.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // تغییر اسلاید هر 3 ثانیه

    return () => {
      clearInterval(interval); // پاکسازی تایمر در زمان حذف کامپوننت
    };
  }, []);
  return (
    <div className="w-[90%] h-[100px] mx-auto flex mt-5">
      <div className="flex w-full">
        <AwesomeSlider cssModule={AwesomeSliderInfo} selected={activeIndex} className="w-full rounded-lg">
          <div className="item w-full">
            <div className="right rounded-lg">
              <img
                className="w-[100px] h-[100px] rounded-lg"
                src={`https://imgs.search.brave.com/KXhjRWjmK0-cvprYfC_-RHuz0mig3ByxyeTUXL1d5Ss/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bWlsa3NoYWtlLW9u/LXBpbmsuanBnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmZXhp/Zj0wJmlwdGM9MA`} // لینک تصاویر می‌تواند به تصاویر واقعی تغییر یابد
                alt={`image`}
              />
            </div>
          </div>
          <div className="item w-full rounded-lg">
            <div className="right w-full h-full">
              <img
                className="w-[100px] h-[100px] rounded-lg"
                src={`https://imgs.search.brave.com/KXhjRWjmK0-cvprYfC_-RHuz0mig3ByxyeTUXL1d5Ss/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bWlsa3NoYWtlLW9u/LXBpbmsuanBnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmZXhp/Zj0wJmlwdGM9MA`} // لینک تصاویر می‌تواند به تصاویر واقعی تغییر یابد
                alt={`image`}
              />
            </div>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

function HomeSlider(props: {
  urls?: string[];
  width?: number;
  height?: number;
}) {

  return (
    <>{window.innerWidth>=1024?<><HomeSliderLG/></>:<><HomeSliderMaxLG/></>}</>
  )
}

export default HomeSlider;


