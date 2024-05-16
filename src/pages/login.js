import Footer from "@/components/footer";
import "../app/globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { loginUser } from "@/utils/api/user_api/api";
import { useState } from "react";


export default function Login() {

    const [userData, setUserData] = useState({
        email : "",
        password : ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setUserData({...userData,[e.target.name] : e.target.value})
    }


    const login = async () => {
       try {
        setError(false)
        if (userData.email === "" || userData.password === "") {
            console.log("Please fill in all details!");
            setError(true);
            setErrorMessage("Please fill all details!")
            return;
        }
        const response = await loginUser(userData);
        console.log("User loggedIn ", response);
       } catch (error) {
        console.error("Error in user login: ", error);
        setError(true);
        setErrorMessage("An error occurred while login the user.");
       }
    }

    return (
        <>
            <Navbar/>
            <div className="container w-4/3 border flex justify-between flex-row">
            <div className=" w-1/3  bg-gray-200 p-10">
                <img src="/image/shopping.png" alt="Not available" />
            </div>
            <div className=" w-3/6 px-12 m-auto">
            <div className="mb-5 text-3xl font-medium">
                Login in to Shoppy
            </div>
            <p className="mb-5 font-medium">Enter your details below</p>
            {error && (
                <div className=" text-red-600">{errorMessage}</div>
            )}
                <div className="my-2" >
                    <label >Email</label>
                    <input className="w-full border-b-2 rounded-sm outline-none py-2  text-black" type="email" name="email" placeholder="Enter email" value={userData.email} onChange={handleInputChange}/>
                </div>
                <div className="my-2">
                    <label >Password</label>
                    <input className="w-full border-b-2 rounded-sm outline-none py-2  text-black" type="password" name="password" placeholder="Enter password" value={userData.password} onChange={handleInputChange} />
                </div>
                <div className="my-3 text-right text-red-600 underline"><a href="http://">Forgot Password ?</a></div>
                <div className="text-center my-3 p-3 rounded-sm bg-red-600 text-white">
                    <input className=" hover:cursor-pointer" type="button" value="Login" onClick={login} />
                </div>
                <div className="text-center">
                    Create an account ? <Link href="/signup" className="underline">Sign up</Link>
                </div>
                </div>
                </div>
            <Footer/>
        </>
    )
};
