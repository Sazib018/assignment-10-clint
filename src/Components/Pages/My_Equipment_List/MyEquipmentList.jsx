import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyEquipmentList = () => {
    const [equipmentList, setEquipmentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://assignment-10-server2-navy.vercel.app/sports")
            .then((res) => res.json())
            .then((data) => setEquipmentList(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete?")) {
            fetch(`https://assignment-10-server2-navy.vercel.app/sports/${id}`, { method: "DELETE" })
                .then((res) => {
                    if (res.ok) {
                        setEquipmentList(equipmentList.filter(item => item.id !== id));
                        toast.success("Deleted Successfully");
                    } else {
                        toast.error("Failed to delete");
                    }
                })
                .catch((error) => console.error("Error deleting data:", error));
        }
    };

    return (
        <div>
            {equipmentList?.map((item) => (
                <div key={item.id} className="card">
                    <h3>{item.itemName}</h3>
                    <p>{item.category}</p>
                    <button onClick={() => navigate(`/update-equipment/${item.id}`)}>Update</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default MyEquipmentList;
