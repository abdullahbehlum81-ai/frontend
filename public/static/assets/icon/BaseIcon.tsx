import React from "react";

export interface IconProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  strokeWidth?: number;
  fill?: string;
  stroke?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  viewBox?: string;
}

export function BaseIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  fill = "none",
  stroke,
  className,
  onClick,
  children,
  strokeWidth,
  viewBox = "0 0 24 24",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke || color}
      strokeWidth={strokeWidth}
      className={className}
      onClick={onClick}
    >
      {children}
    </svg>
  );
}
