import './App.css';
import Topbar from './Topbar/Topbar';
import Accepted from './Component/Accepted/Accepted';
import Header from './Header/Header/Header';
import {Routes,Route} from "react-router-dom"
import Flex from "./Flex/Flex"
function App() {
  return (
   <Routes>
    <Route path='/' element={<Flex/>}></Route>
    <Route path='/review' element={<Topbar/>}></Route>
    <Route path='/verified' element={<Accepted/>}></Route>
    <Route path='/rejected' element={<Header/>}></Route>
   </Routes>
  );
}

export default App;
