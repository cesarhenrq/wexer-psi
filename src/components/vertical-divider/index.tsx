import Box from '@mui/material/Box';
import PinIcon from '../pin-icon';
import SessionIcon from '../session-icon';
import ClipIcon from '../clip-icon';
import ClipboardLinedIcon from '../clipboard-lined-icon';
import { VerticalLine } from './styles';

type VerticalDividerProps = {
  color: '#00995D' | '#2F80ED' | '#9D28AC' | '#EA1E61';
  type:
    | 'session'
    | 'attachment'
    | 'pertinent-fact'
    | 'psychological-assessment';
};

const VerticalDivider = ({ color, type }: VerticalDividerProps) => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <VerticalLine color={color} />
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: '3.5%',
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
          {type === 'session' ? (
            <SessionIcon filled={false} />
          ) : type === 'attachment' ? (
            <ClipIcon filled={false} />
          ) : type === 'pertinent-fact' ? (
            <PinIcon filled={false} />
          ) : (
            <ClipboardLinedIcon />
          )}
        </Box>
      </Box>
    </>
  );
};

export default VerticalDivider;
