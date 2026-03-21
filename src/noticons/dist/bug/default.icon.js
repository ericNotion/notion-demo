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
// src/noticons/src/bug/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10 2.5C8.26562 2.5 7.1875 3.69687 7.1875 5.625H12.8125C12.8125 3.69687 11.7344 2.5 10 2.5Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15 11.25H18.75V10H15V8.12187C15.8562 8.10312 16.4937 7.82812 17.1125 7.20937L18.4375 5.88437L17.5531 5L16.2281 6.325C15.8219 6.73125 15.475 6.875 14.9031 6.875H10.625V16.875C12.5469 16.875 13.9469 15.9 14.5938 14.2281L15.075 14.7094C15.4813 15.1156 15.625 15.4625 15.625 16.0344V16.875H16.875V16.0344C16.875 15.1281 16.6 14.4656 15.9594 13.825L14.9406 12.8062C14.9781 12.5094 15 12.2 15 11.875V11.25Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.77187 6.325L2.44687 5L1.5625 5.88437L2.8875 7.20937C3.50625 7.82812 4.14375 8.1 5 8.12187V10H1.25V11.25H5V11.875C5 12.2 5.02188 12.5094 5.05938 12.8062L4.04063 13.825C3.4 14.4656 3.125 15.1281 3.125 16.0344V16.875H4.375V16.0344C4.375 15.4625 4.51875 15.1125 4.925 14.7094L5.40625 14.2281C6.05625 15.9 7.45312 16.875 9.375 16.875V6.875H5.09687C4.525 6.875 4.175 6.73125 3.77187 6.325Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var bugIcon = createIcon("bug", iconDefinition);
export {
  iconDefinition,
  bugIcon
};
