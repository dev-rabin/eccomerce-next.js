import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import TopHeader from "@/components/top_header";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTurnDown } from "@fortawesome/free-solid-svg-icons";
import PhoneImage from "./images/iphone.jpg";

export default function Home() {
  return (
    <>
    <TopHeader/>
      <Navbar/>
      <div className=" w-4/5 border mx-auto p-2 flex flex-row justify-between">
      <aside className=" h-40 flex justify-between flex-col border w-1/5">
        <div className="flex flex-row"><div className="mr-1">Wome's Fashion</div><span><FontAwesomeIcon icon={faAngleDown}/></span></div>
        <div className="flex flex-row"><div className="mr-1">Wome's Fashion</div><span><FontAwesomeIcon icon={faAngleDown}/></span></div>
        <div className="flex flex-row"><div className="mr-1">Wome's Fashion</div><span><FontAwesomeIcon icon={faAngleDown}/></span></div>
        <div className="flex flex-row"><div className="mr-1">Wome's Fashion</div><span><FontAwesomeIcon icon={faAngleDown}/></span></div>
        <div className="flex flex-row"><div className="mr-1">Wome's Fashion</div><span><FontAwesomeIcon icon={faAngleDown}/></span></div>
      </aside>
      <main>
      <div className="border w-full">
      <img className="rounded-lg mb-5" src={PhoneImage} alt="not-available" />
      </div>
      </main>
      </div>
        {/* <div className="container p-8">
        <div className="w-3/4 mx-auto flex flex-row flex-wrap justify-between">
            <div className="border w-1/4 rounded-lg m-3">
                <img className="rounded-lg mb-5" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="not-available" />
                <div className="px-2">
                    <p className="mb-3">Product Name : Camera</p>
                    <p className="mb-3">Product Price : $100</p>
                    <p className="mb-3">Description : Canon Camera</p>
                </div>
            </div>
            <div className="border w-1/4 rounded-lg m-3">
                <img className="rounded-lg mb-5" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="not-available" />
                <div className="px-2">
                    <p className="mb-3">Product Name : Camera</p>
                    <p className="mb-3">Product Price : $100</p>
                    <p className="mb-3">Description : Canon Camera</p>
                </div>
            </div>
            <div className="border w-1/4 rounded-lg m-3">
                <img className="rounded-lg mb-5" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="not-available" />
                <div className="px-2">
                    <p className="mb-3">Product Name : Camera</p>
                    <p className="mb-3">Product Price : $100</p>
                    <p className="mb-3">Description : Canon Camera</p>
                </div>
            </div>
            <div className="border w-1/4 rounded-lg m-3">
                <img className="rounded-lg mb-5" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="not-available" />
                <div className="px-2">
                    <p className="mb-3">Product Name : Camera</p>
                    <p className="mb-3">Product Price : $100</p>
                    <p className="mb-3">Description : Canon Camera</p>
                </div>
            </div>
            <div className="border w-1/4 rounded-lg m-3">
                <img className="rounded-lg mb-5" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="not-available" />
                <div className="px-2">
                    <p className="mb-3">Product Name : Camera</p>
                    <p className="mb-3">Product Price : $100</p>
                    <p className="mb-3">Description : Canon Camera</p>
                </div>
            </div>
        </div>
        </div> */}
        <Footer/>
    </>
  );
}
