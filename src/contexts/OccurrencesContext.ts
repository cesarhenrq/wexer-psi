import { createContext, Dispatch, SetStateAction } from 'react';

type OccurrencesContextType = {
  occurrences: OccurrenceType[];
  setOccurrences: Dispatch<SetStateAction<OccurrenceType[]>>;
};

export const OccurrencesContext = createContext<OccurrencesContextType>({
  occurrences: [],
  setOccurrences: () => null,
});
