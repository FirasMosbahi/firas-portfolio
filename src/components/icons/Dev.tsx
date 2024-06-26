import * as React from "react";
import type { SVGProps } from "react";
const SvgDev = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="-15.84 -15.84 55.68 55.68"
    {...props}
  >
    <rect
      width={55.68}
      height={55.68}
      x={-15.84}
      y={-15.84}
      fill="#CCC"
      strokeWidth={0}
      rx={4.454}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 8-4 3.692L7 16m10-8 4 3.692L17 16M14 4l-4 16"
    />
  </svg>
);
export default SvgDev;
