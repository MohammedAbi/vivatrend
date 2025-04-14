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
