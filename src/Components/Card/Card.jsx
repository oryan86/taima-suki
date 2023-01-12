import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className=" w-[280px] flex flex-col gap-2 ">
      <div className="w-full h-[400px] overflow-hidden relative image">
        {item.isNew && <span className="text-xs text-purple-500 bg-white absolute top-1 z-[3] py-1 px-2 left-1">Sale</span>}
        <img src={item.img} alt="" className="w-full h-full object-cover absolute z-[1]"/>
        <img src={item.img2} alt='' className="secondImage w-full h-full object-cover absolute second" />
      </div>
      <p className="text-sm font-normal ">{item.title}</p>
      <div className="flex gap-5">
        <p className=" text-lg font-medium">${item.oldPrice}</p>
        <p className=" text-lg font-medium">${item.price}</p>
      </div>

      </div>
    </Link>
  );
};

export default Card;
