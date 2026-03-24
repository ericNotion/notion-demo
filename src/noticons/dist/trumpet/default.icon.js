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
// src/noticons/src/trumpet/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M17.5 3.125C17.5 5.4375 16.0625 6.875 13.75 6.875H10V5.625H6.25V6.875H0V8.75H2.50937C2.1 9.42812 1.875 10.2719 1.875 11.25C1.875 13.95 3.55 15.625 6.25 15.625H10C12.7 15.625 14.375 13.95 14.375 11.25C14.375 10.2719 14.1531 9.42812 13.7406 8.75H13.75C16.0625 8.75 17.5 10.1875 17.5 12.5H20V3.125H17.5ZM8.75 8.75V13.75H7.5V8.75H8.75ZM3.75 11.25C3.75 9.70625 4.70625 8.75 6.25 8.75V13.75C4.70625 13.75 3.75 12.7937 3.75 11.25ZM12.5 11.25C12.5 12.7937 11.5437 13.75 10 13.75V8.75C11.5437 8.75 12.5 9.70625 12.5 11.25Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M17.5 3.125C17.5 5.4375 16.0625 6.875 13.75 6.875H10V5.625H6.25V6.875H0V8.75H2.50937C2.1 9.42812 1.875 10.2719 1.875 11.25C1.875 13.95 3.55 15.625 6.25 15.625H10C12.7 15.625 14.375 13.95 14.375 11.25C14.375 10.2719 14.1531 9.42812 13.7406 8.75H13.75C16.0625 8.75 17.5 10.1875 17.5 12.5H20V3.125H17.5ZM8.75 8.75V13.75H7.5V8.75H8.75ZM3.75 11.25C3.75 9.70625 4.70625 8.75 6.25 8.75V13.75C4.70625 13.75 3.75 12.7937 3.75 11.25ZM12.5 11.25C12.5 12.7937 11.5437 13.75 10 13.75V8.75C11.5437 8.75 12.5 9.70625 12.5 11.25Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var trumpetIcon = createIcon("trumpet", iconDefinition);
export {
  trumpetIcon,
  iconDefinition
};
