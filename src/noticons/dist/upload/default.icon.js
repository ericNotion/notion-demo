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
// src/noticons/src/upload/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 9.375C18.125 11.3031 16.9281 12.5 15 12.5H13.75V10.625H15C15.8875 10.625 16.25 10.2625 16.25 9.375C16.25 8.4875 15.8875 8.125 15 8.125H13.75V6.25C13.75 4.20625 12.6687 3.125 10.625 3.125C8.58125 3.125 7.5 4.20625 7.5 6.25V6.875H5.625C4.34687 6.875 3.75 7.47188 3.75 8.75C3.75 10.0281 4.34687 10.625 5.625 10.625H6.25V12.5H5.625C3.3125 12.5 1.875 11.0625 1.875 8.75C1.875 6.4375 3.3125 5 5.625 5C5.66563 5 5.70312 5.00313 5.74375 5.00625C6.2 2.6625 7.98125 1.25 10.625 1.25C13.7094 1.25 15.625 3.16563 15.625 6.25C15.625 6.26562 15.625 6.28125 15.625 6.29688C17.1844 6.53125 18.1281 7.66563 18.1281 9.375H18.125ZM5.9375 13.9875L7.2625 15.3125L9.0625 13.5125V18.75H10.9375V13.5125L12.7375 15.3125L14.0625 13.9875L10 9.925L5.9375 13.9875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var uploadIcon = createIcon("upload", iconDefinition);
export {
  uploadIcon,
  iconDefinition
};
