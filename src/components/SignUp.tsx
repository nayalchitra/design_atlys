import { FC } from "react";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { UseModalContext } from "../context/ModalContext";



interface SignUpProps{
    onClose:()=>void;
}

const SignUp:FC<SignUpProps> =({onClose})=>{

    const [showPassword, setShowPassword] = useState(false);

    const {showLoginModal, setShowLoginModal, showSignUpModal, setShowSignUpModal} = UseModalContext();

    
    const handleShowPassword = ()=>{
        
        setShowPassword(showPassword=>!showPassword);

    }

    

    return(
        <>
            <div className="min-h-screen flex items-center justify-center">
           <div className="bg-zinc-700 flex flex-col justify-evenly items-center w-[30rem] rounded-xl border border-gray-500">
                <div className="mt-8 mb-8 flex flex-col items-center">
                    <h4 className="text-gray-400">SIGN UP</h4>
                    <h3 className="text-white">Create an account to continue</h3>
                </div>
                <form className="w-[80%]">
                <div className="mb-4 flex flex-col">
                       
                       <label className="text-gray-300 mb-2" htmlFor="email">Email</label>
                   
                       <input className="text-gray-400 bg-zinc-700 border-gray-500 border rounded p-2 outline-none" id="email" type="email" placeholder="Enter your email" />
                   
               </div>
                    <div className="mb-4 flex flex-col">
                       
                            <label className="text-gray-300 mb-2" htmlFor="username">Username</label>
                        
                            <input className="text-gray-400 bg-zinc-700 border-gray-500 border rounded p-2 outline-none" id="username" type="text" placeholder="Choose a preferred username" />
                        
                    </div>
                    <div className="relative mb-4 flex flex-col">
                       <label className="text-gray-300 mb-2" htmlFor="pwd">Password</label>
                        <input className="block w-full text-gray-400 bg-zinc-700 border-gray-500 border rounded p-2 outline-none" id="pwd" type={showPassword ? "text" : "password"} placeholder="Choose a strong password"/>
                        <button className="absolute top-10 right-0 pr-3 flex items-center text-gray-400" type="button" onClick={handleShowPassword} >
                            {
                                showPassword ? <HiOutlineEye className="w-5 h-5"/> : <HiOutlineEyeOff className="w-5 h-5"/>
                            }
                            </button>
                    </div>
                   
                    <div className="mb-4 flex flex-col">
                        <button className="bg-sky-500 rounded text-white p-2 cursor-pointer"  onClick={onClose}>Continue</button>
                    </div>
                    <p className="mb-8"><span className="text-gray-400">Already have an account</span> <span className="text-gray-300 cursor-pointer"  onClick={()=>{setShowSignUpModal(!showSignUpModal); setShowLoginModal(!showLoginModal)}}>Login -&gt;</span></p>
                </form>
             
            </div>
           </div>
        </>
    )
}

export default SignUp;