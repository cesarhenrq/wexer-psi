import styled from 'styled-components';
import {
  Box,
  Button,
  FormControl,
  Divider,
  Select,
  Typography,
  Stack,
} from '@mui/material';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OutterBox = styled(Box)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  margin-left: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(2)};
`;

export const ServiceSelect = styled(Select)`
  width: 400px !important;
  height: 48px !important;
`;

export const ServiceTypography = styled(Typography)`
  font-weight: bold !important;
  margin-right: ${({ theme }) => theme.spacing(1)} !important;
`;

export const InnerBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ServiceFormControl = styled(FormControl)`
  margin: ${({ theme }) => theme.spacing(2)};
  min-width: 120;
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
`;

export const ToolBarDivider = styled(Divider)`
  margin: ${({ theme }) =>
    `${theme.spacing(3)} ${theme.spacing(1)}`} !important;
`;

export const ToolBarStack = styled(Stack)`
  display: flex;
  justify-content: space-between;
`;

export const ActionButton = styled(Button)`
  text-transform: none !important;
`;

export const ActionButtonTypography = styled(Typography)`
  font-weight: bold !important;
`;
