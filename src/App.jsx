import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Restaurant from "./pages/restaurant"
import Cart from "./pages/cart"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getRestaurants } from "./redux/actions/restActions"
import { getBasket } from "./redux/actions/basketActions"
import LoginForm from "./pages/login/LoginForm"
import Login from "./pages/login/login"

const App = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getRestaurants());
    dispatch(getBasket());
  },[])
  return (
   <BrowserRouter>
  

   <div className="min-h-screen flex flex-col">
 
    <LoginForm/>
   <Header/>
   <div className="flex-1">
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/restaurant/:id" element={<Restaurant/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
   
   </Routes>
   </div>

   <Footer/>
   </div>
   </BrowserRouter>
  )
}

export default App