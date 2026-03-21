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
// src/noticons/src/cut/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M11.6656 9.375L10.7 7.44375L13.1719 2.5H13.4375C14.4 2.5 15 3.09688 15 4.0625C15 4.33438 14.9563 4.51875 14.8344 4.7625L12.5281 9.375H11.6656ZM16.25 15.0188C16.25 16.3875 15.1375 17.5 13.7688 17.5C12.8219 17.5 11.9719 16.975 11.5469 16.1281L10 13.0344L8.45312 16.1281C8.03125 16.975 7.17813 17.5 6.23125 17.5C4.8625 17.5 3.75 16.3875 3.75 15.0188C3.75 12.6125 5.69687 10.6531 8.09688 10.6281L5.1625 4.7625C5.04063 4.51875 4.99687 4.33438 4.99687 4.0625C4.99687 3.1 5.59375 2.5 6.55937 2.5H6.825L10.8875 10.625H11.8531C14.275 10.625 16.2469 12.5969 16.2469 15.0188H16.25ZM8.17188 12.5H8.14375C6.75625 12.5 5.625 13.6281 5.625 15.0188C5.625 15.3531 5.89688 15.625 6.23125 15.625C6.4625 15.625 6.67188 15.4969 6.775 15.2875L8.16875 12.5H8.17188ZM14.375 15.0188C14.375 13.6313 13.2469 12.5 11.8562 12.5H11.8281L13.2219 15.2875C13.325 15.4937 13.5344 15.625 13.7656 15.625C14.1 15.625 14.3719 15.3531 14.3719 15.0188H14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cutIcon = createIcon("cut", iconDefinition);
export {
  iconDefinition,
  cutIcon
};
