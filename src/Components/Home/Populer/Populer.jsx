import React from 'react';
import { FaBasketballBall, FaDumbbell, FaFootballBall } from 'react-icons/fa';
import { GiTennisRacket, GiBoxingGlove, GiCricketBat} from "react-icons/gi";

const Populer = () => {
    const sportsEquipment = [
        { name: "Football", icon: <FaFootballBall /> },
        { name: "Basketball", icon: <FaBasketballBall /> },
        { name: "Tennis Racket", icon: <GiTennisRacket /> },
        { name: "Boxing Gloves", icon: <GiBoxingGlove /> },
        { name: "Cricket Bat", icon: <GiCricketBat /> },
        { name: "Gym Dumbbells", icon: <FaDumbbell /> },
    ];
      
    return (
        <div className="bg-gray-100 max-w-[1250px] mx-auto py-16 px-8 flex flex-col md:flex-row items-center justify-center">
        {/* Equipment List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1">
          {sportsEquipment.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">SUPPORTED EQUIPMENT</p>
            </div>
          ))}
        </div>
        {/* Information Section */}
        <div className="mt-10 md:mt-0 md:ml-12 text-center md:text-left flex-1 max-w-md bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}>
    <h3 className="text-orange-900 text-sm font-bold">INCLUDED EQUIPMENT</h3>
    <h2 className="text-3xl font-bold mt-2">Popular Sports Equipment</h2>
    <p className="text-gray-600 mt-4">
        Explore our collection of premium sports equipment to enhance your game. Get the best experience with less effort.
    </p>
    <button className="mt-6 bg-orange-700 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-400 transition">
        View Now
    </button>
</div>

      </div>
    );
};

export default Populer;