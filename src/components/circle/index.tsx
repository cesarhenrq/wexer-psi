import { useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { CircleBox } from './styles';

type CircleProps = { children: ReactNode };

const Circle = ({ children }: CircleProps) => {
  const theme = useTheme();
  return <CircleBox theme={theme}>{children}</CircleBox>;
};

export default Circle;
