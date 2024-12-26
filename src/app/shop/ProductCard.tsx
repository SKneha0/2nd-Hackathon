import Image, { StaticImageData } from 'next/image'
import React from 'react';


interface productType {
  title: string;
  Image: StaticImageData;
  tag?: string;
  price: number;
  discountPrice: number;
}
const ProductCard = ({product}: {product: productType}) => {
  return (
        <div>
            <div className="relative">
              <Image
                src={product.Image}
                alt={product.title}
                className="h-[267px] w-[312px] object-cover"
              />
              {product.tag && <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.tag}
              </span>}
              
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400 font-bold">${product.discountPrice}</span>
                <span className="text-gray-500 line-through">${product.price}</span>
              </div>
            </div>
          </div>
      )
}

export default ProductCard