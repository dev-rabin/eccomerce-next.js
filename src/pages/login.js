import "../app/globals.css";

export default function Login() {
    return <>
        <div className="container flex justify-center items-center flex-col mt-28">
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
        </div>
    </>
};
