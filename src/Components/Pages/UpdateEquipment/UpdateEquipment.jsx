import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2"; // Import SweetAlert2

const UpdateEquipment = () => {
    const [equipment, setEquipment] = useState({
        itemName: "",
        category: "",
        description: "",
        price: "",
        stockStatus: "",
        rating: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://assignment-10-server2-navy.vercel.app/sports/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch equipment');
                }
                return response.json();
            })
            .then((data) => {
                setEquipment({
                    itemName: data.itemName || "",
                    category: data.category || "", 
                    description: data.description || "",
                    price: data.price || "", 
                    stockStatus: data.stockStatus || "",
                    rating: data.rating || "",  
                });
            })
            .catch((error) => {
                toast.error(`Error fetching equipment: ${error.message}`);
                console.error("There was an error fetching the equipment:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipment({ ...equipment, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://assignment-10-server2-navy.vercel.app/sports/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(equipment),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update equipment");
                }
                return response.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    // Show SweetAlert on success
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    }).then(() => {
                        navigate("/my-equipment-list"); // Navigate after the alert is closed
                    });
                } else {
                    toast.warning("No changes were made.");
                }
            })
            .catch((error) => {
                toast.error(`Failed to update equipment: ${error.message}`);
                console.error("There was an error updating the equipment:", error);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-orange-100">
            <div className="p-8 max-w-md w-full bg-orange-200 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Update Equipment</h2>
                <hr className="mb-4 border-gray-300" />

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Item Name</label>
                        <input
                            type="text"
                            name="itemName"
                            value={equipment.itemName || ""}
                            onChange={handleChange}
                            placeholder="Enter item name"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={equipment.category || ""}
                            onChange={handleChange}
                            placeholder="Enter category"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={equipment.description || ""}
                            onChange={handleChange}
                            placeholder="Enter description"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={equipment.price || ""}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Rating </label>
                        <input
                            type="number"
                            name="rating"
                            value={equipment.rating || ""}
                            onChange={handleChange}
                            min="1"
                            max="5"
                            placeholder="Enter rating (1-5)"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Stock Status</label>
                        <input
                            type="text"
                            name="stockStatus"
                            value={equipment.stockStatus || ""}
                            onChange={handleChange}
                            placeholder="Enter stock status"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transition">
                        Update Equipment
                    </button>
                </form>

                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateEquipment;
