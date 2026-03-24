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
// src/noticons/src/passport/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.95625 10.625C8.04062 11.1562 8.1625 11.6594 8.325 12.1031C7.66875 11.775 7.12188 11.2594 6.75625 10.625H7.95625ZM6.75625 6.875H7.95625C8.04062 6.34375 8.1625 5.84063 8.325 5.39688C7.66875 5.725 7.12188 6.24062 6.75625 6.875ZM7.8125 8.75C7.8125 8.54375 7.81875 8.33437 7.83125 8.125H6.30625C6.27188 8.32812 6.25 8.5375 6.25 8.75C6.25 8.9625 6.27188 9.17188 6.30625 9.375H7.83125C7.82187 9.16563 7.8125 8.95625 7.8125 8.75ZM9.22188 6.875H10.7781C10.3156 4.375 9.68125 4.375 9.22188 6.875ZM13.2438 6.875C12.8781 6.24062 12.3313 5.72813 11.675 5.39688C11.8375 5.8375 11.9594 6.34063 12.0438 6.875H13.2438ZM12.1875 8.75C12.1875 8.95625 12.1812 9.16563 12.1687 9.375H13.6938C13.7281 9.17188 13.75 8.9625 13.75 8.75C13.75 8.5375 13.7281 8.32812 13.6938 8.125H12.1687C12.1781 8.33437 12.1875 8.54375 12.1875 8.75ZM16.25 5V15C16.25 16.5437 15.2937 17.5 13.75 17.5H3.75V2.5H13.75C15.2937 2.5 16.25 3.45625 16.25 5ZM11.875 15H8.125V16.25H11.875V15ZM15 8.75C15 5.9875 12.7625 3.75 10 3.75C7.2375 3.75 5 5.9875 5 8.75C5 11.5125 7.2375 13.75 10 13.75C12.7625 13.75 15 11.5125 15 8.75ZM9.08125 8.125C9.07187 8.325 9.0625 8.53125 9.0625 8.75C9.0625 8.96875 9.06875 9.175 9.08125 9.375H10.9219C10.9313 9.175 10.9406 8.96875 10.9406 8.75C10.9406 8.53125 10.9344 8.325 10.9219 8.125H9.08125ZM10.7781 10.625H9.22188C9.68438 13.125 10.3188 13.125 10.7781 10.625ZM11.675 12.1031C12.3313 11.775 12.8781 11.2594 13.2438 10.625H12.0438C11.9594 11.1562 11.8375 11.6594 11.675 12.1031Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var passportIcon = createIcon("passport", iconDefinition);
export {
  passportIcon,
  iconDefinition
};
