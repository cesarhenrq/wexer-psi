import { Box, Button } from '@mui/material';
import styled from 'styled-components';

type ButtonProps = {
  color?: string;
};

export const OutterBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 557px;
  height: 444px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 2px solid ${({ theme }) => theme.palette.secondary.dark};
  box-shadow: 24px;
  border-radius: 2px;
  padding: 0 32px 24px 32px;
  text-align: center;
`;

export const Buttons = styled(Button)<ButtonProps>`
  width: 215px !important;
  height: 48px !important;
  border-radius: 24px !important;
  color: ${({ theme, color }) =>
    color ? theme.palette[color].main : theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.primary.main};
  text-transform: capitalize !important;
  font-size: 16px !important;
  font-weight: 700 !important;
`;
