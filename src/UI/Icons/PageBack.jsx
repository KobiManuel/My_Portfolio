import React from "react";
import PropTypes from "prop-types";
const PageBack = ({ onClick, size = 20 }) => {
  return (
    <svg
      style={{ width: size, height: size }}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="512"
      height="512"
    >
      <g id="_01_align_center" dataName="01 align center">
        <path d="M3.121,11.293,13.013,1.4,11.6-.013,1.707,9.879a3,3,0,0,0,0,4.242l9.885,9.885,1.4141.414L3.122,12.707A1,1,0,0,1,3.121,11.293Z" />
        <path d="M23,1.417,21.583,0l11.29,11.29a1,1,0,0,0,0,1.414L21.584,24,23,22.584,12.414,12Z" />
      </g>
    </svg>
  );
};
PageBack.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
};
export default PageBack;
