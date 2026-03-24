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
// src/noticons/src/dance/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M3.25 15.5L5 15.9375V16.5625L3.25 17L2.8125 18.75H2.1875L1.75 17L0 16.5625V15.9375L1.75 15.5L2.1875 13.75H2.8125L3.25 15.5ZM16.25 10.625C16.25 14.0781 13.4531 16.875 10 16.875C6.54688 16.875 3.75 14.0781 3.75 10.625C3.75 7.82812 5.59063 5.45937 8.125 4.6625V3.75H9.375V2.5H10.625V3.75H11.875V4.6625C14.4094 5.45937 16.25 7.82812 16.25 10.625ZM10 5.625C9.42188 5.625 8.91875 6.63125 8.64688 8.125H11.35C11.0813 6.63125 10.575 5.625 9.99687 5.625H10ZM7.9375 15.175C7.67812 14.5844 7.49375 13.8813 7.375 13.125H5.675C6.19688 14.025 6.9875 14.7438 7.9375 15.175ZM7.94063 6.07188C6.9875 6.50313 6.19375 7.225 5.67188 8.125H7.37813C7.45938 7.61562 7.56875 7.14062 7.7 6.71562C7.775 6.47813 7.85625 6.26562 7.94063 6.07188ZM11.35 13.125H8.64688C8.91562 14.6187 9.42188 15.625 10 15.625C10.5781 15.625 11.0813 14.6187 11.3531 13.125H11.35ZM11.5594 10.625C11.5594 10.1938 11.5406 9.775 11.5094 9.375H8.4875C8.45625 9.775 8.4375 10.1938 8.4375 10.625C8.4375 11.0562 8.45625 11.475 8.4875 11.875H11.5094C11.5406 11.475 11.5594 11.0562 11.5594 10.625ZM12.625 8.125H14.325C13.8031 7.225 13.0125 6.50625 12.0625 6.075C12.3219 6.66563 12.5063 7.36875 12.625 8.125ZM14.8344 9.375H12.7656C12.7937 9.79062 12.8094 10.2094 12.8094 10.625C12.8094 11.0406 12.7906 11.4688 12.7625 11.875H14.8344C14.9375 11.475 14.9969 11.0562 14.9969 10.625C14.9969 10.1938 14.9375 9.775 14.8344 9.375ZM19.9969 3.4375L17.7469 2.875L17.1844 0.625H16.5594L15.9969 2.875L13.7469 3.4375V4.0625L15.9969 4.625L16.5594 6.875H17.1844L17.7469 4.625L19.9969 4.0625V3.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var danceIcon = createIcon("dance", iconDefinition);
export {
  iconDefinition,
  danceIcon
};
