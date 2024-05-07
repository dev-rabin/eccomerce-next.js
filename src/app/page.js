import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import TopHeader from "@/components/top_header";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
import { faAngleDown, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
    return (
        <>
            <TopHeader />
            <Navbar />
            <div className="w-4/5 mx-auto p-2 flex flex-row justify-start">
                <aside className="h-40 flex justify-between flex-col border-r w-1/5 mr-6">
                    <div className="flex flex-row">
                        <div className="mr-1">Women's Fashion</div>
                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-1">Women's Fashion</div>
                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                    </div>    <div className="flex flex-row">
                        <div className="mr-1">Women's Fashion</div>
                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                    </div>    <div className="flex flex-row">
                        <div className="mr-1">Women's Fashion</div>
                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                    </div>
                </aside>
                <div className="border mx-auto">
                    <Image src="/images/iphone2.jpg" alt="iPhone" width={895} height={400} />
                </div>
            </div>
            <hr />

            <div className=" w-4/5 mx-auto my-16">

                <div className="my-3">
                    <div className=" text-2xl text-red-600">
                        <span className=" rounded-sm bg-red-500">...</span> Today's Deal
                    </div>

                </div>
                <div className="flex justify-between my-5 ">
                    <p className=" text-3xl font-bold">
                        Flash Sales
                    </p>
                    <div>

                        <input className=" bg-red-500 rounded-sm text-white p-2 mr-7" type="button" value="View all products" />
                    </div>
                </div>
                <div className="today-deal flex flex-row justify-between">
                    <div className="card mr-10 border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 mr-10 h-full border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 mr-10 h-full border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 mr-10 h-full border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 mr-10 h-full border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/4 mr-10 h-full border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* Category container */}

            <div className="my-16 w-4/5 mx-auto">
                <div className=" text-2xl text-red-600">
                    <span className=" rounded-sm bg-red-500">...</span> Categories
                </div>
                <div className="my-3">
                    <p className=" text-3xl font-bold text-gray-950">
                        Browse by Categories
                    </p>
                    <div className="flex flex-row justify-between">


                        <div className="square-card w-40 h-40 border my-4 flex flex-col justify-center items-center">
                            <div><FontAwesomeIcon icon={faMobile} size="5x" /></div>
                            <p className=" text-lg">Mobiles</p>
                        </div>
                        <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                            <div><FontAwesomeIcon icon={faMobile} size="5x" /></div>
                            <p className=" text-lg">Mobiles</p>
                        </div>
                        <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                            <div><FontAwesomeIcon icon={faMobile} size="5x" /></div>
                            <p className=" text-lg">Mobiles</p>
                        </div>
                        <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                            <div><FontAwesomeIcon icon={faMobile} size="5x" /></div>
                            <p className=" text-lg">Mobiles</p>
                        </div>
                        <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                            <div><FontAwesomeIcon icon={faMobile} size="5x" /></div>
                            <p className=" text-lg">Mobiles</p>
                        </div>
                        <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                            <div><FontAwesomeIcon icon={faMobile} size="5x" /></div>
                            <p className=" text-lg">Mobiles</p>
                        </div>
                        <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                            <div><FontAwesomeIcon icon={faMobile} size="5x" /></div>
                            <p className=" text-lg">Mobiles</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className=" w-4/5 my-16 mx-auto">
                <div className=" text-2xl text-red-600">
                    <span className=" rounded-sm bg-red-500">...</span> This Month
                </div>
                <div className="flex justify-between">
                    <p className=" text-3xl my-3 font-bold text-gray-950">
                        Best Selling Products
                    </p>
                    <p>
                        <input className=" bg-red-500 rounded-sm text-white p-2 mr-7" type="button" value="View all products" />
                    </p>
                </div>
                <div className="today-deal flex flex-row justify-between">
                    <div className="card mr-10 border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mr-10 border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mr-10 border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mr-10 border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mr-10 border p-1 flex flex-col justify-between">
                        <div>
                            <div className="upper-icons flex flex-row justify-between">
                                <div className="bg-red-600 text-white text-sm px-3">
                                    -20
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="my-1">
                                <Image src="/image/iphone.jpg" alt="not available" width={320} height={200} />
                            </div>
                        </div>
                        <div>
                            <p className="mb-3">Product Name : Camera</p>
                            <p className="mb-3">Product Price : $100</p>
                            <p className="mb-3">Description : Canon Camera</p>
                            <div className="ratings flex flex-row mb-3 items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className="mx-2">
                                    (83)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="mx-auto w-4/5 bg-black flex justify-around">
            <div className="my-auto">
            <p className=" text-green-500 my-5 font-bold text-lg">
                categories
            </p>
                <p className=" text-white my-5 text-4xl font-bold">
                    Enhance Your <br /> Music Experiance
                </p>
                <p className="my-5">
                    <input className=" bg-green-500 p-3 text-white font-bold rounded-md" type="button" value="Buy Now" />
                </p>
            </div>
                    <div>
                    <img src="/image/jbl.png" alt="Not available" />
                    </div>
            </div>
            <Footer />
        </>
    );
}
