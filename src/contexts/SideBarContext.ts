import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

type SideBarContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SideBarContext = createContext<SideBarContextType>({
  isOpen: false,
  setIsOpen: () => null,
});
