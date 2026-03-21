// src/nds-icons/SvgIcon.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
function SvgIcon({
  children,
  viewBox,
  style,
  className,
  label
}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...label !== undefined ? { "aria-label": label } : { "aria-hidden": true },
    role: "graphics-symbol",
    viewBox,
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      fill: "inherit",
      flexShrink: 0,
      ...style
    },
    className,
    children
  }, undefined, false, undefined, this);
}

// src/nds-icons/iconUtils.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var iconGroupVariantNames = [
  "fillSmall",
  "small",
  "fill",
  "default"
];
var logoVariantNames = ["default", "darkMode"];
var deprecatedIconGroupVariantNames = [
  "micro",
  "mini",
  "small",
  "default",
  "large",
  "extraLarge",
  "max"
];
var iconVariantNames = [
  ...iconGroupVariantNames,
  ...deprecatedIconGroupVariantNames,
  ...logoVariantNames
];
var ICON_SIZE = {
  xxs: 12,
  xs: 14,
  sm: 16,
  default: 20,
  lg: 22,
  xl: 32
};
var ICON_SIZE_FOR_VARIANT = {
  default: ICON_SIZE.default,
  small: ICON_SIZE.sm,
  fill: ICON_SIZE.default,
  fillSmall: ICON_SIZE.sm,
  darkMode: ICON_SIZE.default,
  micro: 14,
  mini: 14,
  large: 24,
  max: 28,
  extraLarge: 36
};
function createIcon(name, iconDefinition) {
  const { viewBox, svg } = iconDefinition;
  const finalViewBox = viewBox ?? `0 0 ${ICON_SIZE.default} ${ICON_SIZE.default}`;
  const iconFunction = (style, className) => {
    const finalClassName = className ? `${name} ${className}` : name;
    return /* @__PURE__ */ jsxDEV2(SvgIcon, {
      viewBox: finalViewBox,
      className: finalClassName,
      style,
      children: svg
    }, undefined, false, undefined, this);
  };
  return Object.assign(iconFunction, {
    __iconDefinition: { ...iconDefinition, viewBox: finalViewBox }
  });
}

// src/nds-icons/Icon.tsx
"use client";
// src/noticons/src/language/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.25 6.0125L6.925 7.8125H5.575L6.25 6.0125ZM8.10938 7.45625C8.8875 6.43438 10.0063 5.69375 11.3906 5.30937C10.575 3.53437 8.75937 2.5 6.25 2.5C2.77813 2.5 0.625 4.475 0.625 7.65625C0.625 9.27812 1.1875 10.5844 2.19688 11.475L0.625 13.0469L1.09375 13.75C2.3625 13.75 3.53125 13.325 4.47188 12.6156C5.01562 12.7437 5.60938 12.8125 6.25 12.8125C6.50625 12.8125 6.75312 12.7969 6.99687 12.7781C6.91875 12.3438 6.875 11.8875 6.875 11.4062C6.875 10.5531 7.00937 9.77187 7.25625 9.0625H5.10625L4.75625 10H3.4375L5.3125 5H7.1875L8.10938 7.45625ZM13.75 11.6625C14.0594 11.3813 14.325 11.0406 14.5 10.625H13.0031C13.1781 11.0406 13.4437 11.3813 13.7531 11.6625H13.75ZM17.8031 15.225L19.375 16.7969L18.9062 17.5C17.6375 17.5 16.4688 17.075 15.5281 16.3656C14.9844 16.4937 14.3906 16.5625 13.75 16.5625C10.2781 16.5625 8.125 14.5875 8.125 11.4062C8.125 8.225 10.2781 6.25 13.75 6.25C17.2219 6.25 19.375 8.225 19.375 11.4062C19.375 13.0281 18.8125 14.3344 17.8031 15.225ZM16.5625 9.375H14.375V8.4375H13.125V9.375H10.9375V10.625H11.7156C11.8969 11.2406 12.2406 11.8313 12.7219 12.35C11.8594 12.775 11.0406 12.8937 11.0406 12.8937L11.4781 14.0656C12.3469 13.9094 13.1063 13.6031 13.7469 13.1969C14.3875 13.6031 15.15 13.9125 16.0156 14.0656L16.4531 12.8937C16.4531 12.8937 15.6344 12.775 14.7719 12.35C15.2563 11.8313 15.5969 11.2406 15.7781 10.625H16.5562V9.375H16.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var languageIcon = createIcon("language", iconDefinition);
export {
  languageIcon,
  iconDefinition
};
