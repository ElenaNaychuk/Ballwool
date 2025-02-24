'use client'

import { useState } from "react";
import { RightArrowIcon } from "@shared/assets/icons/rightArrow";
import { AddPlusIcon } from "@shared/assets/icons/addPlus";

interface AccordionProps {
  title: string
  text: string
  type?: string
}

export const Accordion: React.FC<AccordionProps> = ({ title, text, type = 'arrow' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg w-full min-h-[56px] pt-4 max-w-md">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="tetx-sm text-text-dark font-medium">{title}</span>
        {type === 'arrow'
          ? <RightArrowIcon  />
          : <AddPlusIcon />
        }
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{text}</div>}
    </div>
  );
};