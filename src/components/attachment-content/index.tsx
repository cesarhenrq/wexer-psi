import { Typography, Box } from '@mui/material';
import PdfIcon from '../pdf-icon';

type AttachmentContentProps = {
  text: string;
  numberOfAttachments: number;
};

const AttachmentContent = ({
  text,
  numberOfAttachments,
}: AttachmentContentProps) => {
  const filePath = 'caminho_do_arquivo.pdf';
  const fileSize = '233 KB';

  return (
    <Box>
      <Typography variant="body1" mt={1} mb={1}>
        {text}
      </Typography>
      <Typography variant="caption" mb={1}>
        <b>{`${numberOfAttachments} Anexos`}</b>
      </Typography>
      <a
        href={filePath}
        download
        style={{ display: 'flex', alignItems: 'center', color: '#2F80ED' }}
      >
        <PdfIcon />
        <Typography ml={0.5} variant="subtitle2">
          <b>{`${filePath} (${fileSize})`}</b>
        </Typography>
      </a>
    </Box>
  );
};

export default AttachmentContent;
