import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

type ServiceBoxProps = {
  isDisabled?: boolean;
};

export const OutterBox = styled(Box)`
  border: 1px solid #e0e0e0;
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => `${theme.spacing(2)} 0`};
`;

export const InnerBox = styled(Box)`
  margin: ${({ theme }) => theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsBox = styled(Box)`
  margin-left: ${({ theme }) => theme.spacing(2)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const TypographyBox = styled(Box)`
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.spacing(3)};
`;

export const EmitButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ServiceBox = styled(Box)<ServiceBoxProps>`
  gap: ${({ theme }) => theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.palette.secondary.dark : theme.palette.secondary.main};
  background-color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.palette.secondary.light : theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(4.5)}`};
`;

export const ServiceTypography = styled(Typography)`
  font-weight: bold !important;
`;
