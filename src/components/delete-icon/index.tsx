import { useTheme } from '@mui/material';

const DeleteIcon = () => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={theme.palette.error.dark}
        fillRule="evenodd"
        d="M10.666 10.667c0 .366-.3.666-.666.666a.669.669 0 01-.667-.666V8c0-.367.3-.667.667-.667.366 0 .666.3.666.667v2.667zm-4-7.782c0-.103.143-.218.334-.218h2c.19 0 .333.115.333.218V4H6.666V2.885zm0 7.782c0 .366-.3.666-.666.666a.669.669 0 01-.667-.666V8c0-.367.3-.667.667-.667.366 0 .666.3.666.667v2.667zM14 4H10.666V2.885c0-.856-.747-1.552-1.666-1.552H7c-.92 0-1.667.696-1.667 1.552V4H2c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h.666v7.334c0 1.102.898 2 2 2h6.667c1.103 0 2-.898 2-2V5.333H14c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default DeleteIcon;
