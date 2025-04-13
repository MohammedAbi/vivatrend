// import React from "react";
// import { Link } from "react-router-dom";

// const TermsCheckbox: React.FC = () => {
//   return (
//     <div className="flex items-center mt-4 mb-6">
//       <input
//         type="checkbox"
//         id="terms"
//         className="w-4 h-4 mr-2 accent-accent"
//         required
//       />
//       <label htmlFor="terms" className="text-sm cursor-pointer">
//         I agree to the{" "}
//         <Link to="/terms-privacy#terms" className="underline">
//           Terms of Service
//         </Link>{" "}
//         and{" "}
//         <Link to="/terms-privacy#privacy" className="underline">
//           Privacy Policy
//         </Link>
//       </label>
//     </div>
//   );
// };

// export default TermsCheckbox;
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
