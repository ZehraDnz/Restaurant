import { FaPlus } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { createItem } from "../../redux/actions/basketActions";
import { updateItem } from "../../redux/actions/basketActions";

const Card = ({product}) => {
    const{cart}= useSelector((store)=>store.cartReducers)
    const dispatch=useDispatch();
      //Ekrana basılan ürün sepette var mı
    const found= cart?.find((cartItem)=>cartItem.id==product.id);
    const handleAdd = () => {
       
        //Eleman sepette varsa miktarını 1 arttır
        found ? dispatch(updateItem(found.id, found.amount + 1)):
         //Eleman sepette yoksa sepete ekle
        dispatch(createItem(product));

       
    
    };
  
    

    

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 
    rounded-lg hover:bg-amber-400 hover:scale-[1.02] cursor-pointer 
    transition duration-300">
        <div className="flex flex-col justify-between">
            <div>
                <h1 className="text-xl font-semibold">{product.title}</h1>
                <p className="text-gray-700 my-1">{product.desc}</p>
            </div>
            <p  className="text-lg font-semibold">{product.price} $ </p>
        </div>
        <div className="relative">
            <img src={product.photo} className="rounded-md object-cover size-full" alt="" />
        <button className="absolute end-2 bottom-2 bg-white rounded-full 
        hover:bg-red-600 size-8 grid place-items-center font-bold" onClick={handleAdd}>
           {found ? found.amount: <FaPlus/>} 
        </button>
        
        </div>
    </div>
  )
}

export default Card