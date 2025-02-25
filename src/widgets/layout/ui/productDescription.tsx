'use client'

import { Button } from "@shared/components/button/Button";
import { useState } from "react";

export const ExpandableDescription: React.FC<{ text: string }> = ({ text }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const hideDescription = () => setExpanded(!expanded)

  return (
    <div className="relative max-w-md">
      <div
        className={`text-[#545661] text-base overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          expanded ? "max-h-[1000px]" : "max-h-[6.5em]"
        }`}
        style={
          expanded
            ? {}
            : {
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.2) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.2) 100%)",
              }
        }
      >
        {text}
      </div>
      <div className="flex justify-center">
        <Button
          className="text-[#545661] text-base border-b border-gray-900 pt-2"
          onClick={hideDescription}
        >
          {expanded ? "Close" : "Read More"}
        </Button>
      </div>
    </div>
  );
};