import React from "react";
import { ReactComponent as Gmail } from "react";

const Icon = ({ icon, onClick, rotation, width, height }) => {
  const uIcons = {
    gmail: Gmail,
  };

  const IconComponent = uIcons[icon];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className="icon"
      style={{
        cursor: "pointer",
        width: width,
        height: height,
        transform: rotation,
      }}
      onClick={onClick}
    />
  );
};

Icon.defaultProps = {
  width: 14,
  height: 14,
};

export default Icon;
