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
// src/noticons/src/soap/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.75 6.875C18.75 7.56563 18.1906 8.125 17.5 8.125C16.8094 8.125 16.25 7.56563 16.25 6.875C16.25 6.18437 16.8094 5.625 17.5 5.625C18.1906 5.625 18.75 6.18437 18.75 6.875ZM15.3125 9.375C14.7937 9.375 14.375 9.79375 14.375 10.3125C14.375 10.8313 14.7937 11.25 15.3125 11.25C15.8312 11.25 16.25 10.8313 16.25 10.3125C16.25 9.79375 15.8312 9.375 15.3125 9.375ZM5.30936 8.125C5.14061 8.88438 4.99999 9.91875 4.99999 11.25C4.99999 12.5813 5.14061 13.6156 5.30936 14.375H9.69374C9.86249 13.6156 10.0031 12.5813 10.0031 11.25C10.0031 9.91875 9.86249 8.88438 9.69374 8.125H5.30936ZM12.6 6.85625C12.875 7.875 13.125 9.32812 13.125 11.25C13.125 13.1719 12.875 14.625 12.6 15.6438C12.2687 16.8656 11.45 17.5 10.1844 17.5H4.81874C3.55311 17.5 2.73436 16.8656 2.40311 15.6438C2.12811 14.625 1.87811 13.1719 1.87811 11.25C1.87811 9.32812 2.12811 7.875 2.40311 6.85625C2.73436 5.63438 3.55311 5 4.81874 5H10.1844C11.45 5 12.2687 5.63438 12.6 6.85625ZM11.25 11.25C11.25 9.49687 11.0187 8.20312 10.7844 7.3375C10.7 7.03125 10.4969 6.875 10.1812 6.875H4.81874C4.50311 6.875 4.29686 7.03125 4.21561 7.3375C3.97811 8.20312 3.74999 9.49687 3.74999 11.25C3.74999 13.0031 3.98124 14.2969 4.21561 15.1625C4.29999 15.4688 4.50311 15.625 4.81874 15.625H10.1781C10.4937 15.625 10.7 15.4688 10.7812 15.1625C11.0187 14.2969 11.2469 13.0031 11.2469 11.25H11.25ZM16.25 2.8125C16.25 1.95 15.55 1.25 14.6875 1.25C13.825 1.25 13.125 1.95 13.125 2.8125C13.125 3.675 13.825 4.375 14.6875 4.375C15.55 4.375 16.25 3.675 16.25 2.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var soapIcon = createIcon("soap", iconDefinition);
export {
  soapIcon,
  iconDefinition
};
