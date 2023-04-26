type SessionType = {
  occurrenceId: string;
  timelineId: string;
  createdOn: string;
  title: string;
  content: string;
  date: string;
  time: string;
  timeline: Partial<TimeLineType>;
  setTimeline: Dispatch<SetStateAction<Partial<TimeLineType>>>;
  payment?: {
    value: number;
    method: string;
    status: string;
  };
};
