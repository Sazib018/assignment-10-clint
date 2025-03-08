import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateEquipment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        fetch(`/api/equipment/${id}`) // ধরে নিচ্ছি তুমি এই URL থেকে ডাটা আনবে
            .then((res) => res.json())
            .then((data) => setFormData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`/api/equipment/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (res.ok) {
                    toast.success("Updated Successfully!");
                    navigate("/my-equipment");
                } else {
                    toast.error("Update Failed!");
                }
            })
            .catch((error) => console.error("Error updating data:", error));
    };

    return (
        <form onSubmit={handleUpdate}>
            <input type="text" name="itemName" value={formData.itemName || ""} onChange={handleChange} />
            <input type="text" name="category" value={formData.category || ""} onChange={handleChange} />
            <button type="submit">Update Equipment</button>
        </form>
    );
};

export default UpdateEquipment;
