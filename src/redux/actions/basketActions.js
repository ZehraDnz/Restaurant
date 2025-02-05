import ActionTypes from "../actionTypes";
import api from "../../api";





//Asenkron thunk aksiyonu
//Sepetteki ürünleri apiden alıp reducera haber ver

export const getBasket=()=>{
   return  async(dispatch)=>{
    dispatch({type:ActionTypes.CART_LOADING})
    api.get("/cart")
    .then((res)=>dispatch({type:ActionTypes.CART_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:ActionTypes.CART_ERROR,payload:err.message}))
};

}
// api ye yeni ürün ekledikten sonra reducera haber ver

export const createItem=(product)=> 
     async (dispatch)=>{
        //1 sepete eklenicek olan ürünün bilgilerini belirle 
        const newItem ={
            id:product.id,
            category:product.category,
            title:product.title,
            price:product.price,
            photo:product.photo,
            amount:1,
        };
         // 2 apia sepete eklemek için istek at
    api.post("/cart", newItem)
    //3 istek başarılı olursa reducera haber ver

    .then(()=> dispatch({type:ActionTypes.CREATE_ITEM ,payload:newItem}));
    };
  

export const updateItem =(id,newAmount)=>async (dispatch)=>{
    //api ye güncelleme isteği at
    api.patch(`/cart/${id}`, {amount:newAmount})
    //istek başarılı olursa reducera haber ver
    .then((res)=> dispatch({type:ActionTypes.UPDATE_ITEM, payload:res.data}))

};

// api deki ürünü sildikten sonra reducera haber ver
export const deleteItem=(id)=> async (dispatch)=>{
    api.delete(`/cart/${id}`)
    .then (()=>dispatch({type:ActionTypes.DELETE_ITEM, payload:id}))
}