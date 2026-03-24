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
// src/noticons/src/baby/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.8125 4.6875C7.8125 3.47813 8.79063 2.5 10 2.5C11.2094 2.5 12.1875 3.47813 12.1875 4.6875C12.1875 5.89687 11.2094 6.875 10 6.875C8.79063 6.875 7.8125 5.89687 7.8125 4.6875ZM12.0781 8.44063C11.3906 7.98125 10.825 7.8125 10 7.8125C9.175 7.8125 8.60938 7.98438 7.92188 8.44063L5 10.3875L5.86563 11.6875L7.5 10.6V11.875H12.5V10.6L14.1344 11.6875L15 10.3875L12.0781 8.44063ZM7.425 12.8125L6.38125 13.8562C6.06563 14.1719 5.94063 14.475 5.94063 14.9219C5.94063 15.3687 6.06563 15.6719 6.38125 15.9875L7.89062 17.4969L8.99688 16.3906L8.05938 15.4531L9.06563 14.4469L7.42813 12.8094L7.425 12.8125ZM12.575 12.8125L10.9375 14.45L11.9438 15.4562L11.0063 16.3937L12.1125 17.5L13.6219 15.9906C13.9375 15.675 14.0625 15.3719 14.0625 14.925C14.0625 14.4781 13.9375 14.175 13.6219 13.8594L12.5781 12.8156L12.575 12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var babyIcon = createIcon("baby", iconDefinition);
export {
  iconDefinition,
  babyIcon
};
