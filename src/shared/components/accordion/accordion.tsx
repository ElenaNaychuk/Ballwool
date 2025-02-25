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

  const handleOpenDescription = () => setIsOpen(!isOpen)

  return (
    <div className="rounded-lg w-full min-h-[56px] pt-4 max-w-md">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={handleOpenDescription}
      >
        <span className="text-middle text-text-dark">{title}</span>
        {type === 'arrow'
          ? (<div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            <RightArrowIcon />
            </div>)
          : (<div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
            <AddPlusIcon />
            </div>)
        }
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{text}</div>}
    </div>
  );
};