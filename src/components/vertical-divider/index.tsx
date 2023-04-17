import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SessionIcon from '../session-icon';
import { VerticalLine } from './styles';

const VerticalDivider = () => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <VerticalLine />
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: '3.5%',
            transform: 'translate(-50%, -50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SessionIcon filled={false} />
        </Box>
      </Box>
    </>
  );
};

export default VerticalDivider;
