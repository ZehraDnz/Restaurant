import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../../redux/actions/restActions";



const Home2= () => {
    const {isLoading, error, restaurants}= useSelector(
        (store)=> store.restaurantReducers);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getRestaurants())

    },[])
  return (
    <div>
        <h1>Anasayfa</h1>
        <hr/>
        
      {isLoading ? (<h1>Yükleniyor...</h1>): 
      error ? (<p>Hata oluştu</p>):
    (restaurants.map((i)=><h1>{i.name}</h1>))}
    
    
    </div>
  )
}

export default Home2;
