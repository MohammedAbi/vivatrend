// import React, { useState, useEffect } from "react";
// import { FiSearch } from "react-icons/fi";
// import Img1 from "../assets/images/Background.jpg";
// import Img2 from "../assets/images/Background2.jpg";
// import Img3 from "../assets/images/Background3.jpg";
// import SidebarFilter from "./SidebarFilter";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// type Review = {
//   id: string;
//   username: string;
//   rating: number;
//   description: string;
// };

// export const productsData: Product[] = [
//   {
//     id: "1",
//     title: "Brown headphones",
//     description: "Professional headphones with gold trim.",
//     price: 449.99,
//     discountedPrice: 382.49,
//     image: { url: Img1, alt: "Gold headphones" },
//     rating: 4,
//     tags: ["headphones"],
//     reviews: [
//       { id: "r1", username: "Michael", rating: 4, description: "Good sound" },
//       { id: "r2", username: "Michaelaa", rating: 5, description: "Good" },
//     ],
//   },
//   {
//     id: "2",
//     title: "Gold headphones",
//     description: "Professional headphones with gold trim.",
//     price: 449.99,
//     discountedPrice: 382.49,
//     image: { url: Img2, alt: "Gold headphones" },
//     rating: 4,
//     tags: ["phones"],
//     reviews: [
//       { id: "r2", username: "John", rating: 4, description: "Very nice" },
//     ],
//   },
//   {
//     id: "3",
//     title: "Silver headphones",
//     description: "Professional headphones with silver trim.",
//     price: 449.99,
//     discountedPrice: 382.49,
//     image: { url: Img3, alt: "Silver headphones" },
//     rating: 4,
//     tags: ["watches"],
//     reviews: [
//       { id: "r3", username: "Anna", rating: 4, description: "Clean sound" },
//     ],
//   },
//   {
//     id: "4",
//     title: "Yellow headphones",
//     description: "Professional headphones with gold trim.",
//     price: 449.99,
//     discountedPrice: 382.49,
//     image: { url: Img1, alt: "Gold headphones" },
//     rating: 4,
//     tags: ["PS"],
//     reviews: [
//       { id: "r2", username: "Michael", rating: 4, description: "Good sound" },
//     ],
//   },
//   {
//     id: "5",
//     title: "Blue headphones",
//     description: "Professional headphones with gold trim.",
//     price: 449.99,
//     discountedPrice: 382.49,
//     image: { url: Img2, alt: "Gold headphones" },
//     rating: 4,
//     tags: ["shoes"],
//     reviews: [
//       { id: "r2", username: "John", rating: 4, description: "Very nice" },
//     ],
//   },
//   {
//     id: "9",
//     title: "Black headphones",
//     description: "Professional headphones with silver trim.",
//     price: 449.99,
//     discountedPrice: 382.49,
//     image: { url: Img3, alt: "Silver headphones" },
//     rating: 4,
//     tags: ["clothes"],
//     reviews: [
//       { id: "r3", username: "Anna", rating: 4, description: "Clean sound" },
//     ],
//   },
// ];

// const Products = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const navigate = useNavigate(); // Hook for navigation

//   useEffect(() => {
//     document.title = "VivaTrend - Our Featured Products";
//   }, []);

//   const availableTags = Array.from(
//     new Set(productsData.flatMap((product) => product.tags))
//   );

//   const toggleTag = (tag: string) => {
//     setSelectedTags((prev) =>
//       prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
//     );
//   };

//   const filteredProducts = productsData.filter((product) => {
//     const matchesSearch = product.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesTags =
//       selectedTags.length === 0 ||
//       product.tags.some((tag) => selectedTags.includes(tag));
//     return matchesSearch && matchesTags;
//   });

//   const handleShopNow = (id: string) => {
//     navigate(`/products/${id}`); // Navigate to product page
//   };

//   return (
//     <section className="container pt-[180px] mx-auto px-4 py-8">
//       <h2 className="h2 text-white text-center mb-12">Our Featured Products</h2>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-12">
//         <div className="relative flex w-full max-w-xl">
//           <FiSearch className="absolute top-4 left-3 text-gray-400" />
//           <label htmlFor="search" className="sr-only text-white">
//             Search products
//           </label>
//           <input
//             id="search"
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full p-3 pl-10 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
//           />
//           <button className="btn btn-primary px-6 rounded-r-lg">Search</button>
//         </div>
//       </div>

//       {/* Product Grid + Sidebar */}
//       <div className="flex flex-col-reverse lg:flex-row gap-8">
//         {/* Product Grid */}
//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white shadow-md rounded-lg overflow-hidden"
//               >
//                 <img
//                   src={product.image.url}
//                   alt={product.image.alt}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold">{product.title}</h3>
//                   <p className="text-gray-600 text-sm">{product.description}</p>
//                   <div className="mt-2 flex items-center space-x-2">
//                     <span className="text-lg font-bold text-primary">
//                       ${product.discountedPrice.toFixed(2)}
//                     </span>
//                     {product.price > product.discountedPrice && (
//                       <span className="text-sm line-through text-gray-500">
//                         ${product.price.toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                   <div className="mt-2 flex items-center">
//                     <span className="text-accent">
//                       {"★".repeat(product.rating)}
//                       {"☆".repeat(5 - product.rating)}
//                     </span>
//                     <span className="ml-2 text-sm text-gray-500">
//                       {product.reviews.length} reviews
//                     </span>
//                   </div>
//                   <div className="mt-2 text-xs text-gray-500">
//                     Tags: {product.tags.join(", ")}
//                   </div>
//                   <div className="mt-4">
//                     <button
//                       className="btn btn-primary w-full py-2 text-sm"
//                       onClick={() => handleShopNow(product.id)} // Handle click
//                     >
//                       Shop Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-500">
//               No products found.
//             </p>
//           )}
//         </div>

//         {/* Sidebar */}
//         <div className="lg:w-64 w-full flex flex-col lg:flex-col gap-0">
//           <SidebarFilter
//             selectedTags={selectedTags}
//             onTagToggle={toggleTag}
//             availableTags={availableTags}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;
import React, { useState, useEffect } from "react";
import SidebarFilter from "../SidebarFilter";
import SearchBar from "../SearchBar";
import ProductsGrid from "./ProductsGrid";
import { productsData } from "../../productsData";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    document.title = "VivaTrend - Our Featured Products";
  }, []);

  const availableTags = Array.from(
    new Set(productsData.flatMap((product) => product.tags))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      product.tags.some((tag) => selectedTags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <section className="container pt-[180px] mx-auto px-4 py-8">
      <h2 className="h2 text-white text-center mb-12">Our Featured Products</h2>

      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content area - takes 3/4 width when no products found */}
        <div className="lg:w-3/4 w-full">
          {filteredProducts.length > 0 ? (
            <ProductsGrid products={filteredProducts} />
          ) : (
            <div className="flex items-start justify-center h-full">
              <div className="text-center p-8 bg-white/10 rounded-lg w-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  No products found
                </h3>
                <p className="text-white">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Sidebar - always takes 1/4 width */}
        <div className="lg:w-1/4 w-full">
          <SidebarFilter
            selectedTags={selectedTags}
            onTagToggle={toggleTag}
            availableTags={availableTags}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
