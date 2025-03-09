import { Link } from "react-router-dom";

const AllSportsEquipment = () => {
  const equipmentData = [
    {
      id: 1,
      name: "Football",
      category: "Outdoor",
      price: "$30",
      image: "https://i.ibb.co/XryMzKmP/Puma-Christian-Pulisic-Youth-Collection-jpg.webp",
      brand: "Puma",
      stock: "Available",
      description: "A high-quality football designed for professional and casual matches.",
    },
    {
      id: 2,
      name: "Basketball",
      category: "Indoor",
      price: "$25",
      image: "https://i.ibb.co/vxPjJ74N/istockphoto-183256716-612x612.jpg",
      brand: "Spalding",
      stock: "Limited",
      description: "Durable basketball suitable for both indoor and outdoor courts.",
    },
    {
      id: 3,
      name: "Tennis Racket",
      category: "Racket Sports",
      price: "$50",
      image: "https://i.ibb.co/0y7vYr78/images-2.jpg",
      brand: "Wilson",
      stock: "In Stock",
      description: "Lightweight and durable tennis racket designed for professionals.",
    },
    {
      id: 4,
      name: "Cricket Bat",
      category: "Outdoor",
      price: "$40",
      image: "https://i.ibb.co/wNY9cwZW/dsc-flip-player-edition-2.jpg",
      brand: "DSC",
      stock: "Out of Stock",
      description: "Top-grade cricket bat for powerful strokes and long-lasting durability.",
    },
    {
      id: 5,
      name: "Hockey Stick",
      category: "Outdoor",
      price: "$35",
      image: "https://i.ibb.co/pBkWz73P/istockphoto-1464504444-612x612.jpg",
      brand: "Adidas",
      stock: "Available",
      description: "High-performance hockey stick for enhanced gameplay and precision shots.",
    },
    {
      id: 6,
      name: "Badminton Racket",
      category: "Racket Sports",
      price: "$45",
      image: "https://i.ibb.co/cX7PfVVR/2-480x480.webp",
      brand: "Yonex",
      stock: "Limited",
      description: "Lightweight and flexible badminton racket for speed and control.",
    },
    {
      id: 7,
      name: "Table Tennis Paddle",
      category: "Indoor",
      price: "$20",
      image: "https://i.ibb.co/RGzNWzpM/ping-pong-paddle-1.webp",
      brand: "Stiga",
      stock: "Available",
      description: "Professional table tennis paddle with a firm grip and strong spin control.",
    },
    {
      id: 8,
      name: "Boxing Gloves",
      category: "Combat Sports",
      price: "$60",
      image: "https://i.ibb.co/C5Qg2YQB/photo-1549719386-74dfcbf7dbed.jpg",
      brand: "Everlast",
      stock: "In Stock",
      description: "Premium boxing gloves with enhanced padding and wrist support.",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
        All Sports Equipment
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-sm md:text-base">
              <th className="p-3 md:p-4">Image</th>
              <th className="p-3 md:p-4">Name</th>
              <th className="p-3 md:p-4">Category</th>
              <th className="p-3 md:p-4">Price</th>
              <th className="p-3 md:p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {equipmentData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="p-3 md:p-4 text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 md:w-16 md:h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 md:p-4 text-center font-semibold text-sm md:text-base">
                  {item.name}
                </td>
                <td className="p-3 md:p-4 text-center text-sm md:text-base">
                  {item.category}
                </td>
                <td className="p-3 md:p-4 text-center text-green-600 font-semibold text-sm md:text-base">
                  {item.price}
                </td>
                <td className="p-3 md:p-4 text-center">
                  <Link
                    to={`/view_details/${item.id}`}
                    className="bg-orange-700 text-white text-xs md:text-sm px-3 py-1 md:px-4 md:py-2 rounded hover:bg-orange-400 transition"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
