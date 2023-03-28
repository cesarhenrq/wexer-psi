import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import * as S from './styles';

type DataPatientProps = {
  children: ReactNode;
  label: string;
  data: string;
};

const DataPatient = ({ children, label, data }: DataPatientProps) => {
  return (
    <S.Container>
      <S.IconContainer>{children}</S.IconContainer>
      <div>
        <Typography color="primary.main">{label}</Typography>
        <Typography color="secondary.dark">{data}</Typography>
      </div>
    </S.Container>
  );
};

export default DataPatient;
