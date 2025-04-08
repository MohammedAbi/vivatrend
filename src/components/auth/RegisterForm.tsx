import React from "react";
import TermsCheckbox from "./TermsCheckbox";

interface RegisterFormProps {
  onLoginClick: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onLoginClick }) => {
  return (
    <div className="w-full flex flex-col">
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

        <TermsCheckbox />

        <button className="btn btn-lg btn-primary py-3 mb-4">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
