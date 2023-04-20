type SessionIconProps = {
  filled: boolean;
};

const SessionIcon = ({ filled }: SessionIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <g clipPath="url(#clip0_4022_24904)">
      <path
        fill={filled ? '#00995D' : 'none'}
        stroke={filled ? 'none' : '#fff'}
        strokeWidth="2"
        d="M14.667 2.667c5.424 0 9.901 4.048 10.578 9.286l3 4.72c.198.31.158.772-.3.97l-2.612 1.117v3.907a2.666 2.666 0 01-2.666 2.666H20l-.001 4H8v-4.925c0-1.573-.581-3.063-1.659-4.407A10.62 10.62 0 014 13.333C4 7.443 8.776 2.667 14.667 2.667zm-.707 7.684a2.332 2.332 0 00-3.3 0 2.33 2.33 0 000 3.298l4.007 4.008 4.006-4.008a2.33 2.33 0 000-3.298 2.332 2.332 0 00-3.3 0l-.706.706-.707-.706z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_4022_24904">
        <path fill="#fff" d="M0 0H32V32H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SessionIcon;
