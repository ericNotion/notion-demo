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
// src/noticons/src/reference/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M4.375 11.875C3.34063 11.875 2.5 11.0344 2.5 10C2.5 8.96562 3.34063 8.125 4.375 8.125C5.40937 8.125 6.25 8.96562 6.25 10C6.25 11.0344 5.40937 11.875 4.375 11.875ZM15.625 8.125C14.5906 8.125 13.75 8.96562 13.75 10C13.75 11.0344 14.5906 11.875 15.625 11.875C16.6594 11.875 17.5 11.0344 17.5 10C17.5 8.96562 16.6594 8.125 15.625 8.125ZM10 6.25C11.0344 6.25 11.875 5.40937 11.875 4.375C11.875 3.34063 11.0344 2.5 10 2.5C8.96562 2.5 8.125 3.34063 8.125 4.375C8.125 5.40937 8.96562 6.25 10 6.25ZM10 13.75C8.96562 13.75 8.125 14.5906 8.125 15.625C8.125 16.6594 8.96562 17.5 10 17.5C11.0344 17.5 11.875 16.6594 11.875 15.625C11.875 14.5906 11.0344 13.75 10 13.75ZM16.25 5.075L14.925 3.75L10 8.675L5.075 3.75L3.75 5.075L8.675 10L3.75 14.925L5.075 16.25L10 11.325L14.925 16.25L16.25 14.925L11.325 10L16.25 5.075Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var referenceIcon = createIcon("reference", iconDefinition);
export {
  referenceIcon,
  iconDefinition
};
