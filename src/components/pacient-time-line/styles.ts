import styled from 'styled-components';
import { Box, Divider } from '@mui/material';

export const OutterBox = styled(Box)`
  margin-left: ${({ theme }) => theme.spacing(3)};
`;

export const InnerBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const TimeLineDivider = styled(Divider)`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing(1)} !important;
`;
