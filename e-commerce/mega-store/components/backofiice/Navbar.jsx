import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between text-slate-500 ml-60  bg-slate-900 h-16   fixed top-0 w-full pr-[20rem]'>
        {/* icon */}
        <button className=''>
            <AlignJustify/>
        </button>
        {/* 3icon */}
        <div className="flex space-x-3  text-green-600 py-2">
            <button><Sun/></button>
            
<button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-green-600  rounded-lg  focus:outline-none focus:ring-blue-300   ">
<Bell/>
<span class="sr-only">Notifications</span>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-1 end-6">20</div>
</button>

   
 <button className="">
   <Image src='/profile.jpg' width={200} height={200} className="rounded-full w-8 h-8"/>
 </button>
        </div>
    </div>
  )
}
