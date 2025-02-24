import { ReactNode } from "react";
import { DiscountIcon } from "@shared/assets/icons/discount";
import { DeliveryIcon } from "@shared/assets/icons/delivery";
import { HandmadeIcon } from "@shared/assets/icons/handmade";
import { DigitalIcon } from "@shared/assets/icons/digital";


export const tagsMap: Record<string, ReactNode> = {
  '32% off': <DiscountIcon />,
  'Free delivery': <DeliveryIcon />,
  'Handmade': <HandmadeIcon />,
  'Digital': <DigitalIcon />,
  // можно добавлять по необходимости
}