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
// import Register from "./components/auth/Register";
// import Contact from "./components/Contact";
// import TermsAndPrivacy from "./components/TermsPrivacy";
// import { productsData } from "./productsData";
// import Products from "./components/product/Products";
// import ProductPage from "./components/product/ProductPage";
// import { CartProvider } from "./components/context/cart";
// import Cart from "./components/cart/Cart";
// import Checkout from "./components/checkout/CheckoutSteps/Checkout";
// import Toaster from "./components/ui/Toaster";
// import Login from "./components/auth/Login";
// import { AuthProvider } from "./components/context/AuthContext"; // Import AuthProvider

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
//       <Toaster />
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
//     <AuthProvider>
//       {" "}
//       {/* Wrap everything with AuthProvider */}
//       <CartProvider>
//         <RouterProvider router={router} />
//       </CartProvider>
//     </AuthProvider>
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
import Register from "./components/auth/Register";
import Contact from "./components/Contact";
import TermsAndPrivacy from "./components/TermsPrivacy";
import { productsData } from "./productsData";
import Products from "./components/product/Products";
import ProductPage from "./components/product/ProductPage";
import { CartProvider } from "./components/context/cart";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/CheckoutSteps/Checkout";
import Toaster from "./components/ui/Toaster";
import Login from "./components/auth/Login";
import { AuthProvider } from "./components/context/AuthContext";
import ProfilePage from "./components/auth/ProfilePage";

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

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <div className="flex-grow bg-primary">
        <Outlet />
      </div>
      <Footer />
      <Cart />
      <Toaster />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <CartProvider>
          <AppLayout />
        </CartProvider>
      </AuthProvider>
    ),
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
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;