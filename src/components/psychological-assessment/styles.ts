import styled from 'styled-components';
import { Box, Step } from '@mui/material';

export const StepperBox = styled(Box)`
  margin: ${({ theme }) =>
    `${theme.spacing(5)} ${theme.spacing(35)} ${theme.spacing(
      12
    )} ${theme.spacing(5)}`};
`;

export const GlobalStep = styled(Step)`
  display: flex;
  align-items: center;
  font-weight: bold;
  background-color: ${({ theme, completed }) =>
    completed ? theme.palette.primary.main : theme.palette.secondary.main};
  border: 1px solid
    ${({ theme, active }) =>
      active
        ? theme.palette.primary.main
        : theme.palette.secondary.main} !important;
  height: ${({ theme }) => theme.spacing(9)};
  width: ${({ theme }) => theme.spacing(46)};
  position: relative;
`;

export const FirstStep = styled(GlobalStep)`
  clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 50%, 90% 0);
`;

export const MiddleStep = styled(GlobalStep)`
  clip-path: polygon(0% 0, 10% 50%, 0% 100%, 90% 100%, 100% 50%, 90% 0);
  padding-left: ${({ theme }) => theme.spacing(5)} !important;
`;

export const LastStep = styled(GlobalStep)`
  clip-path: polygon(100% 0, 100% 100%, 0% 100%, 10% 50%, 0 0);
  padding-left: ${({ theme }) => theme.spacing(5)} !important;
`;
