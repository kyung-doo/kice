import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import Login from './pages/Login';
import FileList from './FileList';


function App() {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Routes>
               <Route path="/file-list" element={<FileList />} />
               <Route path='/login' element={<Login />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
