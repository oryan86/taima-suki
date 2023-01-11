import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className=" w-[280px] flex flex-col gap-2 ">
      <div className="w-full h-[400px] overflow-hidden relative">
        <img src={item.img} alt="" className="w-full h-full object-cover absolute z-[1]"/>
        <img src={item.img2} alt='' className="w-full h-full object-cover absolute second" />
      </div>
      <p>{item.title}</p>
      <div>
        <p>${item.oldPrice}</p>
        <p>${item.price}</p>
      </div>

      </div>
    </Link>
  );
};

export default Card;
