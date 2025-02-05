import { Link } from "react-router-dom"
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openLogin } from "../redux/actions/loginActions";
import LoginForm from "../pages/login/LoginForm";

const Header = () => {
  const dispatch=useDispatch();
  const {restaurants}= useSelector((store)=>store.restaurantReducers);
  const {cart}= useSelector((store)=>store.cartReducers);
  const totalAmount= cart.reduce((total,i)=> total+ i.amount,0)
  

  return (
   <header className="shadow">
    

    <div className="flex justify-between items-center container  ">
       <Link to="/" className="text-orange-500 font-[900] text-3xl font-serif lg: text-4xl " > QuickBites</Link>
       <div className="flex gap-5">

         <Link  to="/" className=" white-space-normal md: white-space-nowrap  flex items-center gap-1 hover:underline cursor-pointer">
      There are {restaurants.length}<IoRestaurant className="text-orange-500"/> <span className="max-lg:hidden">Restaurants near you</span></Link>
      <button onClick={() => dispatch(openLogin())} className="button">Login</button>
      <button className="button">Sign up</button>
      <Link to="/cart" className="flex items-center gap-2 py-2 px-3 
      hover:bg-amber-300 transition rounded-full"> 
      <BsBasket />
      <span>{totalAmount}</span>
      </Link>
       </div>
    </div>
    <loginForm/>
   </header>
  )
}

export default Header