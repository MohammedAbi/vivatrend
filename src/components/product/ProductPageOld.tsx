// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { FaStar, FaRegStar, FaArrowLeft } from "react-icons/fa";
// import { useCart } from "./context/CartContext";

// interface Product {
//   id: string;
//   title: string;
//   price: number;
//   discountedPrice: number;
//   image: {
//     url: string;
//     alt: string;
//   };
//   rating: number;
//   reviews: {
//     id: string;
//     username: string;
//     rating: number;
//     description: string;
//   }[];
//   tags: string[];
//   description: string;
// }

// interface ProductPageProps {
//   productData: Product[];
// }

// const ProductPage: React.FC<ProductPageProps> = ({ productData }) => {
//   const { id } = useParams();
//   const { addToCart } = useCart();

//   const product = productData.find((p) => p.id === id);

//   if (!product) {
//     return (
//       <div className="text-center text-red-500 mt-20">Product not found.</div>
//     );
//   }

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   return (
//     <section className="container mt-[90px] mx-auto px-4 py-16 md:py-24">
//       {/* Back to Products Button (Top Left) */}
//       <div className="mb-8">
//         <Link
//           to="/products"
//           className="inline-flex items-centertransition-colors btn btn-sm hover:btn-primary"
//         >
//           <FaArrowLeft className="mr-2" />
//           Continue Shopping
//         </Link>
//       </div>

//       <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
//         {/* Product Image */}
//         <div className="flex-1 md:max-w-lg mx-auto mb-8 md:mb-0">
//           <img
//             src={product.image.url}
//             alt={product.image.alt}
//             className="w-full h-auto object-cover rounded-lg shadow-xl"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 space-y-6">
//           <h2 className="text-3xl font-bold text-white">{product.title}</h2>
//           <p className="text-white text-lg">{product.description}</p>

//           {/* Price */}
//           <div className="flex items-center gap-4 mb-6">
//             <span className="text-2xl font-bold text-white">
//               ${product.discountedPrice.toFixed(2)}
//             </span>
//             {product.discountedPrice < product.price && (
//               <span className="text-lg text-white line-through">
//                 ${product.price.toFixed(2)}
//               </span>
//             )}
//           </div>

//           {/* Rating */}
//           <div className="flex items-center mb-4">
//             {Array.from({ length: 5 }, (_, i) =>
//               i < product.rating ? (
//                 <FaStar key={i} className="text-yellow-400" />
//               ) : (
//                 <FaRegStar key={i} className="text-white" />
//               )
//             )}
//             <span className="ml-2 text-sm text-white">
//               ({product.reviews.length} reviews)
//             </span>
//           </div>

//           {/* Tags */}
//           <div className="text-sm text-white mb-6">
//             <strong>Tags:</strong> {product.tags.join(", ")}
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCart}
//             className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded w-full transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-16">
//         <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews</h3>
//         {product.reviews.length > 0 ? (
//           product.reviews.map((review) => (
//             <div key={review.id} className="mb-6 border-b border-gray-700 pb-6">
//               <p className="font-semibold text-lg text-white">
//                 {review.username}
//               </p>
//               <div className="flex items-center text-yellow-400 mb-2">
//                 {Array.from({ length: review.rating }, (_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>
//               <p className="text-white">{review.description}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-white">No reviews yet.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductPage;
