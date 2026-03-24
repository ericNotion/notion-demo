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
// src/noticons/src/menstrualPad/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.3344 2.5C11.6875 2.5 10.1969 3.46875 9.525 4.975L8.94063 6.29062L7.65 5L4.99687 7.65312L6.2875 8.94375L4.97187 9.52812C3.46562 10.1969 2.49687 11.6906 2.49687 13.3375C2.49687 15.6375 4.3625 17.5031 6.6625 17.5031C8.30937 17.5031 9.8 16.5344 10.4719 15.0281L11.0563 13.7125L12.3469 15.0031L15 12.35L13.7094 11.0594L15.025 10.475C16.5313 9.80625 17.5 8.3125 17.5 6.66563C17.5 4.36562 15.6344 2.5 13.3344 2.5ZM14.2656 8.7625L12.5812 9.5125C11.2125 10.1219 10.1219 11.2094 9.5125 12.5812L8.7625 14.2656C8.39375 15.0938 7.57188 15.6281 6.66875 15.6281C5.40625 15.6281 4.37812 14.6 4.37812 13.3375C4.37812 12.4312 4.9125 11.6094 5.74063 11.2437L7.425 10.4938C8.79375 9.88438 9.88438 8.79688 10.4938 7.425L11.2437 5.74063C11.6125 4.9125 12.4344 4.37813 13.3375 4.37813C14.6 4.37813 15.6281 5.40625 15.6281 6.66875C15.6281 7.575 15.0938 8.39688 14.2656 8.7625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var menstrualPadIcon = createIcon("menstrualPad", iconDefinition);
export {
  menstrualPadIcon,
  iconDefinition
};
