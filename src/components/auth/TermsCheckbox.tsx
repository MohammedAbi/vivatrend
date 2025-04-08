import React from "react";
import { Link } from "react-router-dom";

const TermsCheckbox: React.FC = () => {
  return (
    <div className="flex items-center mt-4 mb-6">
      <input
        type="checkbox"
        id="terms"
        className="w-4 h-4 mr-2 accent-accent"
        required
      />
      <label htmlFor="terms" className="text-sm cursor-pointer">
        I agree to the{" "}
        <Link to="/terms-privacy#terms" className="underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="/terms-privacy#privacy" className="underline">
          Privacy Policy
        </Link>
      </label>
    </div>
  );
};

export default TermsCheckbox;
