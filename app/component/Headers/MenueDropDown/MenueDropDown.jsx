import {
  Button,
  Dropdown,
  DropdownSection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import phonenumber from "@/asset/img/phonenumber.png";
import webservice from "@/asset/img/webservice.png";

export const MenueDropDown = () => {
  return (
    <Dropdown className="shadow-xl" placement="bottom" dir="rtl">
      <DropdownTrigger>
        <Button color="success " variant="flat" className="hover:text-[20px]">
          موارد دیگر
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect
        aria-label="Actions"
        color="default"
        variant="flat"
      >
        <DropdownSection className="bg-[#f1efef] rounded-lg iran-sans ">
          <DropdownItem>
            <div className="w-[300px] h-[90px] flex">
              {/* <div className="w-[20%] flex items-center justify-center">
                <Image
                  className="w-[50%] h-[50%]"
                  src={webservice}
                  alt="webservice"
                />
              </div> */}
              <div className="w-[100%]">
                <div className="h-[50%] text-[12px] flex items-center text-[#637381]">
                  سایت خودتان را به وب سرویس ما متصل کنید
                </div>
                <div className="h-[1px] w-[40%] bg-gray-600"></div>
                <Link href="/webservice">
                  <div className="h-[50%] text-[20px] hover:text-[22px] font-[700px] text-[#637381]">
                    وب سرویس
                  </div>
                </Link>
              </div>
            </div>
          </DropdownItem>
          <DropdownItem className="w-[300px] h-[2px]">
            <div className="h-[2px] w-[100%] bg-black"></div>
          </DropdownItem>
          <DropdownItem>
            <div className="w-[300px] h-[90px] flex">
              {/* <div className="w-[20%] flex items-center justify-center">
                <Image
                  className="w-[50%] h-[50%]"
                  src={phonenumber}
                  alt="phonenumber"
                />
              </div> */}
              <div className="w-[100%]">
                <div className="h-[50%] text-[12px] flex items-center text-[#637381]">
                  سایت خودتان را به وب سرویس ما متصل کنید
                </div>
                <div className="h-[1px] w-[40%] bg-gray-600"></div>
                <Link href="/number">
                  <div className="h-[50%] text-[20px] hover:text-[22px] font-[400px] text-[#637381]">
                    خطوط پیامکی
                  </div>
                </Link>
              </div>
            </div>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
