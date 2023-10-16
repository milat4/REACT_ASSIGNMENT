import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/index"



function Master(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' Component={Index} />
        </Routes>
        </BrowserRouter>
    )
}

export default Master