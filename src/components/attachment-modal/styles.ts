import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputFileButton = styled(Button)`
  text-transform: none !important;
  width: fit-content !important;
  height: 34px !important;
  padding: ${({ theme }) => theme.spacing(2)} !important;
  margin-right: ${({ theme }) => theme.spacing(1)} !important;
  background-color: ${({ theme }) => theme.palette.info.main} !important;
  border-radius: ${({ theme }) => theme.spacing(1)} !important;
`;

export const AttachmentTextField = styled(TextField)`
  & ::placeholder {
    font-size: 14px;
  }
`;
