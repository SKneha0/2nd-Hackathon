import React from 'react'
import Image from 'next/image'
import Shop from '@/src/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
import Chef1 from '@/src/Image/Chef1.jpg.png'
import Chef2 from '@/src/Image/jorina.jpg.png'
import Chef3 from '@/src/Image/Mohammad.jpg.png'
import Chef4 from '@/src/Image/Munna.jpg.png'
import Chef5 from '@/src/Image/Tahmina5.jpg.png'
import Chef6 from '@/src/Image/Bisnu.jip.png'
import Chef7 from '@/src/Image/Motin.jpg.png'
import Chef8 from '@/src/Image/Willam.jpg.png'
import Chef9 from '@/src/Image/Kets.jpg.png'
import Chef10 from '@/src/Image/Mahmud.jpg.png'
import Chef11 from '@/src/Image/Ataur.jpg.png'
import Chef12 from '@/src/Image/Monalisa.jpg.png'

function page() {
  return (
    <div>
         <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Our Chef</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>Chef</h2>
        </div>
      </div>
    </div>

      <div className="font-[sans-serif] bg-gray-50 p-4">
            <div className="max-w-5xl max-sm:max-w-sm mx-auto">
                
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-12">
                    <div className="bg-white py-4 px-2 shadow-md hover:scale-110 transition-all duration-500">
                        <Image
                         src={Chef1}
                         alt='img'
                         className="w-40 h-52   inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Tahmina Rumi</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <Image
                         src={Chef2}
                         alt='img'
                         className="w-40 h-52   inline-block" />
                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Jorina Begum</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                      <Image
                         src={Chef3}
                         alt='img'
                         className="w-40 h-52   inline-block" />

                           <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">M.Mohammad</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                    <Image
                         src={Chef4}
                         alt='img'
                         className="w-40 h-52   inline-block" />
                         <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Munna Kethy</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                        
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                    <Image
                         src={Chef5}
                         alt='img'
                         className="w-40 h-52   inline-block" />
                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Rumi Tahmina</h4>
                            <p className="text-gray-600 text-xs mt-1">SChef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                      < Image
                         src={Chef6}
                         alt='img'
                         className="w-40 h-52   inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Bisnu devgon</h4>
                            <p className="text-gray-600 text-xs "> Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                       <Image
                         src={Chef7}
                         alt='img'
                         className="w-40 h-52   inline-block" />
                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Motin Molladsf</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <Image
                         src={Chef8}
                         alt='img'
                         className="w-40 h-52   inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">William Rumi</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <Image
                         src={Chef9}
                         alt='img'
                         className="w-40 h-52   inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Kets william</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <Image
                         src={Chef10}
                         alt='img'
                         className="w-40 h-52   inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Mahmud kholil</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <Image
                         src={Chef11}
                         alt='img'
                         className="w-40 h-52   inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold"> Ataur Rahman</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
                    <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                        <Image
                         src={Chef12}
                         alt='img'
                         className="w-40 h-52   inline-block" />

                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">Monalisa holly</h4>
                            <p className="text-gray-600 text-xs mt-1">Chef</p>

                            
                        </div>
                    </div>
 
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
