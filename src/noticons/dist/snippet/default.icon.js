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
// src/noticons/src/snippet/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5 15H6.25V16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V12.1875C2.5 11.4156 2.02188 10.9375 1.25 10.9375H0.625V9.0625H1.25C2.02188 9.0625 2.5 8.58437 2.5 7.8125V5.625C2.5 4.08125 3.45625 3.125 5 3.125H6.25V5H5C4.61562 5 4.375 5.24062 4.375 5.625V7.8125C4.375 8.8375 3.95 9.6 3.21563 10C3.95 10.4 4.375 11.1625 4.375 12.1875V14.375C4.375 14.7594 4.61562 15 5 15ZM18.75 9.0625C17.9781 9.0625 17.5 8.58437 17.5 7.8125V5.625C17.5 4.08125 16.5437 3.125 15 3.125H13.75V5H15C15.3844 5 15.625 5.24062 15.625 5.625V7.8125C15.625 8.8375 16.05 9.6 16.7844 10C16.05 10.4 15.625 11.1625 15.625 12.1875V14.375C15.625 14.7594 15.3844 15 15 15H13.75V16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V12.1875C17.5 11.4156 17.9781 10.9375 18.75 10.9375H19.375V9.0625H18.75ZM6.25 8.75C5.55937 8.75 5 9.30937 5 10C5 10.6906 5.55937 11.25 6.25 11.25C6.94063 11.25 7.5 10.6906 7.5 10C7.5 9.30937 6.94063 8.75 6.25 8.75ZM15 10C15 9.30937 14.4406 8.75 13.75 8.75C13.0594 8.75 12.5 9.30937 12.5 10C12.5 10.6906 13.0594 11.25 13.75 11.25C14.4406 11.25 15 10.6906 15 10ZM10 8.75C9.30937 8.75 8.75 9.30937 8.75 10C8.75 10.6906 9.30937 11.25 10 11.25C10.6906 11.25 11.25 10.6906 11.25 10C11.25 9.30937 10.6906 8.75 10 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var snippetIcon = createIcon("snippet", iconDefinition);
export {
  snippetIcon,
  iconDefinition
};
