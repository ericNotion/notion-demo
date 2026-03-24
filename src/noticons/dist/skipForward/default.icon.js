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
// src/noticons/src/skipForward/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10.9375 6.56245H13.6344L12.9125 5.84058C11.9375 4.86558 10.6562 4.37495 9.37813 4.37495C6.61562 4.37495 4.37813 6.61245 4.37813 9.37495H2.50313C2.50313 5.57808 5.58125 2.49995 9.37813 2.49995C11.1375 2.49995 12.8969 3.17183 14.2406 4.51245L15.0031 5.27495V2.49683H16.8781V8.43433H10.9406V6.55933L10.9375 6.56245ZM15.625 11.25C13.9 11.25 12.5 12.65 12.5 14.375C12.5 16.1 13.9 17.5 15.625 17.5C17.35 17.5 18.75 16.1 18.75 14.375C18.75 12.65 17.35 11.25 15.625 11.25ZM7.5 14.375C7.5 16.1 6.1 17.5 4.375 17.5C2.65 17.5 1.25 16.1 1.25 14.375C1.25 12.65 2.65 11.25 4.375 11.25C6.1 11.25 7.5 12.65 7.5 14.375ZM5.625 14.375C5.625 13.6843 5.06562 13.125 4.375 13.125C3.68438 13.125 3.125 13.6843 3.125 14.375C3.125 15.0656 3.68438 15.625 4.375 15.625C5.06562 15.625 5.625 15.0656 5.625 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skipForwardIcon = createIcon("skipForward", iconDefinition);
export {
  skipForwardIcon,
  iconDefinition
};
