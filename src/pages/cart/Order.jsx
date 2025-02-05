

const Order = ({cart}) => {
  // sepettei toplam ürün adedi
   const totalAmount= cart.reduce((total,i)=> total+ i.amount,0)
   //toplam fiyat
   const totalPrice= cart.reduce((total,i)=> total+ i.amount*i.price,0).toFixed(2)
  return (
    <div className="p-5 rounded-md border h-fit">
      <h2 className="font-semibold text-xl">Order details</h2>
      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Product quantity: </span>
        <span className="text-lg font-bold  text-orange-500">{totalAmount}</span>
      </p>
      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Total price:</span>
        <span className="text-lg font-bold  text-orange-500">{totalPrice} $</span>
      </p>
    </div>
  )
}

export default Order