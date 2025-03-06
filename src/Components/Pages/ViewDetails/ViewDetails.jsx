import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const equipmentData = [
    {
      id: 1,
      name: "Football",
      category: "Outdoor",
      price: "$30",
      image: "https://i.ibb.co/XryMzKmP/Puma-Christian-Pulisic-Youth-Collection-jpg.webp",
      brand: "Puma",
      stock: "Available",
      description: "A high-quality football designed for professional and casual matches."
    },
    {
      id: 2,
      name: "Basketball",
      category: "Indoor",
      price: "$25",
      image: "https://i.ibb.co/vxPjJ74N/istockphoto-183256716-612x612.jpg",
      brand: "Spalding",
      stock: "Limited",
      description: "Durable basketball suitable for both indoor and outdoor courts."
    },
    {
      id: 3,
      name: "Tennis Racket",
      category: "Racket Sports",
      price: "$50",
      image: "https://i.ibb.co/0y7vYr78/images-2.jpg",
      brand: "Wilson",
      stock: "In Stock",
      description: "Lightweight and durable tennis racket designed for professionals."
    },
    {
      id: 4,
      name: "Cricket Bat",
      category: "Outdoor",
      price: "$40",
      image: "https://i.ibb.co/wNY9cwZW/dsc-flip-player-edition-2.jpg",
      brand: "DSC",
      stock: "Out of Stock",
      description: "Top-grade cricket bat for powerful strokes and long-lasting durability."
    },
    {
      id: 5,
      name: "Hockey Stick",
      category: "Outdoor",
      price: "$35",
      image: "https://i.ibb.co/pBkWz73P/istockphoto-1464504444-612x612.jpg",
      brand: "Adidas",
      stock: "Available",
      description: "High-performance hockey stick for enhanced gameplay and precision shots."
    },
    {
      id: 6,
      name: "Badminton Racket",
      category: "Racket Sports",
      price: "$45",
      image: "https://i.ibb.co/cX7PfVVR/2-480x480.webp",
      brand: "Yonex",
      stock: "Limited",
      description: "Lightweight and flexible badminton racket for speed and control."
    },
    {
      id: 7,
      name: "Table Tennis Paddle",
      category: "Indoor",
      price: "$20",
      image: "https://i.ibb.co/RGzNWzpM/ping-pong-paddle-1.webp",
      brand: "Stiga",
      stock: "Available",
      description: "Professional table tennis paddle with a firm grip and strong spin control."
    },
    {
      id: 8,
      name: "Boxing Gloves",
      category: "Combat Sports",
      price: "$60",
      image: "https://i.ibb.co/C5Qg2YQB/photo-1549719386-74dfcbf7dbed.jpg",
      brand: "Everlast",
      stock: "In Stock",
      description: "Premium boxing gloves with enhanced padding and wrist support."
    }
  ];

  useEffect(() => {
    const foundItem = equipmentData.find((equipment) => equipment.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  if (!item) {
    return <p className="text-center text-red-500 text-xl">Item not found</p>;
  }

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3 lg:w-1/2">
        <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-3xl font-bold text-center">{item.name}</h2>
        <p className="text-gray-600 text-center">{item.category}</p>
        <p className="text-lg font-semibold text-center mt-2">{item.price}</p>
        <p className="text-gray-700 mt-4"><span className="font-semibold">Brand:</span> {item.brand}</p>
        <p className={`mt-2 font-semibold ${item.stock === "Out of Stock" ? "text-red-500" : "text-green-500"}`}>
          Stock: {item.stock}
        </p>
        <p className="mt-2"><span className="font-semibold">Description:</span>{item.description}</p>
        <div className="flex justify-center mt-6">
          <Link to="/all-sports-equipment" className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-400">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
