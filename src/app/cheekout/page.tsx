import React from 'react'
import Image from 'next/image'
import Shop from '@/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
import Food from '@/Image/choess.1.png'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { HiArrowRight } from "react-icons/hi2";

function page() {
  return (
    <div className='bg-white'>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Cheekout page</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>cheekout</h2>
        </div>
      </div>
    </div>
    <div>
        <div className=' mt-20 mx-9 font-bold text-3xl'>
            <h1>Shipping Cart</h1>
        </div>
    <div className='sm:flex pt-0 flex-wrap '>
    <div >
    <div className=" mx-auto pb-4 w-48 sm:w-full sm:px-20 max-w-xl  font-[sans-serif]">
  
      <form className="mt-12 space-y-6">
        <div>
          <label className="text-gray-800 text-sm block mb-2">Your Name</label>
          <input type='text' placeholder='Name'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
          <label className='text-gray-800 text-sm block mb-2'>Email Address</label>
          <input type='email' placeholder='Email'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Company</label>
          <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">city</label>
          <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        
      <div>
          <label className="text-gray-800 text-sm block mb-2">Address-1</label>
          <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
            <label className='text-gray-800 text-sm block mb-2'> Billing Address</label>
            <div className='flex  gap-2  pl-3 py-2'>
            <input type="checkbox" name="" id="" className='w-5'  />
            <h1>same as shipping address</h1>
            </div>
            <div className='flex border-2 bg-orange-500 border-orange-500 mt-3 p-6 text-2xl'>
              <  SlArrowLeft className='pt-1 font-bold text-3xl' />
              Back to cart
            </div>
        </div>

        <button type='button'
          className="text-white bg-orange-600  hover:bg-orange-700 font-semibold rounded-md text-sm px-6 py-3 w-full">Send</button>
      </form>
    </div>
            </div>

            <div className=''>
    <div className="mx-auto pb-4 sm:px-20 w-48 sm:w-full max-w-xl font-[sans-serif]">
      
      <form className="mt-12 space-y-6">
        <div>
          <label className="text-gray-800 text-sm block mb-2">Last Name</label>
          <input type='text' placeholder='Name'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
          <label className='text-gray-800 text-sm block mb-2'>Phone number</label>
          <input type='email' placeholder='Email'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Country</label>
          <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Zip Code</label>
          <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        
      <div>
          <label className="text-gray-800 text-sm block mb-2">Address-2</label>
          <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4  border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
    <div className='flex border-2 bg-orange-500 border-orange-500 mt-3 p-6 text-2xl'>
              Proceed to shippinh
              <  SlArrowRight className=' font-bold text-4xl' />
            </div>
        <button type='button'
          className="text-white bg-orange-600 hover:bg-orange-700 font-semibold rounded-md text-sm px-6 py-3 w-full">Send</button>
      </form>
    </div>
            </div>

      <div className="my-6 mx-auto sm:p-14 sm:px-20  max-w-xl  bg-white font-[sans-serif]">
        <div className='py-5 sm:px-10 border-2 border-zinc-400 gap-5  '>
          <div className='py-4'>
          <div className='flex gap-3 py-4 border-b-2'>
            <div>
            <Image
            src={Food}
            alt=''
            className='ml-14 w-20 sm:ml-0' />
            </div>
            <div>
            <h1>Chicken Tikka Kabab</h1>
            <div>
              <h1>150 gm net</h1>
              <h2>50$</h2>
          </div>
          </div>
            </div>
          <div className='flex gap-3 py-4 border-b-2'>
            <div>
            <Image
            src={Food}
            alt=''
            className='ml-14 w-20 sm:ml-0' />
            </div>
            <div>
            <h1>Chicken Tikka Kabab</h1>
            <div>
              <h1>150 gm net</h1>
              <h2>50$</h2>
          </div>
          </div>
            </div>
          <div className='flex gap-3 py-4 border-b-2'>
            <div>
            <Image
            src={Food}
            alt=''
            className='ml-14 w-20 sm:ml-0' />
            </div>
            <div>
            <h1>Chicken Tikka Kabab</h1>
            <div>
              <h1>150 gm net</h1>
              <h2>50$</h2>
          </div>
          </div>
            </div>

          </div>
          <div className='m-7'>
            <div className='border-b-2'>
            <div className='text- '>
        <div className='flex gap-32 '>
          <h1 className=''>Sub-total</h1>
          <h2>130$</h2>
        </div>
      </div>
      <div>
        <div className='flex  sm:gap-32'>
          <h1 className=''>shipping </h1>
          <h2>Free</h2>
        </div>
      </div>
      <div>
        <div className='flex sm:gap-32'>
          <h1 className=''>Discount</h1>
          <h2>25%</h2>
        </div>
      </div>
      <div>
        <div className='flex sm:gap-[60%]'>
          <h1 className=''>Tax</h1>
          <h2>54.76$</h2>
        </div>
            </div>
      
      </div>
      <div className='flex gap-28 pt-3 text-lg'>
        <h1>Total</h1>
        <h2>432.65$</h2>
      </div>
          </div>
          <div className='flex w-48 sm:w-56 border-2 bg-orange-500 border-orange-500 mt-3 p-6 text-2xl'>
              Place an order
              <   HiArrowRight className=' font-bold text-4xl' />
            </div>
        </div>
    </div>
    
   
   
    </div>

    </div>
    </div>
  )
}

export default page
