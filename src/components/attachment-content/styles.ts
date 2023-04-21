import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const TextTypography = styled(Typography)`
  margin: ${({ theme }) => `${theme.spacing(1)} 0px`} !important;
`;

export const AttachmentTypography = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(1)} !important;
  font-weight: bold !important;
`;

export const FileNameTypography = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing(0.5)} !important;
  font-weight: bold !important;
`;

export const FileLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.info.main};
`;
