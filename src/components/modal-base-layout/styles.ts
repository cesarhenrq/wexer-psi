import styled from 'styled-components';
import Box from '@mui/material/Box';

export const TitleModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #e0e0e0;
  height: 97px;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 674px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: ${({ theme }) => `2px solid ${theme.palette.background.paper}`};
  box-shadow: 24px;
  border-radius: 8px;
  padding: 24px 32px 0 32px;
`;
