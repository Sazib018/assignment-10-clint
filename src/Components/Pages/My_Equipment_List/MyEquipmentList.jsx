import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyEquipmentList = () => {
    const [equipmentList, setEquipmentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://assignment-10-server2-navy.vercel.app/sports')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched equipment data:", data);
                setEquipmentList(data);
            })
            .catch(error => {
                console.error("There was an error fetching the equipment:", error);
                toast.error("Failed to load equipment.");
            });
    }, []);

    const handleUpdate = (id) => {
        navigate(`/update-equipment/${id}`);
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this equipment?");
        if (confirmDelete) {
            fetch(`https://assignment-10-server2-navy.vercel.app/sports/${id}`,
                { method: 'DELETE' })
                .then(() => {
                    toast.success("Equipment deleted successfully!");
                    setEquipmentList(equipmentList.filter(item => item._id !== id));
                })
                .catch(error => {
                    console.error("There was an error deleting the equipment:", error);
                    toast.error("Failed to delete equipment.");
                });
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {equipmentList.length === 0 ? (
                <p>No equipment found.</p>
            ) : (
                equipmentList.map((item) => (
                    <div key={item._id} className="equipment-card p-4 bg-white shadow-lg rounded-lg max-w-[600px] h-[400px] flex flex-col justify-between">
                        <img src={item.image} alt={item.itemName} className="w-full h-40 object-cover rounded-md" />
                        <div className="mt-2 flex-grow">
                            <h3 className="text-lg font-semibold"><span>Item_ Name :</span> {item.itemName}</h3>
                            <p className="text-sm text-gray-800">
                                <span>Category_Name :</span> {item.categoryName}</p>
                            <p className="text-lg font-semibold text-gray-800"><span>Price :</span> {item.price}</p>
                        </div>
                        <div className="mt-4 flex justify-center gap-6">
                            <button
                                onClick={() => handleUpdate(item._id)}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
            <ToastContainer />
        </div>


    );
};

export default MyEquipmentList;
