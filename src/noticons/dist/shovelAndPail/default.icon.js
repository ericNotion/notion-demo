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
// src/noticons/src/shovelAndPail/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.25 4.375V5C16.25 5.575 16.0469 5.59375 15.7687 5.61875L15 5.6875L14.2313 5.61875C13.9531 5.59375 13.75 5.575 13.75 5V4.375H16.25ZM18.125 2.5H11.875V5C11.875 6.43438 12.7031 7.3625 14.0625 7.48438V10.4219C12.6938 10.7531 11.875 11.8469 11.875 13.4375V16.875H18.125V13.4375C18.125 11.8469 17.3062 10.7531 15.9375 10.4219V7.48438C17.2969 7.3625 18.125 6.43438 18.125 5V2.5ZM6.25 2.5C3.9375 2.5 2.5 3.9375 2.5 6.25V8.125H0.625V10H2.5V16.875H10V10H11.875V8.125H10V6.25C10 3.9375 8.5625 2.5 6.25 2.5ZM4.375 8.125V6.25C4.375 4.97187 4.97188 4.375 6.25 4.375C7.52812 4.375 8.125 4.97187 8.125 6.25V8.125H4.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shovelAndPailIcon = createIcon("shovelAndPail", iconDefinition);
export {
  shovelAndPailIcon,
  iconDefinition
};
