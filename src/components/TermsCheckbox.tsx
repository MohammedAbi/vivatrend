import React from "react";

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ checked, onChange }) => {
  return (
    <div className="flex items-center mb-6">
      <input
        type="checkbox"
        id="terms"
        checked={checked}
        onChange={onChange}
        className="mr-2"
        required
      />
      <label htmlFor="terms" className="text-sm">
        I agree to the Terms and Privacy Policy
      </label>
    </div>
  );
};

export default TermsCheckbox;
