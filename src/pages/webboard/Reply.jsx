import React, {  useState } from "react";
import Sidebar from "../../components/Sidebar";
import ReplyBox from "../../components/webboard/ReplyBox";
import { Link, useLocation } from "react-router-dom";
import Box from "../../components/webboard/Box";

const Reply = () => {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');
  const content = new URLSearchParams(location.search).get('content');
  const [reply,setReply] = useState([
      {
      name: "Alice",
      comment:
        "ภาษาไทยถือว่าเป็นวัฒนธรรมประจำชาติแขนงหนึ่งที่มีความสำคัญยิ่งและเป็นเครื่องมือสำคัญของการติดต่อสื่อสารระหว่างกัน ผู้ที่สามารถใช้ภาษาได้ดีจึงสามารถประสบความสำเร็จในการสื่อสารในระดับต่างๆ ได้เป็นอย่างดี และในทางกลับกัน หากมีการนำภาษาไปใช้ไม่เหมาะสม ความผิดเพี้ยนแห่งภาษาย่อมจะส่งผลให้เกิดความเสียหายหลายประการอย่างแน่นอน   ทั้งความเสียหายโดยตรงคือการใช้สื่อสารอาจไม่ประสบความสำเร็จแล้ว  ยังมีความเสียหายของภาษาอันเป็นเอกลักษณ์ของชาติที่เราต่างภาคภูมิใจกันมาช้านาน",
      },
      {
      name: "Pooh",
      comment:
        "ภาษาไทยถือว่าเป็นวัฒนธรรมประจำชาติแขนงหนึ่งที่มีความสำคัญยิ่งและเป็นเครื่องมือสำคัญของการติดต่อสื่อสารระหว่างกัน ผู้ที่สามารถใช้ภาษาได้ดีจึงสามารถประสบความสำเร็จในการสื่อสารในระดับต่างๆ ได้เป็นอย่างดี และในทางกลับกัน หากมีการนำภาษาไปใช้ไม่เหมาะสม ความผิดเพี้ยนแห่งภาษาย่อมจะส่งผลให้เกิดความเสียหายหลายประการอย่างแน่นอน   ทั้งความเสียหายโดยตรงคือการใช้สื่อสารอาจไม่ประสบความสำเร็จแล้ว  ยังมีความเสียหายของภาษาอันเป็นเอกลักษณ์ของชาติที่เราต่างภาคภูมิใจกันมาช้านาน",
      },
      {
      name: "Shan",
      comment:
        "ภาษาไทยถือว่าเป็นวัฒนธรรมประจำชาติแขนงหนึ่งที่มีความสำคัญยิ่งและเป็นเครื่องมือสำคัญของการติดต่อสื่อสารระหว่างกัน ผู้ที่สามารถใช้ภาษาได้ดีจึงสามารถประสบความสำเร็จในการสื่อสารในระดับต่างๆ ได้เป็นอย่างดี และในทางกลับกัน หากมีการนำภาษาไปใช้ไม่เหมาะสม ความผิดเพี้ยนแห่งภาษาย่อมจะส่งผลให้เกิดความเสียหายหลายประการอย่างแน่นอน   ทั้งความเสียหายโดยตรงคือการใช้สื่อสารอาจไม่ประสบความสำเร็จแล้ว  ยังมีความเสียหายของภาษาอันเป็นเอกลักษณ์ของชาติที่เราต่างภาคภูมิใจกันมาช้านาน",
      },
      {
      name: "Ord",
      comment:
        "ภาษาไทยถือว่าเป็นวัฒนธรรมประจำชาติแขนงหนึ่งที่มีความสำคัญยิ่งและเป็นเครื่องมือสำคัญของการติดต่อสื่อสารระหว่างกัน ผู้ที่สามารถใช้ภาษาได้ดีจึงสามารถประสบความสำเร็จในการสื่อสารในระดับต่างๆ ได้เป็นอย่างดี และในทางกลับกัน หากมีการนำภาษาไปใช้ไม่เหมาะสม ความผิดเพี้ยนแห่งภาษาย่อมจะส่งผลให้เกิดความเสียหายหลายประการอย่างแน่นอน   ทั้งความเสียหายโดยตรงคือการใช้สื่อสารอาจไม่ประสบความสำเร็จแล้ว  ยังมีความเสียหายของภาษาอันเป็นเอกลักษณ์ของชาติที่เราต่างภาคภูมิใจกันมาช้านาน",
      },
  ]);

  const addingReply = (element) => {
    setReply([element, ...reply]);
  };

  return (
    <Sidebar
      yourCode={
        <div className="h-screen">
          <div className="bg-[#FE547B] h-[14.7%] text-5xl text-white flex items-center ps-32">
            <Link to="/webboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-10 h-10 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Link>

            <div className="pl-6"> เว็บบอร์ดที่เที่ยว</div>
          </div>
          <div className="h-[85.3%] w-full border-r-2 snap-start overflow-y-scroll">
            <ReplyBox nameForReply={name} commentForReply={content} addReply={addingReply}/>
            <div className="w-full">
              {reply.map((e) => (
                <Box nameReply={e.name} commentReply={e.comment}  nameForReply={name} />
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Reply;