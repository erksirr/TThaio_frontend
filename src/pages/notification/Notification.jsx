import React, { useState ,useEffect} from "react";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import CommentAlert from "../../components/notification/CommentAlert";
import axios from "axios";

const Notification = () => {
  const [showcircle, setShowCircle] = useState(true);

  const ps = [
    { name: "ohn", game2: "Alice" },
    { name: "Alice", game2: "Bob" },
    { name: "Bob", game2: "John" },
    { name: "Bob", game2: "John" },
    { name: "Bob", game2: "John" },
    { name: "Bob", game2: "John" },

    { name: "Bob", game2: "John" },
    { name: "Bob", game2: "John" },
    { name: "Bob", game2: "John" },

    { name: "Bob", game2: "John" },
  ];
  const [noti,setNoti] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const fetchData = async () => {
      try {
        const response = await axios
          .get("http://localhost:3000/notification/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log("res", response.data);
            setNoti(response.data);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Sidebar
      yourCode={
        <div className="h-screen">
          <div className=" bg-[#FE547B] h-[14.7%] text-5xl text-white flex items-center pl-48">
            การแจ้งเตือน
          </div>

          {showcircle ? (
              <div className="h-[85.3%] w-full overflow-y-scroll">
                {noti.map((e) => (
                  <Link to={`/reply/${e.postId}`}>
                    <CommentAlert name={e.username} message={e.message} postId={e.postId}/>
                  </Link>
                ))}
              </div>
          ) : (
            <div className="absolute flex flex-col font-Anuphan top-1/3 left-1/2 scale-150">
              <div className="bg-[#FFE3E0] rounded-full inline-block h-96 w-96 text-center ">
                <div className="pt-36 text-[#FF8B8B] text-4xl font-bold">
                  LOGO ? STHy
                </div>
                <div className="font-bold pt-16 text-lg ">
                  ไม่มีการแจ้งเตือน
                </div>
                <div className="text-xs font-bold pt-2 text-[#7D7D7D]">
                  ไม่มีการแจ้งเตือน ณ ขณะนี้ !
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};

export default Notification;
