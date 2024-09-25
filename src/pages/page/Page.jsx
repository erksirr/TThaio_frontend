import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./Page.css";
import { BsSearch } from "react-icons/bs";
import { BiSliderAlt } from "react-icons/bi";
import shan from "../../asset/shan.jpg";
import Card from "../../components/page/Card.jsx";

const Page = () => {
  const [buttonStates, setButtonStates] = useState(new Array(8).fill(false));

  const handleButtonClick = (index) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);
  };

  const buttons = [
    "ศิลปะ",
    "วัฒนธรรม",
    "ศาสนา",
    "ธรรมชาติ",
    "อาหาร",
    "สุขภาพ",
    "บริการ",
    "บันเทิง",
  ];

  return (
    <Sidebar
      yourCode={
        <div className=" relative w-full h-full">
          <nav className="flex p-12 bg-[#FE547B] items-center w-full h-[95px]">
            <div className="absolute w-[55px] h-[40px] flex justify-center items-center text-white text-2xl bg-[#00c2c1] z-10 rounded-full">
              <BsSearch />
            </div>
            <div className="absolute w-[55px] h-[40px] left-[523px] flex justify-center items-center text-white text-2xl bg-[#00c2c1] z-10 rounded-full">
              <BiSliderAlt />
            </div>
            <input
              type="text"
              placeholder="ค้นหาสถานที่ท่องเที่ยว"
              className="absolute h-[40px] w-[530px] rounded-full px-16 bg-[#f1e189]"
            />

            <div class="custom-checkbox">
              <input id="status" type="checkbox" name="status"></input>
              <label htmlFor="status">
                <div
                  className="status-switch"
                  data-unchecked="❤️ full / xx:xx"
                  data-checked="20   hearts"
                ></div>
              </label>
            </div>

            <span className="absolute right-[172px] text-white font-bold text-2xl">
              USERNAME
            </span>
            <div className="absolute w-full left-[1464px]">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={shan} className="" alt="" />
              </div>
            </div>
          </nav>

          <div className="p-[11.5px] bg-[#f1e189] w-full  text-xl flex justify-center">
            <div className="w-[1482px] flex justify-around">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center hover:bg-[#f39032] w-[173px] py-1.5 rounded-full cursor-pointer font-bold ${buttonStates[index] ? "bg-[#f39032]" : "bg-[#f6f3e3]"} `}
                  onClick={() => handleButtonClick(index)}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
          <div className="flex h-[85.3%] w-full bg-gradient-to-t from-[#EFCFD4] to-white-500 overflow-hidden">
            <div className="w-full h-full p-10">
              <div>
                <Card /> 
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Page;