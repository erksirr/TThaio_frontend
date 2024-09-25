import React from "react";
import Sidebar from "../../components/Sidebar";
import RecommendBox from "../../components/recommended/RecommendBox";
import cafe from "../../asset/cafe-2.jpeg"
import bar from "../../asset/bar-2.jpg"
import food from "../../asset/food-2.jpeg"
import visit from "../../asset/ที่เที่ยวลาดกระบัง-2.jpeg"
import market from "../../asset/ตลาด-2.jpeg"
import buffet from "../../asset/buffet-2.jpeg"
import japanese from "../../asset/japanese-2.jpeg"

const Recommend = () => {
    return (
        <Sidebar yourCode={
            <div className="h-full w-full bg-[#F1E189] flex items-center justify-center">
                <div className="w-[1425.6px] h-[1026] grid grid-cols-3 gap-x-8 gap-y-4">
                    <RecommendBox image={cafe} />
                    <RecommendBox image={bar} />
                    <RecommendBox image={food} />
                    <RecommendBox image={visit} />
                    <RecommendBox image={market} />
                    <RecommendBox image={buffet} />
                    <RecommendBox image={japanese} />
                </div>
            </div>
        }/>
    )
};

export default Recommend;
