import React from 'react'
import Image from 'next/image'
import Shop from '@/src/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
import Food from '@/src/Image/food-category-1.jpg.png'
import { AiOutlineClose } from "react-icons/ai";
import { TbCheckbox } from "react-icons/tb";
function page() {
  return (
    <div className='bg-white'>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Shopping Cart</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-2 text-3xl' />
          </div>
            <h2 className='text-orange-500'>shopping cart</h2>
        </div>
      </div>
    </div>
    <div className="overflow-x-auto font-[sans-serif] sm:w-[50%] sm:ml-[25%] ">
      <table className="min-w-full gap-10 bg-white">
        <thead className="whitespace-nowrap bg-orange-300 text-orange-600 rounded">
          <tr>
            <th className="p-4 text-left text-lg font-semibold ">
              Products
            </th>
            <th className="p-4 text-left text-lg font-semibold ">
              Price
            </th>
            <th className="p-4 text-left text-lg font-semibold ">
              Quantity
            </th>
            <th className="p-4 text-left text-lg font-semibold ">
              Total
            </th>
            <th className="p-4 text-left text-lg font-semibold ">
              Remove
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-black">
              <div className="flex items-center cursor-pointer w-max">
                <Image
                 src={Food}
                 alt=""
                  className="w-9 h-9 rounded-md shrink-0" />
                <div className="ml-4">
                  <p className="text-sm text-black">Burger</p>
                
                </div>
              </div>
            </td>
            <td className="p-4 text-sm text-black">
              $35.00
            </td>
            <td className="p-4 text-sm text-black">
              
      <button type="button"
            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
        </svg>
        <span className="mx-2.5">1</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
        </svg>
    </button>

            </td>
            <td className="p-4 text-sm text-black">
              Intertico

            </td>
            <td className="p-4">
              <div className=" text-orange-600 text-2xl font-semibold  hover:text-black">
              < AiOutlineClose />
              </div>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-black">
              <div className="flex items-center cursor-pointer w-max">
                <Image 
                src={Food}
                alt=""
                className="w-9 h-9 rounded-md shrink-0" />
                <div className="ml-4">
                  <p className="text-sm text-black">Frech</p>

                </div>
              </div>
            </td>
            <td className="p-4 text-sm text-black">
              $25.00
            </td>
            <td className="p-4 text-sm text-black">
             
      <button type="button"
            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
        </svg>
        <span className="mx-2.5">1</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
        </svg>
    </button>
            </td>
            <td className="p-4 text-sm text-black">
              RoodGee
            </td>
            <td className="p-4">
              <div className="  text-orange-600 text-2xl font-semibold  hover:text-black">
              < AiOutlineClose />
              </div>
              
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-black">
              <div className="flex items-center cursor-pointer w-max">
                <Image
                 src={Food}
                 alt=""
                  className="w-9 h-9 rounded-md shrink-0" />
                <div className="ml-4">
                  <p className="text-sm text-black">Pizza</p>

                </div>
              </div>
            </td>
            <td className="p-4 text-sm text-black">
              $15.00
            </td>
            <td className="p-4 text-sm text-black">
             
      <button type="button"
            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
        </svg>
        <span className="mx-2.5">1</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
        </svg>
    </button>
            </td>
            <td className="p-4 text-sm text-black">
              Agoda
            </td>
            <td className="p-4">
                <div className="  text-orange-600 text-2xl font-semibold  hover:text-black ">
                < AiOutlineClose /></div>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-black">
              <div className="flex items-center cursor-pointer w-max">
                <Image
                 src={Food}
                 alt=""
                  className="w-9 h-9 rounded-md shrink-0" />
                <div className="ml-4">
                  <p className="text-sm text-black">Chocolate Muffin</p>
                </div>
              </div>
            </td>
            <td className="p-4 text-sm text-black">
              $45.00
            </td>
            <td className="p-4 text-sm text-black">
             
      <button type="button"
            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
        </svg>
        <span className="mx-2.5">1</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
        </svg>
    </button>
            </td>
            <td className="p-4 text-sm text-black">
              Agoda

            </td>
            <td className="p-4">
                <div className=" text-orange-600 text-2xl font-semibold  hover:text-black">
                
                < AiOutlineClose />
                    </div>
              
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-4 text-sm text-black">
              <div className="flex items-center cursor-pointer w-max">
                <Image
                 src={Food}
                 alt=""
                  className="w-9 h-9 rounded-md shrink-0" />
                <div className="ml-4">
                  <p className="text-sm text-black">Cheese Butter</p>
                </div>
              </div>
            </td>
            <td className="p-4 text-sm text-black">
              $15.00
            </td>
            <td className="p-4 text-sm text-black">
           
      <button type="button"
            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
        </svg>
        <span className="mx-2.5">1</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
        </svg>
    </button>
            </td>
            <td className="p-4 text-sm text-black">
              Agoda
            </td>
            <td className="p-4">
                <div className= " text-orange-600 text-2xl font-semibold hover:text-black">
                <button>< AiOutlineClose /></button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      
      <div className='sm:flex flex-wrap gap-0 '>

 <div
      className="  w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="py-5">
        <h3 className="text-lg sm:text-2xl text-black font-semibold">Coupon Code</h3>
        <div className='border-2 border-zinc-400'>
      <p className="mt-2 text-sm p-5 text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu, at fermentum dui. Maecenas</p>
          <div className='flex p-5'>
          <input type="text" name="" id="" placeholder='Enter Here Code' className='border-2 border-zinc-400' />
          <button type="submit" className='bg-orange-500  py-3 px-5'>Apply</button>
        
          </div>
        </div>
      </div> 
    </div>
      
 <div
      className="  w-full max-w-sm rounded-lg font-[sans-serif]  overflow-hidden mx-auto mt-4">
      <div className="py-5 ">
        <h3 className="text-lg sm:text-2xl text-black font-semibold">Total Bill</h3>
        <div className='border-2  border-zinc-400'>
           <div className='flex sm:gap-48 m-5 gap-20 '>
           <h1>Cart Subttal</h1>
           <p>$120.00</p>
           </div>
           <div className='flex border-b-2 border-zinc-400 sm:gap-48 gap-20 m-5 '>
           <p className=" text-sm  text-gray-500 leading-relaxed">Shipping Charge</p>
           <p>$00.00</p>
           </div>
           <div className='flex sm:gap-48 gap-20 m-5 '>
            <h1>Total Amount</h1>
            <p>$205.00</p>
            </div> 
               </div>
            <div className='font-medium  sm:w-80'>
          <button type="submit" className='bg-orange-500  flex  mt-4 p-7 sm:ml-8 '>Proceed to Checkput
            <TbCheckbox className='text-2xl'/>
          </button>
          </div>       
      </div> 
    </div>
      
    
    
      </div>
      

   </div>
  )
}

export default page
