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
        const response = await fetch("http://localhost:3000/sports", {
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
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300">
                <input type="text" name="image" placeholder="Image URL" required className="input w-full" onChange={handleChange} />
            </div>
    
            {/** Item Name */}
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300">
                <input type="text" name="itemName" placeholder="Item Name" required className="input w-full" onChange={handleChange} />
            </div>
    
            {/** Category Name */}
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300">
                <input type="text" name="categoryName" placeholder="Category Name" required className="input w-full" onChange={handleChange} />
            </div>
    
            {/** Description */}
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300 col-span-2">
                <textarea name="description" placeholder="Description" required className="input w-full h-24 resize-none" onChange={handleChange}></textarea>
            </div>
    
            {/** Price */}
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300">
                <input type="number" name="price" placeholder="Price" required  min="0" className="input w-full" onChange={handleChange} />
            </div>
    
            {/** Rating */}
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300">
                <input type="number" name="rating" placeholder="Rating (0-5)" required min="0"  className="input w-full" onChange={handleChange} />
            </div>
    
            {/** Customization */}
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300 col-span-2">
                <input type="text" name="customization" placeholder="Customization (Optional)" className="input w-full" onChange={handleChange} />
            </div>
    
            {/** Processing Time */}
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300">
                <input type="text" name="processingTime" placeholder="Processing Time" required className="input w-full" onChange={handleChange} />
            </div>
    
            {/** Stock Status */}
            <div className="p-4 shadow-md rounded-lg bg-white border border-orange-200 hover:shadow-orange-400 transition duration-300">
                <input type="number" name="stockStatus" placeholder="Stock Status" required min="0"  className="input w-full" onChange={handleChange} />
            </div>
    
            {/** User Email (Disabled) */}
            <div className="p-4 shadow-md rounded-lg bg-gray-100 border border-orange-200 col-span-2">
                <input type="email" value={formData.userEmail} disabled className="input w-full" />
            </div>
    
            {/** User Name (Disabled) */}
            <div className="p-4 shadow-md rounded-lg bg-gray-100 border border-orange-200 col-span-2">
                <input type="text" value={formData.userName} disabled className="input w-full" />
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
