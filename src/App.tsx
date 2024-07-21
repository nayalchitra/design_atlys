
import { FC } from 'react'
import CommentsPage from './components/CommentsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';

const App:FC = ()=> {

  return (
    
      <div>
          <ModalProvider>
            <BrowserRouter>
                <Routes>
                  <Route path='/' Component={CommentsPage}/>
                </Routes>
            </BrowserRouter>
          </ModalProvider>
         
      </div>
    
  )
};

export default App
