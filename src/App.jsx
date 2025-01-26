

import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Passwordgen from './components/Passwordgen'

function App() {
  const[length,setlength]=useState(8);
  const [numberAllowed,setnumberallowed]=useState(false);
  const [charallowed,setchar]=useState(false)
 const [Password,setpassword]=useState("");

  const gentpas=useCallback(()=>{
        let pas=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str+="0123456789"
        if(charallowed) str+="!@#$%^&*("

        for(let i=1;i<length;i++)
        {
              const char= Math.floor(Math.random()*str.length+1)
              pas+=str.charAt(char)


        }

        setpassword(pas)
  },[length,numberAllowed,charallowed])


  const copypasstoclipb=()=>{
    window.navigator.clipboard.writeText(Password)
  }

  useEffect(()=>{
         gentpas();
  },[length,numberAllowed,charallowed])

  return (
     <div className='w-screen h-[200px] flex justify-center items-center'>
         <div className=" max-w-[600px] shadow-md  rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
       <input 
       type="text" 
        value={Password}
        className='outline-none bg-gray-100 w-full py-1 px-3'
        placeholder='password'
        readOnly

       />
       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' onClick={copypasstoclipb}> copy</button>
       

      </div>

      <div className=' flex text text-sm gap-x-2'>
           <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length} 
            className='cursor-pointer'
            onChange={(e)=>setlength(e.target.value)}/>
            
            <label htmlFor="length">Length:{length}</label>

           </div>

           <div className='flex items-center gap-x-1'>
           <input type="checkbox" 
           checked={numberAllowed}
           onChange={()=>{
            setnumberallowed((prev)=>!prev)
           }}/>
            <label htmlFor="number">Numbers</label>

           </div>
           <div className='flex items-center gap-x-1'>
           <input type="checkbox" 
           checked={charallowed}
           onChange={()=>{
            setchar((prev)=>!prev)
           }}/>
            <label htmlFor="character">Characters</label>

           </div>

      </div>
</div>
     </div>
  )
}

export default App
