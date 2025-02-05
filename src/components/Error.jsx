

const Error = ({info,retry}) => {
  return (
    <div>
        <div className="relative w-full h-full" >

             <img className ="mx-auto  lg:size-2/4 "src="/public/err.jpg" alt="" />
             <p className="whitespace-nowrap absolute text-neutral-950 text-lg font-semibold bottom-8 left-1/2 transform -translate-x-1/2" >

             We can't find page you're looking for <hr/>
             {info}
             </p>
           
        </div>
       {retry && (<div className="flex justify-center my-10">
        <button className="border  py-2 px-4 rounded-md hover:bg-amber-300  shadow"
        onClick={retry}> 
            Retry</button>
       </div>
        
       )}
       
    </div>
  )
}

export default Error