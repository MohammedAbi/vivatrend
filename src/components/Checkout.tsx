import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiCheckCircle,
  FiCreditCard,
  FiUser,
  FiMail,
  FiMapPin,
  FiLock,
} from "react-icons/fi";
import { useCart } from "./context/CartContext";

const Checkout = () => {
  const { cartItems, getCartTotal, toggleCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderCompleted) {
      navigate("/");
    }
    return () => toggleCart();
  }, [cartItems, navigate, orderCompleted, toggleCart]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = () => {
    // Process payment here (would be API call in real app)
    setTimeout(() => {
      setOrderCompleted(true);
      clearCart();
    }, 1500);
  };

  const generateOrderNumber = () =>
    `#VT${Math.floor(100000 + Math.random() * 900000)}`;

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getEstimatedDelivery = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(
      deliveryDate.getDate() + 3 + Math.floor(Math.random() * 3)
    );
    return formatDate(deliveryDate);
  };

  if (orderCompleted) {
    return (
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 mt-[90px]">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary/10 px-6 py-12 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-accent/20">
              <FiCheckCircle className="h-6 w-6 text-accent" />
            </div>
            <h1 className="text-2xl font-bold text-primary mt-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-primary/80 mt-2">
              Thank you for shopping with VivaTrend
            </p>
            <p className="text-sm text-primary/60 mt-2">
              Your order #{generateOrderNumber()} has been placed successfully.
            </p>
          </div>

          <div className="px-6 py-8 border-b border-gray-200">
            <h2 className="text-lg font-medium text-primary mb-4">
              Order Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-primary/60">
                  Order Number
                </h3>
                <p className="mt-1 text-sm text-primary">
                  {generateOrderNumber()}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-primary/60">Date</h3>
                <p className="mt-1 text-sm text-primary">
                  {formatDate(new Date())}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-primary/60">Total</h3>
                <p className="mt-1 text-sm text-primary">
                  ${getCartTotal().toFixed(2)}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-primary/60">
                  Estimated Delivery
                </h3>
                <p className="mt-1 text-sm text-primary">
                  {getEstimatedDelivery()}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8">
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="btn btn-lg btn-white border border-accent flex-1 text-center text-accent hover:bg-accent/10"
              >
                Continue Shopping
              </Link>
              <Link
                to="/"
                className="btn btn-lg btn-primary flex-1 text-center bg-accent text-white hover:bg-accent/90"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 mt-[90px]">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-12 relative">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                ${activeStep >= step ? "bg-accent text-white" : "bg-gray-200 text-primary/60"}`}
              >
                {step}
              </div>
              <span
                className={`text-sm mt-2 ${activeStep >= step ? "text-accent font-medium" : "text-primary/60"}`}
              >
                {step === 1 ? "Information" : step === 2 ? "Payment" : "Review"}
              </span>
            </div>
          ))}
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-1">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{
                width:
                  activeStep === 1 ? "0%" : activeStep === 2 ? "50%" : "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            {activeStep === 1 && (
              <div className="bg-white rounded-lg p-6 mb-6 border">
                <h2 className="text-xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setActiveStep(2);
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-primary/70 mb-1">
                        First Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary/70 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-primary/70 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-primary/70 mb-1">
                      Address
                    </label>
                    <div className="relative">
                      <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary/70 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary/70 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg bg-accent text-white hover:bg-accent/90"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeStep === 2 && (
              <div className="bg-white rounded-lg p-6 mb-6 border">
                <h2 className="text-xl font-bold text-primary mb-6">
                  Payment Details
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setActiveStep(3);
                  }}
                >
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-primary/70 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <FiCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40" />
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full pl-10 pr-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-primary/70 mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary/70 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary/70 mb-1">
                        CVV
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40" />
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-3 border-b border-accent bg-transparent focus:outline-none focus:ring-0 text-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="btn btn-white btn-lg border border-accent text-accent hover:bg-accent/10"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg bg-accent text-white hover:bg-accent/90"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeStep === 3 && (
              <div className="bg-white rounded-lg p-6 mb-6 border">
                <h2 className="text-xl font-bold text-primary mb-6">
                  Review Your Order
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-primary/70 mb-2">
                      Contact Information
                    </h3>
                    <p className="text-primary">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-primary">{formData.email}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary/70 mb-2">
                      Shipping Address
                    </h3>
                    <p className="text-primary">{formData.address}</p>
                    <p className="text-primary">
                      {formData.city}, {formData.zipCode}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary/70 mb-2">
                      Payment Method
                    </h3>
                    <p className="text-primary">
                      •••• •••• •••• {formData.cardNumber.slice(-4)}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="btn btn-white btn-lg border border-accent text-accent hover:bg-accent/10"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitOrder}
                    className="btn btn-primary btn-lg  bg-accent text-white hover:bg-accent/90"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg p-6 sticky top-6 border">
              <h2 className="text-xl font-bold text-primary mb-4">
                Order Summary
              </h2>
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex">
                    <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden">
                      <img
                        src={item.image.url}
                        alt={item.image.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium text-primary">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary/60">
                        ${item.discountedPrice.toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between py-2">
                  <span className="text-primary/70">Subtotal</span>
                  <span className="text-primary">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-primary/70">Shipping</span>
                  <span className="text-primary">Free</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-lg">
                  <span className="text-primary">Total</span>
                  <span className="text-primary">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
