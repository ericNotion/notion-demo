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
// src/noticons/src/circleDashed/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M4.6 11.5594L2.85625 12.2812C2.625 11.5625 2.5 10.7937 2.5 9.99687C2.5 9.2 2.625 8.43438 2.85625 7.7125L4.6 8.43437C4.45625 8.93125 4.375 9.45312 4.375 9.99375C4.375 10.5344 4.45625 11.0594 4.6 11.5531V11.5594ZM5.075 12.7156L3.33438 13.4375C4.05 14.8188 5.18125 15.95 6.5625 16.6656L7.28437 14.925C6.35625 14.4125 5.5875 13.6437 5.075 12.7156ZM3.33438 6.5625L5.075 7.28437C5.5875 6.35625 6.35625 5.59062 7.28437 5.075L6.5625 3.33438C5.18125 4.05 4.05 5.18125 3.33438 6.5625ZM14.925 7.28437L16.6656 6.5625C15.95 5.18125 14.8188 4.05 13.4375 3.33438L12.7156 5.075C13.6437 5.5875 14.4125 6.35625 14.925 7.28437ZM17.1438 7.71875L15.4 8.44063C15.5437 8.9375 15.625 9.45937 15.625 10C15.625 10.5406 15.5437 11.0656 15.4 11.5594L17.1438 12.2812C17.375 11.5625 17.5 10.7937 17.5 9.99687C17.5 9.2 17.375 8.43438 17.1438 7.7125V7.71875ZM12.7156 14.925L13.4375 16.6656C14.8188 15.95 15.95 14.8188 16.6656 13.4375L14.925 12.7156C14.4125 13.6437 13.6437 14.4125 12.7156 14.925ZM7.71563 2.85625L8.4375 4.6C8.93437 4.45625 9.45625 4.375 9.99687 4.375C10.5375 4.375 11.0625 4.45625 11.5562 4.6L12.2781 2.85625C11.5594 2.625 10.7906 2.5 9.99375 2.5C9.19688 2.5 8.43125 2.625 7.70937 2.85625H7.71563ZM10 15.625C9.45937 15.625 8.93438 15.5437 8.44063 15.4L7.71875 17.1438C8.4375 17.375 9.20625 17.5 10.0031 17.5C10.8 17.5 11.5656 17.375 12.2875 17.1438L11.5656 15.4C11.0687 15.5437 10.5469 15.625 10.0063 15.625H10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleDashedIcon = createIcon("circleDashed", iconDefinition);
export {
  iconDefinition,
  circleDashedIcon
};
