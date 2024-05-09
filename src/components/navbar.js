import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./components.css"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Navbar() {
    return <>
       <div className=" w-4/5 mx-auto my-6 p-2 flex flex-row">
        <div className="first-box w-1/2 flex justify-between">
        <div className="w-1/4 font-bold text-xl">
    Shoppy
</div>
            <div className="nav-menu flex flex-row w-2/4 justify-between">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <Link href="/login">Sign Up</Link>
            </div>
        </div>
        <div className="second-box w-1/2 flex flex-row justify-end">
            <div className='relative search-bar rounded-md'>
                <input className="search-bar p-2 pl-8 text-xs w-60 outline-none" type="search" placeholder="What are you looking for ?"/><span className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
            </div>
            <div className=' w-1/5 flex flex-row justify-around items-center'>
           <div>
                <FontAwesomeIcon icon={faHeart} fontSize="20px"/>
            </div>
            <div>
            <FontAwesomeIcon icon={faShopify} fontSize="20px"/>
            </div>
            </div>
           </div>
        </div>
       <hr />
    </>
};

