import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form"; 
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { login, loginWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        login(data.email, data.password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    text: "Your account has been logged in successfully.",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                }).then(() => {
                    navigate("/");
                });
            })
            .catch((error) => {
                toast.error("Login failed! Please check your credentials.");
            });
    };

    // Google Login
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
            })
            .catch(() => {
                toast.error("Google Login Failed!");
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-orange-200 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    Login to your account
                </h2>
                <hr className="my-4" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-700 text-white py-2 rounded-lg hover:bg-[#7c6247] transition"
                    >
                        Login
                    </button>
                </form>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center gap-2 p-2 rounded-lg mt-4 hover:bg-gray-200" >
                    <FcGoogle size={22}></FcGoogle> Login with Google
                </button>

                <p className="text-center text-gray-600 mt-4">
                    Don’t Have An Account?{" "}
                    <Link to="/register" className="text-red-500 font-medium">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
