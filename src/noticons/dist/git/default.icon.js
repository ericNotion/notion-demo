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
// src/noticons/src/git/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 9.37501V10.625L10.625 18.125H9.375L1.875 10.625V9.37501L6.74687 4.50314L8.55 6.30626C8.48125 6.48126 8.44063 6.67501 8.44063 6.87501C8.44063 7.51564 8.82812 8.06564 9.37813 8.30626V12.9438C8.82812 13.1844 8.44063 13.7344 8.44063 14.375C8.44063 15.2375 9.14062 15.9375 10.0031 15.9375C10.8656 15.9375 11.5656 15.2375 11.5656 14.375C11.5656 13.7344 11.1781 13.1844 10.6281 12.9438V8.38439L12.3 10.0563C12.2312 10.2313 12.1906 10.425 12.1906 10.625C12.1906 11.4875 12.8906 12.1875 13.7531 12.1875C14.6156 12.1875 15.3156 11.4875 15.3156 10.625C15.3156 9.76251 14.6156 9.06251 13.7531 9.06251C13.5531 9.06251 13.3625 9.10314 13.1844 9.17189L11.4563 7.44376C11.525 7.26876 11.5656 7.07501 11.5656 6.87501C11.5656 6.01251 10.8656 5.31251 10.0031 5.31251C9.80312 5.31251 9.6125 5.35314 9.43438 5.42189L7.63125 3.61876L9.37813 1.87189H10.6281L18.1281 9.37189L18.125 9.37501Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gitIcon = createIcon("git", iconDefinition);
export {
  iconDefinition,
  gitIcon
};
