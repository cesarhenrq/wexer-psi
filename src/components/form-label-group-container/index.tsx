import { useTheme } from '@mui/material';
import { ReactNode } from 'react';
import * as S from './styles';

type GroupLabelContainerProps = {
  children: ReactNode;
};

const GroupLabelContainer = ({ children }: GroupLabelContainerProps) => {
  const theme = useTheme();
  return (
    <S.GroupLabelContainer theme={theme}>{children}</S.GroupLabelContainer>
  );
};

export default GroupLabelContainer;
