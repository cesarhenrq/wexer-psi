type PinIconProps = {
  filled: boolean;
};

const PinIcon = ({ filled }: PinIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g clipPath="url(#clip0_4022_24909)">
        <path
          fill={filled ? '#2F80ED' : 'none'}
          stroke={filled ? 'none' : '#fff'}
          strokeWidth="2"
          d="M29.752 13.563l-1.887 1.885-.942-.943-5.656 5.656-.943 4.715-1.887 1.885-5.656-5.657-6.6 6.6-1.885-1.885 6.6-6.6-5.657-5.656 1.885-1.887 4.716-.943 5.656-5.656-.943-.942 1.886-1.887 11.313 11.315z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_4022_24909">
          <path fill="#fff" d="M0 0H32V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PinIcon;
