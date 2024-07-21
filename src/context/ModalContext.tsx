import React, { createContext, FC,  ReactNode,  useContext,  useState } from "react";


interface ModalContextProps{
    showSignUpModal:boolean;
    setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
    showLoginModal: boolean;
}

const ModalContext = createContext<ModalContextProps |undefined>(undefined);

export const ModalProvider:FC<{children:ReactNode}> = ({children})=>{
    
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <ModalContext.Provider value={{showSignUpModal,  setShowSignUpModal,setShowLoginModal, showLoginModal}}>
            {children}
        </ModalContext.Provider>
    )
}



export const UseModalContext = ()=> {
    const contextModal = useContext(ModalContext);
    if(!contextModal)
        throw new Error('context model must be used within the provider')
        return contextModal;
}