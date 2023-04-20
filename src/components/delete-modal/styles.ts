import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const OutterBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 557px;
  height: 444px;
  background-color: ${(props) => props.theme.palette.background.paper};
  border: 2px solid ${(props) => props.theme.palette.secondary.dark};
  box-shadow: 24px;
  border-radius: 2px;
  padding: 0 32px 24px 32px;
  text-align: center;
`;

export const Buttons = styled(Button)`
  width: 215px;
  height: 48px;
  border-radius: 8px;
  color: ${(props) => props.theme.palette.secondary.main};
  background-color: ${(props) => props.theme.palette.primary.main};
  text-transform: none;
  font-size: 16px;
  font-weight: 700;
`;
