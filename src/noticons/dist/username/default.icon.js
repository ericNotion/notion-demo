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
// src/noticons/src/username/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C11.5406 17.5 12.9688 17.0344 14.1594 16.2406L13.1187 14.6812C12.225 15.2781 11.1531 15.6281 10 15.6281C6.89375 15.6281 4.375 13.1094 4.375 10.0031C4.375 6.89687 6.89375 4.37813 10 4.37813C13.1062 4.37813 15.625 6.89687 15.625 10.0031C15.625 10.9344 15.2937 11.5656 14.5312 11.5656C13.8656 11.5656 13.4375 11.1375 13.4375 10.4719V6.87813H11.5625V7.31875C11.0281 6.84062 10.3313 6.56563 9.53125 6.56563C7.70625 6.56563 6.25 7.99687 6.25 10.0031C6.25 12.0094 7.70625 13.4406 9.53125 13.4406C10.6031 13.4406 11.4906 12.9437 12.0438 12.1313C12.5656 12.9312 13.4656 13.4406 14.5312 13.4406C16.2969 13.4406 17.5 12.3469 17.5 10.0031C17.5 5.8625 14.1406 2.50313 10 2.50313V2.5ZM9.6875 11.5625C8.775 11.5625 8.125 10.9125 8.125 10C8.125 9.0875 8.775 8.4375 9.6875 8.4375C10.6 8.4375 11.25 9.0875 11.25 10C11.25 10.9125 10.6 11.5625 9.6875 11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var usernameIcon = createIcon("username", iconDefinition);
export {
  usernameIcon,
  iconDefinition
};
