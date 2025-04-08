import React from "react";
import { useParams } from "react-router-dom";

import BackButton from "./BackButton";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import ProductReviews from "./ProductReviews";
import { useCart } from "../context/cart";

interface Product {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  reviews: {
    id: string;
    username: string;
    rating: number;
    description: string;
  }[];
  tags: string[];
  description: string;
}

interface ProductPageProps {
  productData: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ productData }) => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-20">Product not found.</div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <section className="container mt-[90px] mx-auto px-4 py-16 md:py-24">
      <BackButton />

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        <ProductImage url={product.image.url} alt={product.image.alt} />

        <ProductDetails
          title={product.title}
          description={product.description}
          price={product.price}
          discountedPrice={product.discountedPrice}
          rating={product.rating}
          reviewsCount={product.reviews.length}
          tags={product.tags}
          onAddToCart={handleAddToCart}
        />
      </div>

      <ProductReviews reviews={product.reviews} />
    </section>
  );
};

export default ProductPage;
