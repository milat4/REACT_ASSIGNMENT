import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Index from "./pages/index"



function Master(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' Component={Index} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Master