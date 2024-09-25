import React, { useState } from "react";
// import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";


function ReplyBox({ nameForReply, commentForReply , addReply}) {
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    
    if (message.trim()) {
      const myreply = {
        name: "my name",
        comment: message      
      }
      console.log(myreply);
      addReply(myreply);
      setMessage("");
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
      
    }
  };


  return (
    <div className="">
      <div className="border-b-2 ">
        <div className=" h-full my-2 px-12 py-6 ">
          <div className=" flex gap-8 ">
            
            <img
              class="w-28 h-28 rounded-full border-2 border-gray-500  cursor-pointer"
              src="https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg"
              alt=""
            ></img>
            <div className=" pt-6 font-bold text-4xl cursor-default">{nameForReply}</div>
          </div>
          <div className=" font-Anuphan pl-36 text-2xl h-full  w-full text-left">
            {commentForReply}
          </div>
          <div className="pt-10 pl-32 w-full">
            <div className=" pt-2 pr-4 font-Anuphan flex justify-end text-2xl font-semibold text-[#AFAEAE] ">
              โพสต์ เมื่อพ่อมึงอะ
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#F1E189] h-full w-full p-2 pl-16  font-Anuphan text-black text-2xl">
            การตอบกลับ
          </div>
        </div>
        <div className="m-7">
          <div className="w-full py-3 flex items-center px-6">
            <img
              class="w-28 h-28 rounded-full border-2 border-gray-500  "
              src="https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg"
              alt=""
            ></img>
            <div className="px-8 w-full pb-7">
              <textarea
                class="  outline-none p-2 w-full flex-wrap text-2xl"
                id="Comment"
                type="Comment"
                placeholder="Type your reply.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={handleKeyUp}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReplyBox;