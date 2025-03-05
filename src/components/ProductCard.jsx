import React from "react";

const ProductCard = ({
  product: {
    image,
    title,
    price,
    rating: { rate },
  },
}) => {
  return (
    <div className="border border-black p-5 flex flex-col items-start gap-5">
      <img src={image} className="h-40" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>
      <div className="flex justify-between items-end w-full mt-auto">
        <p>${price}</p>
        <button className="border border-black text-xs px-2 py-1">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
