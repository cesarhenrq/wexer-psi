import { Box, useTheme } from '@mui/material';
import * as S from './styles';
import PdfIcon from '../pdf-icon';

type AttachmentContentProps = {
  data: AttachmentType;
};

const AttachmentContent = ({ data }: AttachmentContentProps) => {
  const theme = useTheme();
  const { files } = data;
  return (
    <Box>
      <S.TextTypography
        variant="body1"
        theme={theme}
        sx={{ textAlign: 'justify' }}
      >
        {data.content}
      </S.TextTypography>
      <S.AttachmentTypography variant="caption" theme={theme}>
        {`${files ? files.length : 0} Anexos`}
      </S.AttachmentTypography>
      {data.files
        ? data.files.map((file, index) => (
            <S.FileLink href={file.filename} download theme={theme} key={index}>
              <PdfIcon />
              <S.FileNameTypography variant="subtitle2" theme={theme}>
                {`${file.filename} (${file.filesize} KB)`}
              </S.FileNameTypography>
            </S.FileLink>
          ))
        : null}
    </Box>
  );
};

export default AttachmentContent;
