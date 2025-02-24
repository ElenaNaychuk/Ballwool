'use client'

import Image from "next/image";
import { ProductItemDto } from "src/entities/product/model/types";
import { Button } from "@shared/components/button/Button";
import { LeftArrowIcon } from '@shared/assets/icons/leftArrow';
import { RightArrowIcon } from "@shared/assets/icons/rightArrow";
import image from '@shared/assets/icons/image-1.png'

export const Gallery = ({ product }: { product: ProductItemDto}) => {
  return(
    <div className="">
      <div className="flex items-center h-[680px] w-[807px]">
        <div className="flex justify-center max-h-[381px] relative">
          <div className="flex items-center h-full absolute left-3">
            <Button className="bg-[#FAFAFC] rounded-full w-10 h-10">
              <LeftArrowIcon />
            </Button>
          </div>
          <Image 
            src={image} 
            alt={product.title} 
            width={807}
            height={300}
            sizes="(max-width: 807px)"
          />
          <div className="flex items-center h-full absolute right-3">
            <Button className="bg-[#FAFAFC] rounded-full w-10 h-10">
              <RightArrowIcon />
            </Button>
          </div>

        </div>
      </div>
      {product.images.map(image => (
          <div
            key={image}
            className="h-[4px] bg-text-title w-[120px]"
          />
        ))}
    </div>
  )
}