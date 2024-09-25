import React, { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";
const Profile = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/profile/info",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("res", response.data);
        setData(response.data);
        console.log(data.username);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  const pa = useLocation();
  const value = new URLSearchParams(pa.search).get("edit");
  const [isEditVisible, setIsEditVisible] = useState(value === "profile");
  const handleEditClick = (state) => {
    if (state) {
      setIsEditVisible(!isEditVisible);
    }
  };

  // const [location, setLocation] = useState([]);
  const Pr = {
    name: "อลิชซาเบธ",
    username: "alice",
    list: "1",
    friend: "50",
    reviewsWriten: "6",
    describe: "อธิบายตัวคุณ เล่าสไตล์การท่องเที่ยวของคุณให้เค้าฟัง !",
  };
  const [footprint] = useState([
        
    
  ]);

  return (
    <Sidebar
      yourCode={
        <div className="w-full bg-yellow-100 h-full font-Anuphan">
          <div className="bg-white h-[35%] drop-shadow-xl relative">
            <div className="absolute top-16 left-40 w-64 h-64 overflow-hidden rounded-full border-8 border-gray-500 flex justify-center">
              <img
                className="max-w-xs w-auto h-full "
                src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
                alt=""
              ></img>
            </div>
            <div className="absolute top-16 left-1/3 font-bold text-4xl ">
              {data.name}
            </div>
            <div className="absolute top-32 left-1/3 text-3xl text-[#4B4B4B] font-bold">
              {data.username}
            </div>
            <div className="absolute top-16 left-[60rem] flex gap-8 pr-10 ">
              <div onClick={handleEditClick}>
                <button className="bg-[#00C2C1] hover:bg-[#3ea7a7] w-48 h-12 text-white font-bold py-2 px-4 rounded-full text-2xl">
                  <div>
                    แก้ไขโปรไฟล์ 
                  </div>
                </button>
              </div>
              <Link to={`/footprint?userId=${"id"}`}>
                <button className="bg-[#00C2C1] hover:bg-gray-800 w-48 h-12 text-white font-bold py-2 px-4 rounded-full text-2xl">
                  Footprint
                </button>
              </Link>
            </div>
            <div className="absolute top-52 left-1/3 text-xl font-Anuphan ">
              <div className="flex gap-16">
                <div>{Pr.list} list</div>
                <div>|</div>
                <div>{Pr.reviewsWriten} reviews written</div>
              </div>
            </div>
            <div className="absolute top-72 left-1/3 text-xl font-Anuphan ">
              {Pr.describe}
            </div>
          </div>
          <div className="h-[65%] w-full border-r-2 ">
            <div className="w-full h-full grid grid-cols-3 gap-2 flex justify-items-center px-[75px] pt-14 snap-start overflow-y-scroll">
              {footprint.map((loc, index) => (
                <div
                  className={`relative w-[425px] h-[390px] rounded-[30px] bg-white overflow-hidden mb-6 select-none border-[9px] border-[#F39032]`}
                  key={index}
                >
                  <img
                    src={loc.img}
                    alt=""
                    className="h-full w-full pointer-events-none"
                  />
                  <div className="absolute left-[19px] bottom-[30px] text-[30px] text-white font-bold">
                    {loc.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      isPopUpEdit={isEditVisible}
      toggleEdit={handleEditClick}
    />
  );
};

export default Profile;
