
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateEquipment = () => {
    const [equipment, setEquipment] = useState({
        itemName: '',
        category: '',
        description: '',
        price: '',
        rating: '',
        customization: '',
        processingTime: '',
        stockStatus: '',
        userEmail: '',
        userName: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/sports/${id}`)
            .then(response => response.json())
            .then(data => {
                setEquipment(data);
            })
            .catch(error => {
                console.error("There was an error fetching the equipment:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipment({ ...equipment, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/sports/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(equipment),
        })
            .then(response => {
                if (response.ok) {
                    toast.success("Equipment updated successfully!");
                    navigate('/my-equipment-list');
                } else {
                    toast.error("Failed to update equipment!");
                }
            })
            .catch(error => {
                console.error("There was an error updating the equipment:", error);
            });
    };

    return (
        <div className="p-6 max-w-lg mt-16 mx-auto bg-orange-50 shadow-transparent rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Update Equipment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="itemName"
                value={equipment.itemName}
                onChange={handleChange}
                placeholder="Item Name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
                type="text"
                name="category"
                value={equipment.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
                name="description"
                value={equipment.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
                type="number"
                name="price"
                value={equipment.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
                type="number"
                name="rating"
                value={equipment.rating}
                onChange={handleChange}
                placeholder="Rating"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
                type="text"
                name="customization"
                value={equipment.customization}
                onChange={handleChange}
                placeholder="Customization"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
                type="text"
                name="processingTime"
                value={equipment.processingTime}
                onChange={handleChange}
                placeholder="Processing Time"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
                type="text"
                name="stockStatus"
                value={equipment.stockStatus}
                onChange={handleChange}
                placeholder="Stock Status"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
                type="email"
                name="userEmail"
                value={equipment.userEmail}
                readOnly
                placeholder="User Email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
            />
            <input
                type="text"
                name="userName"
                value={equipment.userName}
                readOnly
                placeholder="User Name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100"
            />
            <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
            >
                Update Equipment
            </button>
        </form>
        <ToastContainer />
    </div>
    
    );
};

export default UpdateEquipment;
