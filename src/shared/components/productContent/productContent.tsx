'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs, ExpandableDescription } from "@widgets/layout";
import { Rating } from "@shared/components/rating/rating";
import { Tag } from "@shared/components/tag/tag";
import { Accordion } from "@shared/components/accordion/accordion";
import { Divider } from "@shared/components/divider/divider";
import { Button } from "@shared/components/button/Button";
import { Loader } from "@shared/components/loader/loader";
import { Gallery } from "@shared/components/gallery/gallery";

import { tagsMap } from '@shared/lib/tagsMap';

import { FlagIcon } from "@shared/assets/icons/flag";
import RectangleIcon from "@shared/assets/icons/Rectangle 62.png";

import { ProductItemDto } from "src/entities/product/model/types";
import { accordionInfoData } from "src/entities/product/api/__mock__/accordionInfoData";

export function ProductContent({ product }: { product: ProductItemDto}) {
  const [loading, setLoading] = useState<boolean>(true)

  // иммитация ожидания загрузки данных на клиенте
  useEffect(()=>{
    const loading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false)
    }
    loading()
  }, [])

  if (loading) {
    return <div className="w-full mt-10">
      <Loader />
    </div>
  }
 
  return (
    <div className="flex gap-4">
    <Gallery  product={product}/>

    <div className="flex flex-col gap-8 w-[509px] pt-5 pr-8 pl-12">
      <div className="flex flex-col gap-4 mt-2">
        <Breadcrumbs />
        <section className="flex flex-col gap-6">

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-text-base">{product?.title}</h1>
              <Rating rating={product.rating} reviews={product.reviews} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="text-2xl text-text-base">{`$ ${product.price}`}</div>
              <div className="text-base line-through text-extra-light">{`$ ${product.oldPrice}`}</div>
            </div>
            <ul className="flex items-center gap-2">
              {product.tags.map((tag: string) => (
                <li key={tag}>
                  <Tag
                    icon={tagsMap[tag]} 
                    text={tag} 
                  />                  
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-col gap-1">
              {(product.productDescription ?? []).map((element, index) => (
                <li key={element.id}>
                  <Accordion title={element.title} text={element.description} type="arrow" key={element.title} />
                  {index !== product.productDescription?.length - 1 && <Divider />}                
                </li>
              ))}
          </ul>
        </section>
        <section className="flex flex-col gap-2">
          <Button
            className="w-full rounded-full h-[56px] bg-text-base text-white"
          >
            Buy now
          </Button>
          <Button
            className="w-full rounded-full h-[56px] border text-text-base"
            >
            Add to Cart
          </Button>
          <Button
            className="w-full rounded-full h-[56px] text-text-base"
          >
            Add to Wishlist
          </Button>
        </section>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <ExpandableDescription  text={product?.description ?? '-'}/>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 text-sm text-text-dark font-medium">
                <FlagIcon />
                <p>Report This Item</p>
              </div>
              <p className="text-sm text-[#9EA0AB]">June 16, 2024</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image
                alt="Nike"
                src={RectangleIcon}
              />
              <Link 
                href={product?.seller?.profileUrl ?? '/'} 
                className="text-lg font-medium text-text-dark"
              >
                {product?.seller?.name ?? '-'}
              </Link>
            </div>
            <div className="flex gap-2">
              <Button
                className="border border-text-dark rounded-full h-8 px-4 py-2"
              >
                Message
              </Button>
              <Button
                className="rounded-full h-8 px-4 py-2 bg-text-base text-white"
              >
                Follow
              </Button>
            </div>
          </div>
          <ul className="mb-10">
            {accordionInfoData.map((item, index) => (
              <li key={item.title}>
                <Accordion
                  title={item.title}
                  text={item.text}
                  type="plus"
                />
                {index !== accordionInfoData.length - 1 && <Divider />} 
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}