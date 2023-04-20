import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PdfIcon from '../pdf-icon';

type AttachmentContentProps = {
  text: string;
  numberOfAttachments: number;
};

const AttachmentContent = ({
  text,
  numberOfAttachments,
}: AttachmentContentProps) => (
  <Box>
    <Typography variant="body1" mt={1} mb={1}>
      {text}
    </Typography>
    <Typography variant="caption" mb={1}>
      <b>{`${numberOfAttachments} Anexos`}</b>
    </Typography>
    <a
      href="caminho_do_arquivo.pdf"
      download
      style={{ display: 'flex', alignItems: 'center', color: '#2F80ED' }}
    >
      <PdfIcon />
      <Typography ml={0.5} variant="subtitle2">
        <b>caminho_do_arquivo.pdf(233 KB)</b>
      </Typography>
    </a>
  </Box>
);

export default AttachmentContent;
