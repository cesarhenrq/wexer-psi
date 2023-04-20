type ClipIconProps = {
  filled: boolean;
};

const ClipIcon = ({ filled }: ClipIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <g clipPath="url(#clip0_4022_24912)">
      <path
        fill={filled ? '#9D28AC' : '#fff'}
        d="M19.77 10.343l-7.54 7.542a1.333 1.333 0 101.885 1.886l7.542-7.542A4 4 0 0016 6.572l-7.543 7.543a6.667 6.667 0 109.428 9.426L25.428 16l1.885 1.885-7.542 7.543a9.332 9.332 0 01-13.2 0 9.333 9.333 0 010-13.2l7.544-7.541a6.667 6.667 0 019.426 9.426l-7.54 7.546a4.001 4.001 0 01-5.658-5.66l7.542-7.542 1.886 1.886z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_4022_24912">
        <path fill="#fff" d="M0 0H32V32H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default ClipIcon;
