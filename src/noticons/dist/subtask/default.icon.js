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
// src/noticons/src/subtask/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.9375 11.875H15.625V8.75H10.9375V7.5H11.25C12.9844 7.5 14.0625 6.42188 14.0625 4.6875C14.0625 2.95312 12.9844 1.875 11.25 1.875H8.75C7.01562 1.875 5.9375 2.95312 5.9375 4.6875C5.9375 6.42188 7.01562 7.5 8.75 7.5H9.0625V8.75H4.375V11.875H4.0625C2.32812 11.875 1.25 12.9531 1.25 14.6875C1.25 16.4219 2.32812 17.5 4.0625 17.5H6.5625C8.29688 17.5 9.375 16.4219 9.375 14.6875C9.375 12.9531 8.29688 11.875 6.5625 11.875H6.25V10.625H13.75V11.875H13.4375C11.7031 11.875 10.625 12.9531 10.625 14.6875C10.625 16.4219 11.7031 17.5 13.4375 17.5H15.9375C17.6719 17.5 18.75 16.4219 18.75 14.6875C18.75 12.9531 17.6719 11.875 15.9375 11.875ZM7.8125 4.6875C7.8125 4.10938 8.17188 3.75 8.75 3.75H11.25C11.8281 3.75 12.1875 4.10938 12.1875 4.6875C12.1875 5.26562 11.8281 5.625 11.25 5.625H8.75C8.17188 5.625 7.8125 5.26562 7.8125 4.6875ZM7.5 14.6875C7.5 15.2656 7.14062 15.625 6.5625 15.625H4.0625C3.48438 15.625 3.125 15.2656 3.125 14.6875C3.125 14.1094 3.48438 13.75 4.0625 13.75H6.5625C7.14062 13.75 7.5 14.1094 7.5 14.6875ZM15.9375 15.625H13.4375C12.8594 15.625 12.5 15.2656 12.5 14.6875C12.5 14.1094 12.8594 13.75 13.4375 13.75H15.9375C16.5156 13.75 16.875 14.1094 16.875 14.6875C16.875 15.2656 16.5156 15.625 15.9375 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var subtaskIcon = createIcon("subtask", iconDefinition);
export {
  subtaskIcon,
  iconDefinition
};
