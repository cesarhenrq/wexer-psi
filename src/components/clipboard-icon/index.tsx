type ClipboardIconProps = {
  color: string;
  width: string;
  height: string;
};

const ClipboardIcon = ({ color, width, height }: ClipboardIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        fill={color}
        d="M17 2h3a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h3V0h2v2h6V0h2v2zM7 8v2h10V8H7zm0 4v2h10v-2H7z"
      ></path>
    </svg>
  );
};

export default ClipboardIcon;
