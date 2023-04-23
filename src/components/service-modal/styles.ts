import styled from 'styled-components';
import { Box, Typography, Button, TextField } from '@mui/material';

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 444px;
  height: 657px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) =>
    `${theme.spacing(4)} ${theme.spacing(4)} 0 ${theme.spacing(4)}`};
`;

export const TitleModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const TitleTypography = styled(Typography)`
  font-weight: bold !important;
`;

export const ServiceTextField = styled(TextField)`
  & ::placeholder {
    font-size: 14px;
  }
`;

export const SaveButton = styled(Button)`
  text-transform: none !important;
  width: 100%;
  height: ${({ theme }) => theme.spacing(6)} !important;
  border-radius: ${({ theme }) => theme.spacing(3)} !important;
`;
