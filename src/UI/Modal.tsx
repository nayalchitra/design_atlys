import React, { FC } from "react";
import { createPortal } from "react-dom";

interface ModalProps{
    onClose:()=>void,
  
    children:React.ReactNode
}

const Modal:FC<ModalProps> = ({onClose, children})=>{
    return(
        <>
        {
            createPortal(
                
                    <>
                        <div className="z-10 top-0 left-0 min-h-full min-w-full bg-black bg-opacity-50 fixed">
                         
                            <button className="rounded-2xl w-7 h-7 bg-black text-white absolute top-44 right-[35rem]
                                " onClick={onClose}>X</button>
                                {React.cloneElement(children as React.ReactElement,{onClose})}
                            </div>
                        
                    </>, document.getElementById('root-modal') as HTMLElement
                
            )
        }
        </>
    )
}

export default Modal;