import styled from 'styled-components';
import Box from '@mui/material/Box';

export const CircleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  margin-right: ${({ theme }) => theme.spacing(1)};
`;
