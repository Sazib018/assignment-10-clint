import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Basketball",
    price: "$25",
    description: "A high-quality basketball for indoor and outdoor all place  play.",
    imageUrl: "https://i.ibb.co.com/chKGs6YX/close-up-view-of-glowing-basketball-ball-on-wet-floor-and-3d-court-generative-ai-photo.jpg",
  },
  {
    id: 2,
    name: "Soccer Ball",
    price: "$20",
    description: "Durable soccer ball for all types of player are play.",
    imageUrl: "https://i.ibb.co.com/8gNRGB3k/images-4.jpg",
  },
  {
    id: 3,
    name: "Tennis Racket",
    price: "$50",
    description: "A lightweight tennie racket for precision of the shots.",
    imageUrl: "https://i.ibb.co.com/LXnFDmzh/Tennis-Racket-and-Balls.jpg",
  },
  {
    id: 4,
    name: "Baseball Glove",
    price: "$35",
    description: "A durable glove for baseball players of all levels.",
    imageUrl: "https://i.ibb.co.com/gLPkwKy6/Getty-Images-157187966-596ada295f9b582c3573819b.jpg",
  },
  {
    id: 5,
    name: "Football",
    price: "$30",
    description: "Official size football for competitive play in every where.",
    imageUrl: "https://i.ibb.co.com/3mvB42WK/images-2.jpg",
  },
  {
    id: 6,
    name: "Badminton Racket",
    price: "$25",
    description: "A lightweight racket designed for professional badminton players.",
    imageUrl: "https://i.ibb.co.com/93cpPn7t/images-3.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="py-10 px-5 mt-12 max-w-[1250px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Our Sports Equipment</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
