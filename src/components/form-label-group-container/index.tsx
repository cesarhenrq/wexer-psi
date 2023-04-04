import { Box } from '@mui/material';
import { ReactNode } from 'react';

type GroupLabelContainerProps = {
  children: ReactNode;
};

const GroupLabelContainer = ({ children }: GroupLabelContainerProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 3 }}>
      {children}
    </Box>
  );
};

export default GroupLabelContainer;
