import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

interface AuthButtonsProps {
  onLoginClick: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ onLoginClick }) => {
  return (
    <>
      <button
        className="btn btn-lg btn-white border border-primary py-3"
        onClick={onLoginClick}
      >
        Login
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
    </>
  );
};

export default AuthButtons;
