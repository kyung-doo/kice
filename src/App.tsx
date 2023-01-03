import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import Login from './pages/Login';
import FileList from './FileList';
import Testpage from './pages/Testpage';


function App() {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Routes>
               <Route path="/file-list" element={<FileList />} />
               <Route path='/login' element={<Login />} />
               <Route path='/testpage' element={<Testpage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
