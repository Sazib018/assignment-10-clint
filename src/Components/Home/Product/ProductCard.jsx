import React, { useEffect, useState, useContext } from "react";
import {useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const ProductCard = () => {
  const [sportsData, setSportsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/sports")
      .then((res) => res.json())
      .then((data) => {
        setSportsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);


  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/product_details/${id}`); 
    }
  };

  return (
    <div>
      <h1 className="text-center mt-16 font-bold text-3xl">Products Section</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1050px] mx-auto mt-32">
        {sportsData.map((sports) => (
          <div
            key={sports._id}
            className="relative max-w-sm rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300"
          >
            <img
              src={sports.image}
              alt={sports.name}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{sports.name}</h3>
              <p className="text-gray-500 mt-2">{sports.description}</p>
              <p className="text-lg font-semibold text-black mt-3">${sports.price}</p>

              <button
                onClick={() => handleViewDetails(sports._id)}
                className="mt-4 w-full py-2 bg-orange-700 text-white hover:text-black font-bold rounded-lg hover:bg-orange-200 transition duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
