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
// src/noticons/src/verified/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 10C18.125 8.73755 17.1875 7.69692 15.9719 7.52817C16.2875 7.10942 16.4781 6.59067 16.4781 6.02505C16.4781 4.6438 15.3594 3.52505 13.9781 3.52505C13.4125 3.52505 12.8938 3.71567 12.475 4.0313C12.3063 2.81567 11.2656 1.87817 10.0031 1.87817C8.74063 1.87817 7.70001 2.81567 7.53126 4.0313C7.11251 3.71567 6.59376 3.52505 6.02813 3.52505C4.64688 3.52505 3.52813 4.6438 3.52813 6.02505C3.52813 6.59067 3.71876 7.10942 4.03438 7.52817C2.81876 7.69692 1.88126 8.73755 1.88126 10C1.88126 11.2625 2.81876 12.3032 4.03438 12.4719C3.71876 12.8907 3.52813 13.4094 3.52813 13.975C3.52813 15.3563 4.64688 16.475 6.02813 16.475C6.59376 16.475 7.11251 16.2844 7.53126 15.9688C7.70001 17.1844 8.74063 18.1219 10.0031 18.1219C11.2656 18.1219 12.3063 17.1844 12.475 15.9688C12.8938 16.2844 13.4125 16.475 13.9781 16.475C15.3594 16.475 16.4781 15.3563 16.4781 13.975C16.4781 13.4094 16.2875 12.8907 15.9719 12.4719C17.1875 12.3032 18.125 11.2625 18.125 10ZM9.06251 13.8251L5.62501 10.3875L6.95001 9.06255L9.06251 11.175L13.3625 6.87505L14.6875 8.20005L9.06251 13.8251Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var verifiedIcon = createIcon("verified", iconDefinition);
export {
  verifiedIcon,
  iconDefinition
};
