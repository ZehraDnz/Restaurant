

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="relative bg-orange-400 rounded-full  flex items-center justify-center w-24 h-24 ">
        {/* Dönen Çatal & Bıçak */}
       
        <img src="/public/fork_knife.svg" alt="Fork & Knife" className="animate-spinForkKnife w-16 h-16 text-orange-500" />
       
      </div>
    </div>
  )
}

export default Loader