
import {products} from '@/data/shopdata'
import Link from 'next/link'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io5'
import Image from 'next/image'
import Desc from './details';
import { PiLineVerticalThin } from 'react-icons/pi'
import Benner from '../benner'
export default async function page({

    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const product = products.filter((item)=>item.slug === slug)[0]
    
    if(product.slug === slug){
      return (
        <div>
        <Benner />
           <div className="bg-white container mx-auto p-4">
          <div className="flex flex-col lg:flex-row">
          
            <div className="flex  items-center justify-between lg:items-start lg:w-1/2">
              <div className="flex flex-col gap-5 w-[10%] ml-10 ">
{product && product.thumbnails && product.thumbnails.map((thumbnail, index) => (
  <Image key={index} src={thumbnail} alt="thumbnail" />
))}

              </div>
              <Image
src={product.Image}
                alt={product.title}
                className="w-[60%] mr-20 h-[80%] mb-4 rounded"
              />
            </div>
            <div className="lg:w-1/2 mt-20 lg:pl-8">
              <h1 className="sm:text-4xl text-2xl font-bold mb-2">
                {product.title}
              </h1>
              <p className="text-gray-800 mb-4 sm:pr-32">{product.desc}</p>
              <div className="text-3xl text-zinc-800  mb-4">
                Rs. {product.price.toLocaleString()}
              </div>
              <div className="sm:flex  items-center sm:mb-4">
                <span className="text-yellow-500 text-2xl">⭐⭐⭐⭐
                   {/* <span className="ml-2 text-gray-300 items-center flex">
                  <PiLineVerticalThin className="text-gray-300 text-4xl" />{" "}
                  {product.rating}  Rating
                </span> */}
                </span>
                <div className='flex items-end'>
                <span className="ml-2 text-zinc-800 items-center flex">
                  <PiLineVerticalThin className="text-gray-300 text-4xl" />{" "}
                  {product.rating}  Rating
                </span>
                <span className="ml-2 text-zinc-800 items-center flex">
                  <PiLineVerticalThin className="text-zinc-800 text-4xl" />{" "}
                  {product.review}  Reviews
                </span>
                </div>
              </div>
             
              
            
              <div className="mb-4 flex items-center gap-10">
                <h1 className=" border py-3 w-24 flex justify-around  items-center border-gray-300 rounded-md ">
                  - <span className="">{product.quantity}</span> +
                </h1>
    
                <Link href="/carts">
                  {" "}
                  <button className="bg-orange-500 hover:bg-orange-700 text-black py-3 px-12 rounded-md  border-black">
                    Add to Cart
                  </button>
                </Link>
              </div>
              <hr className="my-10" />
              <div className="mt-4">
                <div className="text-gray-400 mt-2">
                  Category: <span className="pl-12 "> {product.category}</span>
                </div>
                <div className="text-gray-400 mt-2">
                  Tags: <span className="pl-20 "> {product.tags.join(", ")}</span>
                </div>
              </div>
              <div className=" flex space-x-4">
                <h1 className="text-gray-400 mt-2">Share : </h1>
                <button className="pl-14">
                  <FaFacebook />
                </button>
                <button className="">
                  <FaLinkedin />
                </button>
                <button className="">
                  <IoLogoTwitter />
                </button>
              </div>
            </div>
          </div>
          <hr className="my-10" />
          <Desc />
        </div>
        </div>
//         <div className="bg-white container mx-auto p-4">
//         <Benner />
//           <div className="flex flex-col lg:flex-row">
          
//             <div className="flex  items-center justify-between lg:items-start lg:w-1/2">
//               <div className="flex flex-col gap-5 w-[10%] ml-10 ">
// {product && product.thumbnails && product.thumbnails.map((thumbnail, index) => (
//   <Image key={index} src={thumbnail} alt="thumbnail" />
// ))}

//               </div>
//               <Image
// src={product.Image}
//                 alt={product.title}
//                 className="w-[60%] mr-20 h-[80%] mb-4 rounded"
//               />
//             </div>
//             <div className="lg:w-1/2 mt-20 lg:pl-8">
//               <h1 className="sm:text-4xl text-2xl font-bold mb-2">
//                 {product.title}
//               </h1>
//               <p className="text-gray-800 mb-4 pr-32">{product.desc}</p>
//               <div className="text-3xl text-zinc-800  mb-4">
//                 Rs. {product.price.toLocaleString()}
//               </div>
//               <div className="flex items-center mb-4">
//                 <span className="text-yellow-500 text-2xl">⭐⭐⭐⭐
//                    {/* <span className="ml-2 text-gray-300 items-center flex">
//                   <PiLineVerticalThin className="text-gray-300 text-4xl" />{" "}
//                   {product.rating}  Rating
//                 </span> */}
//                 </span>
//                 <span className="ml-2 text-zinc-800 items-center flex">
//                   <PiLineVerticalThin className="text-gray-300 text-4xl" />{" "}
//                   {product.rating}  Rating
//                 </span>
//                 <span className="ml-2 text-zinc-800 items-center flex">
//                   <PiLineVerticalThin className="text-zinc-800 text-4xl" />{" "}
//                   {product.review}  Reviews
//                 </span>
//               </div>
             
              
            
//               <div className="mb-4 flex items-center gap-10">
//                 <h1 className=" border py-3 w-24 flex justify-around  items-center border-gray-300 rounded-md ">
//                   - <span className="">{product.quantity}</span> +
//                 </h1>
    
//                 <Link href="/carts">
//                   {" "}
//                   <button className="bg-white text-black py-3 px-12 rounded-md border border-black">
//                     Add to Cart
//                   </button>
//                 </Link>
//               </div>
//               <hr className="my-10" />
//               <div className="mt-4">
//                 <div className="text-gray-400 mt-2">
//                   Category: <span className="pl-12 "> {product.category}</span>
//                 </div>
//                 <div className="text-gray-400 mt-2">
//                   Tags: <span className="pl-20 "> {product.tags.join(", ")}</span>
//                 </div>
//               </div>
//               <div className=" flex space-x-4">
//                 <h1 className="text-gray-400 mt-2">Share : </h1>
//                 <button className="pl-14">
//                   <FaFacebook />
//                 </button>
//                 <button className="">
//                   <FaLinkedin />
//                 </button>
//                 <button className="">
//                   <IoLogoTwitter />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <hr className="my-10" />
//           <Desc />
//         </div>
     )}
    else{
        return <div className='text-5xl text-white'>Page Not Found</div>
    }
  }