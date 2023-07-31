import { User } from './User'
import { Cart } from './Cart'

export type Transaction = {
  user: User,
  cart: Cart,
  paymentMethod?: string,
  isPaid: boolean,
  paymentDate?: Date,
  isShipped: boolean,
  shippingDate?: Date,
  trackingNumber?: string,
  isDelivered: boolean,
  deliveryDate?: Date,
  transactionComplete: boolean,
};
