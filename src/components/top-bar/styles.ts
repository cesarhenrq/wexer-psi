import styled from 'styled-components';
import { AppBar, Toolbar } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  height: 80;
  flex: 1;
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: space-between;
  justify-content: center;
`;

export const StyledToolBar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
