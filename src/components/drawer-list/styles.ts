import styled from 'styled-components';
import { Box, ListItemButton, Collapse, ListItemIcon } from '@mui/material';

type ListItemButtonProps = {
  isCollapsed?: boolean;
};

export const DrawerBox = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 100%;
  width: 263px;
`;

export const DrawerListItemButton = styled(ListItemButton)<ListItemButtonProps>`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme, isCollapsed }) =>
    isCollapsed ? theme.spacing(8) : theme.spacing(2)} !important;
`;

export const DrawerCollapse = styled(Collapse)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const DrawerListItemIcon = styled(ListItemIcon)`
  margin-right: ${({ theme }) => theme.spacing(-2)};
  margin-left: ${({ theme }) => theme.spacing(1)};
`;
