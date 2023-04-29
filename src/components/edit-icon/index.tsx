import { useTheme } from '@mui/material';

const EditIcon = () => {
  const theme = useTheme();
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={theme.palette.primary.dark}
        d="M3.333 12.667h.943l6.21-6.21-.943-.942-6.21 6.21v.942zM14 14H2v-2.829l8.957-8.956a.667.667 0 01.942 0L13.785 4.1a.667.667 0 010 .942l-7.623 7.624H14V14zm-3.515-9.428l.943.943.943-.943-.943-.943-.943.943z"
      ></path>
    </svg>
  );
};

export default EditIcon;
