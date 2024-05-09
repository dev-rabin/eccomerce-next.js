import Navbar from "@/components/navbar";
import "../app/globals.css";
import Footer from "@/components/footer";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
    return <>
        <Navbar />
        <div className="container w-4/3 border flex justify-between flex-row">
            <div className=" w-1/3  bg-gray-200 p-10">
                <img src="/image/shopping.png" alt="Not available" />
            </div>
            
            <div className=" w-3/6 px-12 m-auto">
            <div className="mb-5 text-3xl font-medium">
                Create an account
            </div>
            <p className="mb-8 font-medium">Enter your details below</p>
                <div className="my-2" >
                    <label >Email</label>
                    <input className="w-full border-b-2 rounded-sm outline-none py-2  text-black" type="email" name="email" placeholder="Enter email" />
                </div>
                <div className="my-2">
                    <label >Password</label>
                    <input className="w-full border-b-2 rounded-sm outline-none py-2  text-black" type="password" name="password" placeholder="Enter email" />
                </div>
                <div className="my-3 text-right"><a href="http://">Forgot Password ?</a></div>
                <div className="text-center p-3 rounded-sm bg-black text-white">
                    <input type="button" value="Create Account" />
                </div>

                <div className=" border-2 text-center my-5 p-3 rounded-sm items-center">
                   <FontAwesomeIcon icon={faGoogle}/><span> Sign up with Google</span>
                </div>
            </div>
        </div>
        <Footer />
    </>
};


{/* <div className="container flex justify-center items-center flex-col mt-28">
            <div className="mb-3 text-3xl font-bold">
                Shoppy
            </div>
            <div className="text-3xl">
                Sign in to your account
            </div>
            <div className="flex flex-col w-2/5 p-10 shadow-slate-400">
                <div >
                    <label>Email</label>
                    <input className="w-full rounded-sm outline-none p-2 my-3 text-black" type="email" name="email" placeholder="Enter email" />
                </div>
                <div>
                    <label>Password</label>
                    <input className="w-full rounded-sm outline-none p-2 my-3 text-black" type="password" name="password" placeholder="Enter email" />
                </div>
                <div className="my-3 text-right"><a href="http://">Forgot Password ?</a></div>
                <div className="text-center p-2 rounded-sm bg-purple-700">
                    <input type="button" value="Sign in" />
                </div>
            </div>
        </div> */}