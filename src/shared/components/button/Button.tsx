'use client'

import React from 'react';
import type { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode | string;
  className?: string;
  onClick?: () => void
  // тут будут все остальные необходимые пропсы
};

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button 
      className={`${className} flex justify-center items-center text-lg font-medium hover:cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}