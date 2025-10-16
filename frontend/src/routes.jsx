import { BrowserRouter, Routes, Route } from "react-router";

import Inicio from './pages/inicio';
import Destaques from './pages/destaques';
import Sobre from './pages/sobre';

export default function Navegacao(){
    return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={< Inicio />}/>
    <Route path="/destaques" element={< Destaques />}/>
    <Route path="/sobre" element={< Sobre />}/>
    </Routes>
    </BrowserRouter>
    );
}