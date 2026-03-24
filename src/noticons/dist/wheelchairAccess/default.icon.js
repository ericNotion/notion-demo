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
// src/noticons/src/wheelchairAccess/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM15.5656 11.6937C15.3281 10.9812 14.8344 10.625 14.0844 10.625H11.5656V7.8125C11.5656 6.84688 10.9687 6.25 10.0031 6.25C6.96562 6.25 5.00313 8.2125 5.00313 11.25H6.56563C6.56563 9.65938 7.23438 8.5625 8.44063 8.08438V10.9375C8.44063 11.9031 9.0375 12.5 10.0031 12.5H13.8594L14.9 15.625H16.875L15.5656 11.6937ZM10 15.9375C8.1 15.9375 6.5625 14.4 6.5625 12.5H5C5 15.2625 7.2375 17.5 10 17.5C11.4531 17.5 12.7563 16.8781 13.6688 15.8875L13.1187 14.2313C13.1187 14.2313 11.9688 15.9344 10 15.9344V15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wheelchairAccessIcon = createIcon("wheelchairAccess", iconDefinition);
export {
  wheelchairAccessIcon,
  iconDefinition
};
