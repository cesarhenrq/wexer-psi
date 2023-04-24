import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

export const OutterBox = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.spacing(1)};
`;

export const TitleBox = styled(Box)`
  border-left: ${({ theme }) =>
    `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.secondary.light}`};
  padding: ${({ theme }) => `${theme.spacing(2.5)} ${theme.spacing(3.5)}`};
  border-radius: ${({ theme }) => theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoldTypography = styled(Typography)`
  font-weight: bold !important;
`;

export const ButtonsBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledButton = styled(Button)`
  border-radius: ${({ theme }) => theme.spacing(3)} !important;
  padding: ${({ theme }) =>
    `${theme.spacing(1)} ${theme.spacing(4)}`} !important;
`;
