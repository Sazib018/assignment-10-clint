import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddEquipment = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: "", itemName: "", category: "", description: "", price: "",
        rating: "", customization: "", processingTime: "", stock: "",
        userEmail: "user@example.com",
        userName: "John Doe" 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://assignment-10-server2-navy.vercel.app/sports", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (res.ok) {
                    toast.success("Equipment Added Successfully!");
                    navigate("/my-equipment-list");
                } else {
                    toast.error("Failed to add equipment.");
                }
            })
            .catch((error) => console.error("Error adding equipment:", error));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <input type="text" name="itemName" placeholder="Item Name" onChange={handleChange} required />
            <input type="text" name="category" placeholder="Category Name" onChange={handleChange} required />
            <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
            <input type="number" name="rating" placeholder="Rating" onChange={handleChange} required />
            <input type="text" name="customization" placeholder="Customization" onChange={handleChange} />
            <input type="text" name="processingTime" placeholder="Processing Time" onChange={handleChange} required />
            <input type="number" name="stock" placeholder="Stock Status" onChange={handleChange} required />
            <button type="submit">Add Equipment</button>
        </form>
    );
};

export default AddEquipment;
