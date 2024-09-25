import React, {  useState,useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import PostBox from "../../components/webboard/PostBox";
import axios from "axios";
// import { toBeDisabled } from "@testing-library/jest-dom/matchers";


const Webboard = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
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
  const handleSendMessage = () => {
    if (!message.trim()) {
      alert("dont!!");
    } else {
      setChatHistory([...chatHistory, message]);
      setMessage("");
    }
  };
  // const handleKeyDown = (event) => {
  //   if ( event.key === "Enter" && message.trim() !== "") {
  //     setChatHistory([...chatHistory, message]);
  //     setMessage("");
  //   }

  // };
  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  

  const mb = [
    {
      name: "John",
      comment:
        "ภาษาไทยถือว่าเป็นวัฒนธรรมประจำชาติแขนงหนึ่งที่มีความสำคัญยิ่งและเป็นเครื่องมือสำคัญของการติดต่อสื่อสารระหว่างกัน ผู้ที่สามารถใช้ภาษาได้ดีจึงสามารถประสบความสำเร็จในการสื่อสารในระดับต่างๆ ได้เป็นอย่างดี และในทางกลับกัน หากมีการนำภาษาไปใช้ไม่เหมาะสม ความผิดเพี้ยนแห่งภาษาย่อมจะส่งผลให้เกิดความเสียหายหลายประการอย่างแน่นอน   ทั้งความเสียหายโดยตรงคือการใช้สื่อสารอาจไม่ประสบความสำเร็จแล้ว  ยังมีความเสียหายของภาษาอันเป็นเอกลักษณ์ของชาติที่เราต่างภาคภูมิใจกันมาช้านาน",
    },
    {
      name: "Alice",
      comment:
        "ภาษาไทยถือว่าเป็นวัฒนธรรมประจำชาติแขนงหนึ่งที่มีความสำคัญยิ่งและเป็นเครื่องมือสำคัญของการติดต่อสื่อสารระหว่างกัน ผู้ที่สามารถใช้ภาษาได้ดีจึงสามารถประสบความสำเร็จในการสื่อสารในระดับต่างๆ ได้เป็นอย่างดี และในทางกลับกัน หากมีการนำภาษาไปใช้ไม่เหมาะสม ความผิดเพี้ยนแห่งภาษาย่อมจะส่งผลให้เกิดความเสียหายหลายประการอย่างแน่นอน   ทั้งความเสียหายโดยตรงคือการใช้สื่อสารอาจไม่ประสบความสำเร็จแล้ว  ยังมีความเสียหายของภาษาอันเป็นเอกลักษณ์ของชาติที่เราต่างภาคภูมิใจกันมาช้านาน",
    },
    {
      name: "Bob",
      comment:
        "ช่วยแต่งเรียงความวันภาษาไทยให้หน่อยค่ะ หัวข้อ (เชิดชู รู้ค่าภาษาไทย)",
    },
    {
      name: "Bob",
      comment:
        "ช่วยแต่งเรียงความวันภาษาไทยให้หน่อยค่ะ หัวข้อ (เชิดชู รู้ค่าภาษาไทย)",
    },
    {
      name: "Alice",
      comment:
        "ภาษาไทยถือว่าเป็นวัฒนธรรมประจำชาติแขนงหนึ่งที่มีความสำคัญยิ่งและเป็นเครื่องมือสำคัญของการติดต่อสื่อสารระหว่างกัน ผู้ที่สามารถใช้ภาษาได้ดีจึงสามารถประสบความสำเร็จในการสื่อสารในระดับต่างๆ ได้เป็นอย่างดี และในทางกลับกัน หากมีการนำภาษาไปใช้ไม่เหมาะสม ความผิดเพี้ยนแห่งภาษาย่อมจะส่งผลให้เกิดความเสียหายหลายประการอย่างแน่นอน   ทั้งความเสียหายโดยตรงคือการใช้สื่อสารอาจไม่ประสบความสำเร็จแล้ว  ยังมีความเสียหายของภาษาอันเป็นเอกลักษณ์ของชาติที่เราต่างภาคภูมิใจกันมาช้านาน",
    },
  ];
  return (
    <Sidebar
      yourCode={
        <div className="h-screen ">
          <div className=" bg-[#FE547B] h-[14.7%] text-5xl text-white flex items-center pl-48 ">
            เว็บบอร์ดที่เที่ยว
          </div>
          <div className="flex h-[85.3%] w-full ">
            <div className="relative overflow-y-scroll h-full w-[69%] border-r-2 snap-start ">
              <div className="flex flex-col-reverse">
                {/* {mb.map((e) => (
                  <PostBox nameWebboard={e.name} commentWebboard={e.comment} />
                ))} */}
                {mb.map((e) => (
                  <PostBox nameWebboard={e.name} commentWebboard={e.comment} />
                ))}
                {chatHistory.map((message, index) => (
                  <PostBox
                    nameWebboard={data.name}
                    commentWebboard={message}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#00C2C1] h-full shadow-md flex-auto">
              <div className="font-bold font-Anuphan flex pt-4 pl-7 text-4xl gap-6">
                <img
                  class="w-28 h-28 rounded-full border-2 border-gray-500 "
                  src="https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg"
                  alt=""
                ></img>
                <div className="text-white font-Anuphan text-4xl pt-8"> {data.name}</div>
              </div>
              <div className="pt-7">
                <textarea
                  className="bg-white flex rounded-3xl h-[35rem] w-11/12 shadow-md  focus:outline-none pt-10 px-9 text-3xl ml-5 "
                  placeholder="เขียนโพสต์ของคุณที่นี่.."
                  value={message}
                  onChange={handleOnChange}
                  // onKeyUp={handleKeyDown}
                  id="Post"
                ></textarea>
              </div>

              <div className="flex justify-end pt-10 pe-3">
                <button
                  id="send-button"
                  className="bg-[#FE547B] text-3xl w-52 h-14 rounded-full text-white  font-Anuphan hover:scale-105 hover:bg-[#e0476d]"
                  onClick={handleSendMessage}
                >
                  Post Now!
                </button>
              </div>
            </div>
          </div>

          {/* <div className="absolute flex flex-col font-Mitr top-1/3 left-1/2 scale-150 ">
              <div className="bg-[#FFE3E0] rounded-full inline-block h-96 w-96 text-center ">
                <div className="pt-36 text-[#FF8B8B] text-4xl font-bold">
                  LOGO ? STHy
                </div>
                <div className="font-bold pt-16 text-lg ">
                  No Review Here
                </div>
                <div className="text-xs font-bold text-[#7D7D7D]">
                  There is no review to show right now.
                </div>
              </div>
            
          </div> */}
        </div>
      }
    />
  );
};

export default Webboard;