import { Box } from '@mui/material';
import { ReactNode } from 'react';

type CircleProps = { children: ReactNode };

const Circle = ({ children }: CircleProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'primary.main',
        color: 'white',
        mr: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default Circle;
