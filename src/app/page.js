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

                <div className="flex flex-row justify-between my-3">
                <div className=" text-2xl text-red-600">
                   <span className=" rounded-sm bg-red-500">...</span> Today's Deal
                </div>
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
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
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
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
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
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
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
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
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
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
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
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <div className="mx-2">
                                (83)
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
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
                <div><FontAwesomeIcon icon={faMobile} size="5x"/></div>
                <p className=" text-lg">Mobiles</p>
                </div>
                <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                <div><FontAwesomeIcon icon={faMobile} size="5x"/></div>
                <p className=" text-lg">Mobiles</p>
                </div>
                <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                <div><FontAwesomeIcon icon={faMobile} size="5x"/></div>
                <p className=" text-lg">Mobiles</p>
                </div>
                <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                <div><FontAwesomeIcon icon={faMobile} size="5x"/></div>
                <p className=" text-lg">Mobiles</p>
                </div>
                <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                <div><FontAwesomeIcon icon={faMobile} size="5x"/></div>
                <p className=" text-lg">Mobiles</p>
                </div>
                <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                <div><FontAwesomeIcon icon={faMobile} size="5x"/></div>
                <p className=" text-lg">Mobiles</p>
                </div>
                <div className="square-card w-40 h-40 border my-3 flex flex-col justify-center items-center">
                <div><FontAwesomeIcon icon={faMobile} size="5x"/></div>
                <p className=" text-lg">Mobiles</p>
                </div>
                </div>
                </div>
              </div>
              <hr />
            <Footer />
        </>
    );
}
