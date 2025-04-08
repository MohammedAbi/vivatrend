// import React, { useState } from "react";
// import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "./context/cart";

// const Cart: React.FC = () => {
//   const {
//     cartItems,
//     isCartOpen,
//     toggleCart,
//     removeFromCart,
//     updateQuantity,
//     getCartTotal,
//   } = useCart();

//   const [couponCode, setCouponCode] = useState("");
//   const [discountApplied, setDiscountApplied] = useState(false);
//   const [invalidCoupon, setInvalidCoupon] = useState(false);
//   const navigate = useNavigate();

//   if (!isCartOpen) return null;

//   const applyCoupon = () => {
//     if (couponCode.toUpperCase() === "DISCOUNT10") {
//       setDiscountApplied(true);
//       setInvalidCoupon(false);
//     } else {
//       setDiscountApplied(false);
//       setInvalidCoupon(true);
//     }
//   };

//   const removeCoupon = () => {
//     setCouponCode("");
//     setDiscountApplied(false);
//     setInvalidCoupon(false);
//   };

//   const calculateTotal = () => {
//     const subtotal = getCartTotal();
//     if (discountApplied) {
//       return subtotal * 0.9; // Apply 10% discount
//     }
//     return subtotal;
//   };

//   const total = calculateTotal();
//   const discountAmount = discountApplied ? getCartTotal() * 0.1 : 0;

//   return (
//     <div className="fixed inset-0 z-50 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-black bg-opacity-50"
//         onClick={toggleCart}
//       />

//       <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="flex items-center justify-between p-4 border-b">
//             <h2 className="h3">Your Cart</h2>
//             <button
//               onClick={toggleCart}
//               className="text-gray-500 hover:text-black transition-colors"
//             >
//               <FaTimes size={20} />
//             </button>
//           </div>

//           {/* Items */}
//           <div className="flex-1 overflow-y-auto p-4">
//             {cartItems.length === 0 ? (
//               <p className="text-center text-gray-500 py-8">
//                 Your cart is empty
//               </p>
//             ) : (
//               <ul className="space-y-4">
//                 {cartItems.map((item) => (
//                   <li key={item.id} className="flex gap-4 border-b pb-4">
//                     <img
//                       src={item.image.url}
//                       alt={item.image.alt}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-medium">{item.title}</h3>
//                       <p className="text-gray-600">
//                         ${item.discountedPrice.toFixed(2)}
//                       </p>
//                       <div className="flex items-center mt-2">
//                         <button
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity - 1)
//                           }
//                           className="p-1 text-gray-500 hover:text-black transition-colors"
//                         >
//                           <FaMinus size={12} />
//                         </button>
//                         <span className="mx-2">{item.quantity}</span>
//                         <button
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity + 1)
//                           }
//                           className="p-1 text-gray-500 hover:text-black transition-colors"
//                         >
//                           <FaPlus size={12} />
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-500 hover:text-red-700 transition-colors"
//                     >
//                       <FaTimes />
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Footer */}
//           {cartItems.length > 0 && (
//             <div className="border-t p-4">
//               {/* Coupon Section */}
//               <div className="mb-4">
//                 <div className="flex items-center mb-2">
//                   <input
//                     type="text"
//                     placeholder="Enter coupon code"
//                     value={couponCode}
//                     onChange={(e) => setCouponCode(e.target.value)}
//                     className="flex-1 border p-3 rounded-l focus:outline-none"
//                     disabled={discountApplied}
//                   />
//                   {discountApplied ? (
//                     <button
//                       onClick={removeCoupon}
//                       className="btn btn-secondary btn-sm rounded-l-none rounded-r"
//                     >
//                       Remove
//                     </button>
//                   ) : (
//                     <button
//                       onClick={applyCoupon}
//                       className="btn btn-primary btn-sm rounded-l-none rounded-r"
//                     >
//                       Apply
//                     </button>
//                   )}
//                 </div>
//                 {invalidCoupon && (
//                   <p className="text-red-500 text-sm">
//                     Invalid coupon code. Try "DISCOUNT10" for 10% off.
//                   </p>
//                 )}
//                 {discountApplied && (
//                   <p className="text-green-600 text-sm">
//                     10% discount applied!
//                   </p>
//                 )}
//               </div>

//               {/* Order Summary */}
//               <div className="space-y-2 mb-4">
//                 <div className="flex justify-between">
//                   <span>Subtotal:</span>
//                   <span>${getCartTotal().toFixed(2)}</span>
//                 </div>
//                 {discountApplied && (
//                   <div className="flex justify-between text-green-600">
//                     <span>Discount (10%):</span>
//                     <span>-${discountAmount.toFixed(2)}</span>
//                   </div>
//                 )}
//                 <div className="flex justify-between font-bold border-t pt-2">
//                   <span>Total:</span>
//                   <span>${total.toFixed(2)}</span>
//                 </div>
//               </div>

//               <button
//                 className="btn btn-primary btn-lg w-full"
//                 onClick={() => {
//                   if (cartItems.length === 0) return;

//                   toggleCart();
//                   navigate("/checkout");
//                 }}
//                 disabled={cartItems.length === 0}
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
