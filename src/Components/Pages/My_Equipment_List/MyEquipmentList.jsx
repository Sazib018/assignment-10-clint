import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [equipments, setEquipments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://assignment-10-server2-navy.vercel.app/sports?userEmail=${user.email}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then((data) => {
                setEquipments(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [user?.email]);

    // Handle Delete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure Delete This Item?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server2-navy.vercel.app/sports/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
                            setEquipments(equipments.filter((item) => item._id !== id));
                        }
                    })
                    .catch(() => Swal.fire("Error!", "Something went wrong.", "error"));
            }
        });
    };

    if (loading) return <p className="text-center text-orange-700 font-semibold">Loading...</p>;
    if (error) return <p className="text-center text-red-600 font-semibold">{error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 mt-9 bg-white shadow-2xl rounded-lg border border-orange-300">
            <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">My Equipment List</h2>

            {equipments.length === 0 ? (
                <p className="text-center text-gray-500">No equipment added yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {equipments.map((item) => (
                        <div key={item._id} className="p-4 border rounded-lg shadow-md">
                            <img src={item.image} alt={item.itemName} className="w-full h-40 object-cover rounded-lg mb-3" />
                            <h3 className="text-xl font-bold text-orange-700">{item.itemName}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="text-sm font-semibold">Price: ${item.price}</p>
                            <p className="text-sm">Stock: {item.stockStatus}</p>
                            <div className="flex gap-2 mt-3">
                                <button 
                                    onClick={() => navigate(`/update-equipment/${item._id}`)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                    Update
                                </button>
                                <button 
                                    onClick={() => handleDelete(item._id)} 
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyEquipmentList;
