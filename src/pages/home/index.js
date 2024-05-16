import Image from 'next/image';
import { faAngleDown, faCheck, faMobile, faPhone, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import Navbar from "@/components/navbar";
import TopHeader from "@/components/top_header";
import Footer from "@/components/footer";
import { fetchCategories } from '@/utils/api/category_api/api';



export default function Homepage({categories}) {

    const categoriesList = categories || [];

    return (
        <>
            <TopHeader />
            <Navbar />
            <div className="w-4/5 mx-auto p-2 flex flex-row justify-start">
                <aside className="h-40 flex justify-between flex-col border-r w-1/5 mr-6">
                    {categoriesList.map((category,index) => (
                    <div key={index} className="flex flex-row" >
                    <div className="mr-1">{category.title}</div>
                        <span><FontAwesomeIcon icon={faAngleDown} /></span>
                    </div>
                    ))}
                </aside>
                <div className="border mx-auto">
                    <img src="/image/iphone2.jpg" alt="iPhone" />
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
            <hr />
            <div className="mx-auto w-4/5 bg-black flex justify-around my-16">
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
            <hr />
            <div className="w-4/5 mx-auto my-16">
                <div className=" text-2xl text-red-600">
                    <span className=" rounded-sm bg-red-500">...</span> Our Products
                </div>

                <p className=" text-3xl my-3 font-bold text-gray-950">
                    Explore Our Products
                </p>

                <div className="flex flex-row justify-between flex-wrap">
                    <div className="card my-2 border p-1 flex flex-col justify-between">
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
                    <div className="card my-2 border p-1 flex flex-col justify-between">
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
                    <div className="card my-2 border p-1 flex flex-col justify-between">
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
                    <div className="card my-2 border p-1 flex flex-col justify-between">
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
                    <div className="card my-2 border p-1 flex flex-col justify-between">
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
                    <div className="card my-2 border p-1 flex flex-col justify-between">
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
                <div className=" text-center my-4">
                    <input className="p-2 bg-red-600 text-white" type="button" value="View All Products" />
                </div>
            </div>

            <div className=" w-4/5 mx-auto my-16">
                <div>
                    <div className=" text-2xl text-red-600">
                        <span className=" rounded-sm bg-red-500">...</span> Featured
                    </div>
                    <p className=" text-3xl my-3 font-bold text-gray-950">
                        New Arrival
                    </p>
                </div>
                <div className="flex flex-row justify-between gap-3">
                    <div className=" w-1/2 bg-black text-white relative">
                        <img className=" mx-auto featured-img" src="/image/ps.png" alt="Not available" />
                        <div className=" absolute bottom-24 left-6 text-xl font-bold">Playstation 5</div>
                        <div className=" absolute bottom-12 left-6 text-sm text-slate-200">Black and White version <br /> of the PS5 coming out on sale.</div>
                        <div className=" absolute bottom-4 left-6">
                            <a className=" underline" href="http://">Shop Now</a>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-between flex-col">
                        <div>
                            <div className=" relative" >
                                <img src="/image/w_model.jpg" alt="Not available" />
                                <div className=" bottom-6 left-4 absolute text-white font-bold">
                                    Women's Collections
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between flex-row gap-3 items-center text-white">
                            <div className="relative">
                                <img className="featured-img" src="/image/jbl.png" alt="Not available" width="400" height="200" />
                                <div className="absolute bottom-12 left-4 font-bold">Speakers</div>
                                <div className=" absolute bottom-4 left-4">
                            <a className=" underline" href="http://">Shop Now</a>
                        </div>
                            </div>
                            <div className="relative">
                                <img className="featured-img" src="/image/jbl.png" alt="Not available" width="400" height="200" />
                                <div className="absolute bottom-12 left-4  font-bold">Furniture</div>
                                <div className=" absolute bottom-4 left-4">
                            <a className=" underline" href="http://">Shop Now</a>
                        </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="w-4/5 mx-auto my-20">
                <div className="flex justify-around items-center p-9">
                    <div className="flex w-4/12 justify-center flex-col items-center">
                        <div>
                        <FontAwesomeIcon className=" mb-3" icon={faTruck} size="3x"/>
                        </div>
                        <p className="text-2xl font-bold mb-1">Free & Fast Delivery</p>
                        <p className=" text-sm">Free delivery for all orders over $140</p>
                    </div>
                    <div className="flex w-4/12 justify-center flex-col items-center">
                        <div>
                        <FontAwesomeIcon className=" mb-3" icon={faPhone} size="3x"/>
                        </div>
                        <p className="text-2xl font-bold mb-1">24/7 CUSTOMER SERVICE</p>
                        <p className=" text-sm">Friendly 24/7 customer support</p>
                    </div>
                    <div className="flex w-4/12 justify-center flex-col items-center">
                        <div>
                        <FontAwesomeIcon className=" mb-3" icon={faCheck} size="3x"/>
                        </div>
                        <p className="text-2xl font-bold mb-1">MONEY BACK GUARANTEE</p>
                        <p className=" text-sm">We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export async function getServerSideProps (){
    console.log("getServerSideProps is being called");
    try {
        const categories = await fetchCategories();
        console.log("getCategories category successfully : ", categories.data);
        return {
            props : {
                categories
            }
        };

    } catch (error) {
        console.error('Error fetching categories:', error);
        return {
            props : {
                categories :[]
            }
        }
    }
}

