import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sobre from './pages/Sobre';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
function RoutesApp(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Sobre' element={<Sobre/>}/>
                <Route path='/Carousel' element={<Carousel/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;