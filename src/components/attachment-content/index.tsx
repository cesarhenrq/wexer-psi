import { Box, useTheme } from '@mui/material';
import * as S from './styles';
import PdfIcon from '../pdf-icon';

type AttachmentContentProps = {
  text: string;
  numberOfAttachments: number;
};

const AttachmentContent = ({
  text,
  numberOfAttachments,
}: AttachmentContentProps) => {
  const theme = useTheme();
  const filePath = 'caminho_do_arquivo.pdf';
  const fileSize = '233 KB';

  return (
    <Box>
      <S.TextTypography variant="body1" theme={theme}>
        {text}
      </S.TextTypography>
      <S.AttachmentTypography variant="caption" theme={theme}>
        {`${numberOfAttachments} Anexos`}
      </S.AttachmentTypography>
      <S.FileLink href={filePath} download theme={theme}>
        <PdfIcon />
        <S.FileNameTypography variant="subtitle2" theme={theme}>
          {`${filePath} (${fileSize})`}
        </S.FileNameTypography>
      </S.FileLink>
    </Box>
  );
};

export default AttachmentContent;
