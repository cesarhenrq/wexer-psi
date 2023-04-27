import Box from '@mui/material/Box';
import PinIcon from '../pin-icon';
import SessionIcon from '../session-icon';
import ClipIcon from '../clip-icon';
import ClipboardLinedIcon from '../clipboard-lined-icon';
import { VerticalLine } from './styles';
import { useTheme } from '@mui/material';

type VerticalDividerProps = {
  color: '#00995D' | '#2F80ED' | '#9D28AC' | '#EA1E61';
  type: TimeLineItemType;
  index: number;
};

const VerticalDivider = ({ color, type, index }: VerticalDividerProps) => {
  const theme = useTheme();
  const icon =
    type === 'session' ? (
      <SessionIcon filled={false} />
    ) : type === 'attachment' ? (
      <ClipIcon filled={false} />
    ) : type === 'relevant_fact' ? (
      <PinIcon filled={false} />
    ) : (
      <ClipboardLinedIcon />
    );
  return (
    <Box sx={{ position: 'relative' }}>
      {index === 0 ? null : <VerticalLine color={color} theme={theme} />}
      <Box
        sx={{
          position: 'absolute',
          top: '100%',
          left: `${theme.spacing(5)}`,
          transform: 'translate(-50%, -50%)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: `${color}`,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default VerticalDivider;
