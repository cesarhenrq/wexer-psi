import styled from 'styled-components';
import Box from '@mui/material/Box';

export const GroupLabelContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => `${theme.spacing(3)} 0`};
`;
