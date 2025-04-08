// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// //   Outlet,
// //   useLocation,
// // } from "react-router-dom";
// // import Header from "./components/Header";
// // import Footer from "./components/Footer";
// // import Home from "./pages/Home";
// // import { useEffect } from "react";
// // import Login from "./components/Login";
// // import Register from "./components/auth/Register";
// // import Contact from "./components/Contact";
// // import TermsAndPrivacy from "./components/TermsPrivacy";
// // import Checkout from "./components/Checkout";
// // import { productsData } from "./productsData";
// // import Products from "./components/product/Products";
// // import ProductPage from "./components/product/ProductPage";
// // import { CartProvider } from "./components/context/cart";
// // import Cart from "./components/cart/Cart";

// // const ScrollToTop = () => {
// //   const { pathname } = useLocation();

// //   useEffect(() => {
// //     window.scrollTo({
// //       top: 0,
// //       behavior: "smooth",
// //     });
// //   }, [pathname]);

// //   return null;
// // };

// // const Layout = () => {
// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <ScrollToTop />
// //       <Header />
// //       <div className="flex-grow bg-primary">
// //         <Outlet />
// //       </div>
// //       <Footer />
// //       <Cart />
// //     </div>
// //   );
// // };

// // const router = createBrowserRouter([
// //   {
// //     element: <Layout />,
// //     children: [
// //       {
// //         path: "/",
// //         element: <Home />,
// //       },
// //       {
// //         path: "/products",
// //         element: <Products />,
// //       },
// //       {
// //         path: "/products/:id",
// //         element: <ProductPage productData={productsData} />,
// //       },
// //       {
// //         path: "/login",
// //         element: <Login />,
// //       },
// //       {
// //         path: "/register",
// //         element: <Register />,
// //       },
// //       {
// //         path: "/contact",
// //         element: <Contact />,
// //       },
// //       {
// //         path: "/terms-privacy",
// //         element: <TermsAndPrivacy />,
// //       },
// //       {
// //         path: "/checkout",
// //         element: <Checkout />,
// //       },
// //     ],
// //   },
// // ]);

// // const App: React.FC = () => {
// //   return (
// //     <CartProvider>
// //       <RouterProvider router={router} />
// //     </CartProvider>
// //   );
// // };

// // export default App;

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet,
//   useLocation,
// } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import { useEffect } from "react";
// import Login from "./components/Login";
// import Register from "./components/auth/Register";
// import Contact from "./components/Contact";
// import TermsAndPrivacy from "./components/TermsPrivacy";
// import { productsData } from "./productsData";
// import Products from "./components/product/Products";
// import ProductPage from "./components/product/ProductPage";
// import { CartProvider } from "./components/context/cart";
// import Cart from "./components/cart/Cart";
// import Checkout from "./components/checkout/CheckoutSteps/Checkout";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [pathname]);

//   return null;
// };

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <ScrollToTop />
//       <Header />
//       <div className="flex-grow bg-primary">
//         <Outlet />
//       </div>
//       <Footer />
//       <Cart />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/products",
//         element: <Products />,
//       },
//       {
//         path: "/products/:id",
//         element: <ProductPage productData={productsData} />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/terms-privacy",
//         element: <TermsAndPrivacy />,
//       },
//       {
//         path: "/checkout",
//         element: <Checkout />,
//       },
//     ],
//   },
// ]);

// const App: React.FC = () => {
//   return (
//     <CartProvider>
//       <RouterProvider router={router} />
//     </CartProvider>
//   );
// };

// export default App;
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/auth/Register";
import Contact from "./components/Contact";
import TermsAndPrivacy from "./components/TermsPrivacy";
import { productsData } from "./productsData";
import Products from "./components/product/Products";
import ProductPage from "./components/product/ProductPage";
import { CartProvider } from "./components/context/cart";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/CheckoutSteps/Checkout";
import Toaster from "./components/ui/Toaster"; // Import the Toaster component

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <div className="flex-grow bg-primary">
        <Outlet />
      </div>
      <Footer />
      <Cart />
      <Toaster /> {/* Add the Toaster component here */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductPage productData={productsData} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/terms-privacy",
        element: <TermsAndPrivacy />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
