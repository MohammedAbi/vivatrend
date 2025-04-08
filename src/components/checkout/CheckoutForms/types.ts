import { CheckoutFormData } from "../utils/types";


export interface ContactFormProps {
  formData: CheckoutFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContinue: () => void;
}

export interface PaymentFormProps {
  formData: CheckoutFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void;
  onContinue: () => void;
}

export interface ReviewFormProps {
  formData: CheckoutFormData;
  onBack: () => void;
  onSubmitOrder: () => void;
}
