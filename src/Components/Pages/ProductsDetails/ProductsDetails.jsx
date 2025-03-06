import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://assignment-10-server2-navy.vercel.app/sports/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error:", error));
    }, [id]);

    if (!product) {
        return <p className="text-center mt-20 text-lg">Loading...</p>;
    }

    return (
        <div className="max-w-5xl mx-auto mt-16 p-6 flex flex-col md:flex-row gap-10">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold">{product.
                    itemName}</h1>
                <p className="text-gray-500 text-lg mt-2"><span className="font-bold text-black">Category :</span> {product.
                    categoryName}</p>
                <p className="text-gray-600 mt-4"><span className="font-bold text-black">Description :</span> {product.
                    description}</p>
                <div className="flex flex-col gap-4 mt-4">
                    <p className="text-2xl font-bold text-red-600"><span className="font-bold text-black">$Price :</span> {product.price}</p>
                    <p className="text-lg font-semibold text-yellow-500">
                         <span className="font-bold text-black">Rating :</span> {product.rating}
                    </p>
                </div>

                {/* Add to Cart */}
                <button className="mt-6 w-full py-3 bg-orange-700 text-white hover:text-black font-bold rounded-lg hover:bg-orange-200 transition duration-200">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
