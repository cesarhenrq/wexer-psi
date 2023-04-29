import { createContext, Dispatch, SetStateAction } from 'react';

type SubmitingContextType = {
  isSubmiting: boolean;
  setIsSubmiting: Dispatch<SetStateAction<boolean>>;
};

export const SubmitingContext = createContext<SubmitingContextType>({
  isSubmiting: false,
  setIsSubmiting: () => null,
});
