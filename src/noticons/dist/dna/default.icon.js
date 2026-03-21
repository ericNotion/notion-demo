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
// src/noticons/src/dna/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M12.6031 9.21875L14.0625 8.125C15.3594 7.15312 15.9375 5.99688 15.9375 4.375V2.5H14.0625V3.75H5.9375V2.5H4.0625V4.375C4.0625 5.99688 4.64062 7.15312 5.9375 8.125L11.7719 12.5H8.23125L8.95937 11.9531L7.39687 10.7812L5.9375 11.875C4.64062 12.8469 4.0625 14.0031 4.0625 15.625V17.5H5.9375V16.25H14.0625V17.5H15.9375V15.625C15.9375 14.0031 15.3594 12.8469 14.0625 11.875L8.22813 7.5H11.7688L11.0406 8.04688L12.6031 9.21875ZM5.9875 5H14.0125C13.9281 5.49688 13.725 5.8875 13.3656 6.25H6.63125C6.27187 5.8875 6.06875 5.49688 5.98437 5H5.9875ZM14.0125 15H5.9875C6.07187 14.5031 6.275 14.1125 6.63437 13.75H13.3687C13.7281 14.1125 13.9312 14.5031 14.0156 15H14.0125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dnaIcon = createIcon("dna", iconDefinition);
export {
  iconDefinition,
  dnaIcon
};
