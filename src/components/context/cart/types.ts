// export interface Product {
//   id: string;
//   title: string;
//   price: number;
//   discountedPrice: number;
//   description: number;
//   image: {
//     url: string;
//     alt: string;
//   };
// }

// export interface CartItem extends Product {
//   quantity: number;
// }

// export interface CartContextType {
//   cartItems: CartItem[];
//   isCartOpen: boolean;
//   toggleCart: () => void;
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   getCartItemCount: () => number;
//   getCartTotal: () => number;
//   clearCart: () => void;
// }
interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface ProductImage {
  url: string;
  alt: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: Review[];
}

// With default values implementation
const defaultProduct: Partial<Product> = {
  rating: 0,
  tags: [],
  reviews: [],
};

export type { Product, Review, ProductImage };
export { defaultProduct };