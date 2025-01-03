const HeartIcon = ({ className = " text-red-500", filled = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "currentColor" : "none"}
      height={20}
      width={20}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c-.34 0-.68-.1-.97-.3C7.66 18.59 2 13.7 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 5.2-5.66 10.09-9.03 12.2-.29.2-.63.3-.97.3z"
      />
    </svg>
  );
};

export default HeartIcon;
