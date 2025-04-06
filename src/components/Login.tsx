import React from "react";
import Img1 from "../assets/images/Background.jpg";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate(); 

  const handleSignUpClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="w-full h-screen flex items-start mt-[90px]">
      {/* Left side - hidden on large and smaller screens */}
      <div className="relative lg:w-1/2 h-full flex-col hidden lg:flex">
        <div className="absolute top-[20%] left-[10%] flex flex-col max-w-[80%]">
          <h1 className="text-4xl text-white font-bold my-4 leading-tight">
            Express Your Unique Style <br />
            With VivaTrend
          </h1>
          <p className="text-xl text-white font-normal mb-6">
            Discover curated fashion that tells your story
          </p>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-center">
              <span className="mr-2">✓</span> Exclusive member-only collections
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span> Sustainable fashion choices
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span> Free styling advice with every
              purchase
            </li>
          </ul>
        </div>
        <img
          src={Img1}
          alt="Stylish models wearing VivaTrend's latest collection in an urban setting"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 z-10 pointer-events-none"></div>
      </div>

      {/* Right side - full width on large and smaller screens */}
      <div className="w-full lg:w-1/2 h-full bg-white flex flex-col p-8 md:p-20 justify-between items-center">
        <h2 className="h1 w-full max-w-[500px] mx-auto text-primary text-xl font-semibold">
          VivaTrend
        </h2>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="h3">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please Enter your details.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Email"
              className="w-full text-primary py-4 my-2 border-b border-accent bg-transparent outline-none focus:outline-none"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              className="w-full text-primary py-4 my-2 border-b border-accent bg-transparent outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center cursor-pointer">
              <input type="checkbox" id="remember" className="w-4 h-4 mr-2 accent-accent" />
              <label htmlFor="remember" className="text-sm cursor-pointer">
                Remember Me
              </label>
            </div>

            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot Password ?
            </p>
          </div>
          <div className="w-full flex flex-col my-4">
            <button className="btn btn-lg btn-primary py-3 mb-4">Login</button>

            <button className="btn btn-lg btn-white border border-primary py-3"
            onClick={handleSignUpClick}
            >
              Register
            </button>
          </div>
          <div className="w-full flex items-center justify-center relative py-2 mb-4">
            <div className="w-full h-[1px] bg-black/40 mt-4"></div>
            <p className="absolute text-lg text-black/80 bg-white px-1 mt-4">
              Or
            </p>
          </div>
          <button className="btn btn-lg btn-white border border-primary/40 flex items-center justify-center gap-2 py-3 mb-4">
            <FcGoogle className="text-xl h-5 mr-2" />
            Sign In with Google
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-primary">
            Dont have an account?{" "}
            <a href="/register">
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign up
            </span></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
