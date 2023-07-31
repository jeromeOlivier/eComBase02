import { Item } from './Item'

export type Cart = {
  items?: Item[],
  subTotal?: number,
  shippingPrice?: number,
  taxPrice?: number,
  totalPrice?: number,
};
