
import { cache } from "react";
import { getProduct } from "./getProduct";

export const getCachedProduct = cache(() => getProduct());

