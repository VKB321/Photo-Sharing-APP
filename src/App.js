import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import LandingPage from './Landing/LandingPage';
import PostView from './PostView/PostView';
import Post from './Post/Post';
import Header from './Header/Header';
import Pagination from './Pagination';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/postview' element={<PostView/>}/>
      <Route path='/post' element={<Post/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
