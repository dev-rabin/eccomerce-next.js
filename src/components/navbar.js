import Link from "next/link";

export default function Navbar() {
    return <>
        <div className="container bg-white text-black p-2 w-full">
            <div className="container w-3/4 mx-auto border-black">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-between">
                        <div className="mr-3 text-purple-700 font-bold text-2xl w-8 border-black">
                            Shoppy
                        </div>
                        <div className="flex w-1/2 p-2 text-lg">
                            <p className="mr-3">Home</p>
                            <p className="mr-3">Products</p>
                            <p className="mr-3">Cart</p>
                            <p className="mr-3">Orders</p>
                        </div>
                    </div>
                    <div className="flex p-2 text-lg">
                        <p className="mr-3">Profile</p>
                        <Link href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
};

