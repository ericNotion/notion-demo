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
// src/noticons/src/userCircleDashed/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M9.99999 10C8.64999 10 7.81249 9.1625 7.81249 7.8125C7.81249 6.4625 8.64999 5.625 9.99999 5.625C11.35 5.625 12.1875 6.4625 12.1875 7.8125C12.1875 9.1625 11.35 10 9.99999 10ZM9.99999 4.375C10.5406 4.375 11.0656 4.45625 11.5594 4.6L12.2812 2.85625C11.5625 2.625 10.7937 2.5 9.99686 2.5C9.19999 2.5 8.43436 2.625 7.71249 2.85625L8.43436 4.6C8.93124 4.45625 9.45311 4.375 9.99374 4.375H9.99999ZM14.925 7.28437L16.6656 6.5625C15.95 5.18125 14.8187 4.05 13.4375 3.33438L12.7156 5.075C13.6437 5.5875 14.4125 6.35625 14.925 7.28437ZM6.55936 12.6969C7.35936 13.7188 8.60311 14.375 9.99999 14.375C11.3969 14.375 12.6406 13.7156 13.4406 12.6969C12.6844 11.7719 11.5 11.25 9.99999 11.25C8.49999 11.25 7.31561 11.7688 6.55936 12.6969ZM7.28436 5.07812L6.56249 3.3375C5.18124 4.05313 4.04999 5.18438 3.33436 6.56563L5.07499 7.2875C5.58749 6.35938 6.35624 5.59375 7.28436 5.07812ZM17.1469 7.71875L15.4031 8.44063C15.5469 8.9375 15.6281 9.45937 15.6281 10C15.6281 10.5406 15.5469 11.0656 15.4031 11.5594L17.1469 12.2812C17.3781 11.5625 17.5031 10.7937 17.5031 9.99687C17.5031 9.2 17.3781 8.43438 17.1469 7.7125V7.71875ZM12.7187 14.925L13.4406 16.6656C14.8219 15.95 15.9531 14.8188 16.6687 13.4375L14.9281 12.7156C14.4156 13.6437 13.6469 14.4125 12.7187 14.925ZM10.0031 15.625C9.46249 15.625 8.93749 15.5437 8.44374 15.4L7.72186 17.1438C8.44061 17.375 9.20936 17.5 10.0062 17.5C10.8031 17.5 11.5687 17.375 12.2906 17.1438L11.5687 15.4C11.0719 15.5437 10.55 15.625 10.0094 15.625H10.0031ZM5.07811 12.7156L3.33749 13.4375C4.05311 14.8188 5.18436 15.95 6.56561 16.6656L7.28749 14.925C6.35936 14.4125 5.59061 13.6437 5.07811 12.7156ZM4.37811 10C4.37811 9.45937 4.45936 8.93438 4.60311 8.44063L2.85936 7.71875C2.62811 8.4375 2.50311 9.20625 2.50311 10.0031C2.50311 10.8 2.62811 11.5656 2.85936 12.2875L4.60311 11.5656C4.45936 11.0687 4.37811 10.5469 4.37811 10.0063V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var userCircleDashedIcon = createIcon("userCircleDashed", iconDefinition);
export {
  userCircleDashedIcon,
  iconDefinition
};
