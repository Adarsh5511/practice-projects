// import React from 'react'
import "./pass.css"
const Passwordgen = () => {
  return (
     <div className="w-screen h-[400px] flex  items-center justify-center ">
        <div className='clr min-w-[800px] h-[150px] border border-white text-white flex flex-col gap-y-9 '>
        <div className="mt-4 flex justify-center">
            Password Generator
        </div>
        <div>
          <input type="text"
          placeholder='Password'
           />
          <div>copy</div>
        </div>
        <div>
         
        </div>
      
    </div>
     </div>
    
    
  )
}

export default Passwordgen
