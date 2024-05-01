import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar/>
        <div className="container p-8">
        <div className="mb-8 flex justify-center items-center">
            <input className="w-3/5 p-3 rounded-3xl mx-2 text-black outline-none" type="search" name="Search" placeholder="Search here..." />
            <span><input type="button" value="Search" /></span>
        </div>
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
        </div>
        <Footer/>
    </>
  );
}
