import { Link } from "react-router-dom"
import { FaStar ,FaClock} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Card = ({restaurant}) => {
  return (
    <Link to ={`/restaurant/${restaurant.id}`} className="relative shadow 
    rounded-lg overflow-hidden hover: bg-gray-100 hover:shadow-lg cursor-pointer transition">
        <span className="bg-amber-600 p-1 px-3 text-sm absolute end-1 top-2 rounded md
        text-white">{restaurant.distance} km </span>
        <img src={restaurant.photo} className= " w-full h-full object-cover max-h-[250px]" alt="" />
        <div className="p-3" >
            <div className="flex justify-between items-center ">
                <h3 className="text-2xlmd:text-xl font-semibold">{restaurant.name}</h3>
                <p className="flex items-center gap-2 text-orange-500"> 
                    <FaStar />
                    {restaurant.rating}
                </p>
            </div>
            <p className="text-sm my-3 text-gray-500" > Min {restaurant.minPrice} £ </p>
<div className="flex gap-4 justify-between items-center">
  <p className="flex gap-2 items-center font-semiboold"> 
    <FaClock className="text-red-500" />
    <span className="text-gray-600">{restaurant.estimatedDelivery} minute </span>
  </p>
  {restaurant.isDeliveryFree &&( <p className="flex gap-2 items-center font-semiboold"> 
    <MdDeliveryDining className="text-red-500" />
    <span> Free </span>
  </p>)}
 
</div>
        </div>
    </Link>
  
  )
}

export default Card