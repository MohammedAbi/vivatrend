import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Img1 from "../assets/images/Background.jpg";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Main content area accounting for header */}
      <div className="flex flex-1 mt-[90px]">
        {/* Right side - registration form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col p-8 md:p-20 overflow-y-auto">
          <h2 className="h1 w-full max-w-[500px] mx-auto text-primary text-xl font-semibold mb-8">
            VivaTrend
          </h2>

          <div className="w-full flex flex-col max-w-[500px] mx-auto">
            <div className="w-full flex flex-col mb-2">
              <h3 className="h3 mb-2">Create Account</h3>
              <p className="text-base mb-6">
                Join us today and start your style journey.
              </p>
            </div>

            <div className="w-full flex flex-col">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="w-full">
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full text-primary py-4 my-2 border-b border-accent bg-transparent outline-none focus:outline-none"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full text-primary py-4 my-2 border-b border-accent bg-transparent outline-none focus:outline-none"
                    required
                  />
                </div>
              </div>

              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full text-primary py-4 my-2 border-b border-accent bg-transparent outline-none focus:outline-none"
                required
              />

              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password (min. 8 characters)"
                minLength="8"
                className="w-full text-primary py-4 my-2 border-b border-accent bg-transparent outline-none focus:outline-none"
                required
              />

              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full text-primary py-4 my-2 border-b border-accent bg-transparent outline-none focus:outline-none"
                required
              />

              <div className="flex items-center mt-4 mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 mr-2 accent-accent"
                  required
                />
                <label htmlFor="terms" className="text-sm cursor-pointer">
                  I agree to the{" "}
                  <Link to="/terms" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            <div className="w-full flex flex-col my-4">
              <button className="btn btn-lg btn-primary py-3 mb-4">
                Create Account
              </button>

              <button
                className="btn btn-lg btn-white border border-primary py-3"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>

            <div className="w-full flex items-center justify-center relative py-2 mb-4">
              <div className="w-full h-[1px] bg-black/40"></div>
              <span className="absolute text-lg text-black/80 bg-white px-2">
                Or
              </span>
            </div>

            <button className="btn btn-lg btn-white border border-primary/40 flex items-center justify-center gap-2 py-3 mb-4">
              <FcGoogle className="text-xl h-5 mr-2" />
              Sign Up with Google
            </button>

            <div className="w-full flex items-center justify-center">
              <p className="text-sm font-normal text-primary">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="font-semibold underline underline-offset-2 cursor-pointer">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
         {/* Left side - hidden on mobile */}
         <div className="relative lg:w-1/2 hidden lg:flex h-[calc(100vh-90px)]">
          <div className="absolute top-[20%] left-[10%] flex flex-col max-w-[80%]">
            <h1 className="text-4xl text-white font-bold my-4 leading-tight">
              Join the VivaTrend Community
            </h1>
            <p className="text-xl text-white font-normal mb-6">
              Create your account and unlock exclusive benefits
            </p>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center">
                <span className="mr-2">✓</span> Early access to new collections
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Member-only discounts
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Personalized style
                recommendations
              </li>
            </ul>
          </div>
          <img
            src={Img1}
            alt="Fashionable people enjoying VivaTrend clothing"
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black/50 z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
