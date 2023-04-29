import { createContext, Dispatch, SetStateAction } from 'react';

type EditingContextType = {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export const EditingContext = createContext<EditingContextType>({
  isEditing: false,
  setIsEditing: () => null,
});
