import styled from 'styled-components';
import { Box, Tabs, Tab, TextField } from '@mui/material';

export const Container = styled.div`
  margin: 27px 84px 0px 58px;
`;

export const OutterBox = styled(Box)`
  width: 100%;
`;

export const InnerBox = styled(Box)`
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledTabs = styled(Tabs)`
  margin: ${({ theme }) => theme.spacing(1)};
  width: 42%;
  font-size: 1em;
`;

export const StyledTab = styled(Tab)`
  margin-top: ${({ theme }) => theme.spacing(1)} !important;
  margin-right: ${({ theme }) => theme.spacing(0.5)} !important;
  border-right: 1px !important;
  border-bottom: 2px !important;
  border-style: solid !important;
  border-color: ${({ theme }) => theme.palette.secondary.dark};
  text-transform: none !important;
  width: 50% !important;
  font-size: 1em !important;
`;

export const TabNavTextField = styled(TextField)`
  width: 386px !important;
  height: 48px !important;
  & ::placeholder {
    font-size: 14px;
  }
`;

export const TextFieldBox = styled(Box)`
  height: 48px !important;
  margin: ${({ theme }) => theme.spacing(1)} !important;
`;
