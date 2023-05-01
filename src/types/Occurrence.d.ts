type OccurrenceType = {
  timelineId?: string;
  _id: string;
  title: string;
  content?: string;
  files?: { filename: string; filesize: number }[];
  type: TimeLineItemType;
  payment?: {
    value?: number;
    method?: string;
    status?: string;
  };
  assessments?: {
    interview?: string;
    tests?: string;
    observation?: string;
  };
  createdOn: string;
  modifiedOn?: string;
};
