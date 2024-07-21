import { FC } from "react";
import SignUp from "./SignUp";
import Modal from "../UI/Modal";
import Login from "./Login";
import { UseModalContext } from "../context/ModalContext";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

const CommentsPage:FC =()=>{

    const {showSignUpModal, setShowLoginModal, setShowSignUpModal, showLoginModal} = UseModalContext();

    return(
        <>
            <div className="mt-12 flex flex-col justify-center items-center">
                <div className="w-[720px]">
                    <div  className="w-[600px] flex flex-col">
                        <h1 className="text-gray-300">Hello Jane</h1>
                        <p className="text-gray-400">How are you doing today? Would you like to share something with the community 🤗</p>
                    
                    </div>
                    <div className="border border-gray-500 rounded-xl w-[100%] bg-zinc-700 mt-8">
                        <div className="text-gray-300 pt-8 pl-4 pb-8 pr-4 relative">
                            <h3 className="mb-2"  >Create Post</h3>

                            <span className="absolute pl-4 pt-7 text-4xl flex items-center text-white" ><BiSolidMessageRoundedDots/></span>
                            <input className="bg-gray-900 w-[100%] pt-8 pb-8 pl-20 rounded-lg" type="text" placeholder="How are you feeling today?"/>
                            <div className="flex justify-end">
                                <button className="bg-sky-500 rounded text-white p-2 cursor-pointer w-20 mt-3"  onClick={()=>{setShowSignUpModal(!showSignUpModal)}}>Post</button>
                            </div>
                        </div>    
                    </div>
                    </div>
            </div>
            {
                showSignUpModal && <Modal onClose={()=>setShowSignUpModal(!showSignUpModal)}><SignUp onClose={function (): void {
                    throw new Error("Function not implemented.");
                } }/></Modal>
            }
            {
                showLoginModal && <Modal onClose={()=>setShowLoginModal(!showLoginModal)}><Login onClose={function (): void {
                    throw new Error("Function not implemented.");
                } }/></Modal>
            }
        </>
    )
}

export default CommentsPage;