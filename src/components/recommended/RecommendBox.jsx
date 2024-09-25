import React from 'react';

function RecommendBox({image}) {
  return (
    <div className="border-solid border-8 border-white rounded-[30px] overflow-hidden">
        <img src={image} alt="" className="w-full h-auto object-cover cursor-pointer" />
    </div>
  );
}

export default RecommendBox;