import { IconProps } from "./types";

export function PlayIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      className={className}
      {...props}
    >
      <g filter="url(#a)">
        <path
          fill="url(#b)"
          d="M8.367 18.703a.988.988 0 0 1-.773-.344c-.203-.229-.305-.536-.305-.922V6.297c0-.386.102-.69.305-.914a.988.988 0 0 1 .773-.344c.167 0 .326.029.477.086.156.057.323.135.5.234l9.21 5.336c.34.193.581.375.727.547.146.172.219.38.219.625a.933.933 0 0 1-.219.625c-.146.172-.388.357-.726.555l-9.211 5.328a3.103 3.103 0 0 1-.5.242 1.34 1.34 0 0 1-.477.086Z"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="12.5"
          x2="12.5"
          y1="2.5"
          y2="21.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity=".9" />
        </linearGradient>
        <filter
          id="a"
          width="20.211"
          height="21.664"
          x="3.289"
          y="1.039"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_84_457"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_84_457"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
