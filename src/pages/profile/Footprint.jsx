import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
const Footprint = (props) => {
  const token = localStorage.getItem("access_token");
  
  
  const [isShow,setIsShow] = useState([])
  const [locate,setLocate] = useState({});


   useEffect(async () => {
    const token = localStorage.getItem("access_token");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/profile/footprint/item",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then((response) => {
          console.log("res", response.data);
          setLocate(response.data);
        });
        
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    await fetchData();
  }, []);
  const [choose, setChoose] = useState(false);

  const fetchchoose = async (id) => {
    try {
      const response = await axios
        .post(
          "http://localhost:3000/users/profile/ToggleIsShowOnProfile/"+id,
          {

          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setChoose(response.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLocationClick = (index) => {
    const updatedFootprint = [...isShow];
    
    updatedFootprint[index] = !updatedFootprint[index]
   
    setIsShow(updatedFootprint); 
    fetchchoose(locate[index]?._id);
    
    console.log("hello");

  };

  return (
    <Sidebar
      yourCode={
        <div className="h-full w-full">
          <div className="bg-[#1BC4C3] h-[14.7%] text-5xl text-white flex items-center ps-32">
            <Link to="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="w-10 h-10 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Link>
            
            <div className="pl-6"> Footprint </div>
          </div>
          <div className="h-[85.3%] w-full border-r-2 ">
            <div className="w-full h-full grid grid-cols-3 gap-2 justify-items-center px-[75px] pt-6 snap-start overflow-y-scroll">
              
            {locate?.footprint?.map((loc, index) => (
              <div>
                
                {loc?.googleMap}
              </div>
               ))
            }

              {/* {locate.footprint.map((loc, index) => (
                <div
                  className={`relative w-[425px] h-[390px] rounded-[30px] bg-white overflow-hidden mb-6 select-none ${
                    isShow[index] ? "border-[9px] border-[#F39032]" : ""
                  }`}
                  key={index}
                  onClick={() => handleLocationClick(index)}
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
              ))} */}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Footprint;
