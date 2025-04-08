export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

export interface OrderCompleteData {
  orderNumber: string;
  orderDate: string;
  total: number;
  estimatedDelivery: string;
}
