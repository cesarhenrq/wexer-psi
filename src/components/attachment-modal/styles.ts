import styled from 'styled-components';
import { Button } from '@mui/material';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputFileButton = styled(Button)`
  width: fit-content !important;
  height: 34px !important;
  padding: ${({ theme }) => theme.spacing(2)} !important;
  margin-right: ${({ theme }) => theme.spacing(1)} !important;
  background-color: ${({ theme }) => theme.palette.info.main} !important;
  border-radius: ${({ theme }) => theme.spacing(1)} !important;
`;
