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
// src/noticons/src/people/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M3.4375 3.75C3.4375 2.78438 4.03437 2.1875 5 2.1875C5.96562 2.1875 6.5625 2.78438 6.5625 3.75C6.5625 4.71563 5.96562 5.3125 5 5.3125C4.03437 5.3125 3.4375 4.71563 3.4375 3.75ZM15 5.3125C15.9656 5.3125 16.5625 4.71563 16.5625 3.75C16.5625 2.78438 15.9656 2.1875 15 2.1875C14.0344 2.1875 13.4375 2.78438 13.4375 3.75C13.4375 4.71563 14.0344 5.3125 15 5.3125ZM16.4844 9.84375L17.0344 8.74062L18.2875 11.25L19.6844 10.55L18.5687 8.32187C17.8594 6.90312 16.975 6.25 14.9969 6.25C13.0188 6.25 12.1344 6.90312 11.425 8.32187L10.3094 10.55L11.7062 11.25L12.9594 8.74062L13.5094 9.84375L11.5562 13.75H13.7437V17.5H16.2437V13.75H18.4312L16.4781 9.84375H16.4844ZM7.05625 8.78438L8.29063 11.25L9.6875 10.55L8.57187 8.32187C7.8625 6.90312 6.97813 6.25 5 6.25C3.02187 6.25 2.1375 6.90312 1.42813 8.32187L0.3125 10.55L1.70937 11.25L2.94375 8.78438C3.0625 8.54688 3.2 8.4375 3.4375 8.4375V10.9375L1.25 17.5H3.225L5 12.1781L6.775 17.5H8.75L6.5625 10.9375V8.4375C6.8 8.4375 6.9375 8.54688 7.05625 8.78438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var peopleIcon = createIcon("people", iconDefinition);
export {
  peopleIcon,
  iconDefinition
};
