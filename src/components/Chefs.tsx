import React from 'react'
import Image from 'next/image'
import Chef1  from "@/Image/Chef1.jpg.png"
import Chef2 from '@/Image/Chef2.jpg.png'
import Chef3 from '@/Image/Chef3.png'
import Chef4 from '@/Image/Chef4.png'
import Link from "next/link";
function Chefs() {
  return (
    <div className=" ">
        <div className='text-center   pt-24'>
      <h1 className='text-2xl font-bold  text-orange-500  ' > Chefs</h1>
      <h1 className='sm:text-4xl  text-3xl lg:5xl mt-2  text-gray-100 font-bold'><span  className='text-orange-500'>Me</span>et Our Chefs</h1>
        </div>
        <div className='sm:flex   sm:ml-16 m-10  pt-11 sm:gap-0  gap-7'>
           < Image 
           src={Chef1} 
           alt="img" className='m-5 sm-border-0   border-4 rounded-lg  border-orange-600'/>
           < Image 
           src={Chef2} 
           alt="img" className='m-5 sm-border-0   border-4 rounded-lg  border-orange-600'/>
           < Image 
           src={Chef3} 
           alt="img" className='m-5 sm-border-0   border-4 rounded-lg  border-orange-600'/>
           < Image 
           src={Chef4} 
           alt="img" className='m-5 sm-border-0   border-4 rounded-lg  border-orange-600'/>
        </div>
        <Link href="/ourchef">
        <button className= ' border-2 w-28 rounded-full mt-6 p-2 ml-24  text-gray-100 sm:ml-[47%] border-orange-500'>SeeMore</button>
        </Link>
    </div>
  )
}

export default Chefs
