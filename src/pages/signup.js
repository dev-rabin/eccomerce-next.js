import { createUser } from "@/utils/api/user_api/api";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SignUp() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const signUpUser = async () => {
        try {
            setError(false)
            if (userData.email === "" || userData.password === "") {
                console.log("Please fill in all details!");
                setError(true);
                setErrorMessage("Please fill all details!")
                return;
            }
            const response = await createUser(userData);
            console.log("User created!", response);
        } catch (error) {
            console.error("Error in user creation: ", error);
            setError(true);
            setErrorMessage("An error occurred while creating the user.");
        }
    }; 

    return (
        <>
            <Navbar />
            <div className="container w-4/3 border flex justify-between flex-row">
                <div className="w-1/3 bg-gray-200 p-10">
                    <img src="/image/shopping.png" alt="Not available" />
                </div>

                <div className="w-3/6 px-12 m-auto">
                    <div className="mb-5 text-3xl font-medium">
                        Create an account
                    </div>
                    <p className="mb-5 font-medium">Enter your details below</p>
                    {error && (
                    <div className="text-red-600">{errorMessage}</div>
                    )}
                    <div className="my-2">
                        <label>Email</label>
                        <input
                            className="w-full border-b-2 rounded-sm outline-none py-2 text-black"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-2">
                        <label>Password</label>
                        <input
                            className="w-full border-b-2 rounded-sm outline-none py-2 text-black"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="text-center my-3 p-3 rounded-sm bg-red-600 text-white hover:cursor-pointer">
                        <button onClick={signUpUser}>Create Account</button>
                    </div>

                    <div className="border-2 text-center my-5 p-3 rounded-sm items-center">
                        <FontAwesomeIcon icon={faGoogle} />
                        <span> Sign up with Google</span>
                    </div>
                    <div className="text-center">
                        Already have an account ?{" "}
                        <span className="underline">
                            <Link href="/login"> Login here</Link>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
