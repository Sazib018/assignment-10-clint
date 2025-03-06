import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/sports')
      .then(res => res.json())
      .then(data => setSportsData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
   <div>
    <h1 className="text-center mt-16 font-bold text-3xl">Products Section</h1>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1050px] mx-auto mt-32">
      {sportsData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        sportsData.map((product) => (
          <div
            key={product.id}
            className="relative max-w-sm rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105 z-10"
          >
          
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-500 mt-2">{product.description}</p>
              <p className="text-lg font-semibold text-black mt-3">${product.price}</p>
              <button className="mt-4 w-full py-2 bg-orange-700 text-white hover:text-black font-bold rounded-lg hover:bg-orange-200 transition duration-200">
                View Details
              </button>
            </div>
          </div>
        ))
      )}
    </div>
   </div>
  );
};

export default ProductCard;
