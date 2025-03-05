import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="relative max-w-sm rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105 z-10">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-500 mt-2">{product.description}</p>
        <p className="text-lg font-semibold text-black mt-3">{product.price}</p>
        <button className="mt-4 w-full py-2 bg-orange-700 text-white hover:text-black font-bold rounded-lg hover:bg-orange-200 transition duration-200">
        View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
