import React from 'react';
import type { FC, ReactNode } from 'react';

type TagProps = {
  icon: ReactNode;
  text: string;
};

export const Tag: FC<TagProps> = ({ icon, text}) => {
  return (
    <div className='flex gap-1 items-center bg-[#EDEEF2] px-2 py-1 text-text-base text-small'>
      {icon}
      {text}
    </div>
  )
}