import styled from 'styled-components';
import { Box } from '@mui/material';

export const NavBox = styled(Box)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(4)};
  border-top-left-radius: ${({ theme }) => theme.spacing(2)};
  border-bottom-left-radius: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(0.25)};
  background-color: white;
`;

export const Container = styled(Box)`
  width: 60%;
  margin-left: ${({ theme }) => theme.spacing(5)};
`;

export const ContentBox = styled(Box)`
  background-color: white;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const TitleBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsBox = styled(TitleBox)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const PaymentBox = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(6)};
`;
