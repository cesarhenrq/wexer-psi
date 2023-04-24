import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

type TypographyProps = {
  isFieldsRequired?: boolean;
};

export const TitleModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleTypography = styled(Typography)`
  font-weight: bold !important;
`;

export const CancelTypography = styled(Typography)`
  text-transform: none;
`;

export const RequiredTypography = styled(Typography)<TypographyProps>`
  display: flex;
  font-style: italic;
  align-items: center;
  visibility: ${({ isFieldsRequired }) =>
    isFieldsRequired ? 'visible' : 'hidden'};
`;

export const ActionButtonTypography = styled(Typography)`
  font-weight: bold !important;
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
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: 24px 32px 0 32px;
`;

export const ActionButton = styled(Button)`
  border-radius: ${({ theme }) => theme.spacing(8)} !important;
  width: 147px;
`;
