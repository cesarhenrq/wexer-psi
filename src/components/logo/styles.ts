import styled from 'styled-components';
import Box from '@mui/material/Box';

export const LogoBox = styled(Box)`
  height: 80.75px;
  width: 80px;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
`;
