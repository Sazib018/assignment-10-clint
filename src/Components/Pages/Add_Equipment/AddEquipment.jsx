import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddEquipment = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: "",
        itemName: "",
        categoryName: "",
        description: "",
        price: "",
        rating: "",
        customization: "",
        processingTime: "",
        stockStatus: "",
        userEmail: user?.email || "",
        userName: user?.displayName || "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://assignment-10-server2-navy.vercel.app/sports", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            Swal.fire("Success!", "Equipment added successfully!", "success");
            navigate("/");
        } else {
            Swal.fire("Error!", "Failed to add equipment", "error");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 mt-9 bg-white shadow-2xl rounded-lg border border-orange-300">
            <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">Add New Equipment</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/** Image Field */}
                <div className="mb-4">
                    <label className="block text-orange-700 font-semibold mb-2">Image URL</label>
                    <input type="text" name="image" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" onChange={handleChange} />
                </div>

                {/** Item Name */}
                <div className="mb-4">
                    <label className="block text-orange-700 font-semibold mb-2">Item Name</label>
                    <input type="text" name="itemName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" onChange={handleChange} />
                </div>

                {/** Category Name */}
                <div className="mb-4">
                    <label className="block text-orange-700 font-semibold mb-2">Category Name</label>
                    <input type="text" name="categoryName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" onChange={handleChange} />
                </div>

                {/** Description */}
                <div className=" mb-4 col-span-2">
                    <label className="block text-orange-700 font-semibold mb-2">Description</label>
                    <textarea name="description" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 h-24 resize-none" onChange={handleChange}></textarea>
                </div>

                {/** Price */}
                <div className="mb-4">
                    <label className="block text-orange-700 font-semibold mb-2">Price</label>
                    <input type="number" name="price" required min="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" onChange={handleChange} />
                </div>

                {/** Rating */}
                <div className="mb-4">
                    <label className="block text-orange-700 font-semibold mb-2">Rating (0-5)</label>
                    <input type="number" name="rating" required min="0" max="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" onChange={handleChange} />
                </div>

                {/** Customization */}
                <div className=" mb-4 col-span-2">
                    <label className="block text-orange-700 font-semibold mb-2">Customization (Optional)</label>
                    <input type="text" name="customization" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" onChange={handleChange} />
                </div>

                {/** Processing Time */}
                <div className="mb-4">
                    <label className="block text-orange-700 font-semibold mb-2">Processing Time</label>
                    <input type="text" name="processingTime" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" onChange={handleChange} />
                </div>

                {/** Stock Status */}
                <div className="mb-4">
                    <label className="block text-orange-700 font-semibold mb-2">Stock Status</label>
                    <input type="number" name="stockStatus" required min="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" onChange={handleChange} />
                </div>

                {/** User Email (Disabled) */}
                <div className=" mb-4 p-4 shadow-md rounded-lg bg-gray-100 border border-orange-200 col-span-2">
                    <label className="block text-gray-600 font-semibold mb-2">User Email</label>
                    <input type="email" value={formData.userEmail} disabled className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
                </div>

                {/** User Name (Disabled) */}
                <div className="mb-4 p-4 shadow-md rounded-lg bg-gray-100 border border-orange-200 col-span-2">
                    <label className="block text-gray-600 font-semibold mb-2">User Name</label>
                    <input type="text" value={formData.userName} disabled className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
                </div>

                {/** Submit Button */}
                <div className="col-span-2 flex justify-center">
                    <button type="submit" className="px-6 py-3 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-500 transition duration-300">
                        Add Equipment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;
