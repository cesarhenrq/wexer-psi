import styled from 'styled-components';
import { Box, Divider, TextField } from '@mui/material';

export const OutterBox = styled(Box)`
  max-height: calc(100vh - 250px);
  overflow-y: scroll;
`;

export const SessionDivider = styled(Divider)`
  margin-top: ${({ theme }) => theme.spacing(3)} !important;
`;

export const SessionTextField = styled(TextField)`
  & ::placeholder {
    font-size: 14px;
  }
`;
