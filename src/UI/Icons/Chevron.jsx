import React from "react";
const Chevron = ({ size, onClick, style, className }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      style={{
        width: size,
        height: size,
        transition: "all 0.7s ease",
        ...style,
      }}
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.46967 0.96967C0.735936 0.703403 1.1526 0.679197 1.44621 0.897052L1.53033 0.96967L8 7.439L14.4697 0.96967C14.7359 0.703403 15.1526 0.679197 15.4462 0.897052L15.5303 0.96967C15.7966 1.23594 15.8208 1.6526 15.6029 1.94621L15.5303 2.03033L8.53033 9.03033C8.26406 9.2966 7.8474 9.3208 7.55379 9.10295L7.46967 9.03033L0.46967 2.03033C0.176777 1.73744 0.176777 1.26256 0.46967 0.96967Z"
        fill="#2C264B"
      />
    </svg>
  );
};

export default Chevron;
