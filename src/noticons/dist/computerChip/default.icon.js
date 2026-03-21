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
// src/noticons/src/computerChip/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 6.71875V5.78125L16.25 5.3125V5C16.25 4.22813 15.7719 3.75 15 3.75H14.6875L14.2188 1.875H13.2812L12.8125 3.75H10.9375L10.4688 1.875H9.53125L9.0625 3.75H7.1875L6.71875 1.875H5.78125L5.3125 3.75H5C4.22813 3.75 3.75 4.22813 3.75 5V5.3125L1.875 5.78125V6.71875L3.75 7.1875V9.0625L1.875 9.53125V10.4688L3.75 10.9375V12.8125L1.875 13.2812V14.2188L3.75 14.6875V15C3.75 15.7719 4.22813 16.25 5 16.25H5.3125L5.78125 18.125H6.71875L7.1875 16.25H9.0625L9.53125 18.125H10.4688L10.9375 16.25H12.8125L13.2812 18.125H14.2188L14.6875 16.25H15C15.7719 16.25 16.25 15.7719 16.25 15V14.6875L18.125 14.2188V13.2812L16.25 12.8125V10.9375L18.125 10.4688V9.53125L16.25 9.0625V7.1875L18.125 6.71875ZM15 15H5V5H15V15ZM13.75 6.25H6.25V13.75H13.75V6.25ZM8.4375 9.375C7.91875 9.375 7.5 8.95625 7.5 8.4375C7.5 7.91875 7.91875 7.5 8.4375 7.5C8.95625 7.5 9.375 7.91875 9.375 8.4375C9.375 8.95625 8.95625 9.375 8.4375 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var computerChipIcon = createIcon("computerChip", iconDefinition);
export {
  iconDefinition,
  computerChipIcon
};
