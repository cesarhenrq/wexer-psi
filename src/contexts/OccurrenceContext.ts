import { createContext, Dispatch, SetStateAction } from 'react';

type OccurrenceContextType = {
  occurrence: OccurrenceType;
  setOccurrence: Dispatch<SetStateAction<OccurrenceType>>;
};

export const OccurrenceContext = createContext<OccurrenceContextType>({
  occurrence: {_id: '', title: '', type: 'session', createdOn: ''},
  setOccurrence: () => null,
});