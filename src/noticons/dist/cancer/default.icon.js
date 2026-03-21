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
// src/noticons/src/cancer/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.375 10.3125C12.6531 10.3125 11.25 11.7156 11.25 13.4375C11.25 14.2188 11.5406 14.9312 12.0156 15.4781C11.4219 15.5687 10.75 15.625 10 15.625C6.025 15.625 3.35 14.0625 3.35 14.0625L2.5 15.7406C2.5 15.7406 5.55313 17.5 10 17.5C13.1656 17.5 17.5 16.6187 17.5 13.4375C17.5 11.7156 16.0969 10.3125 14.375 10.3125ZM14.375 14.6875C13.6844 14.6875 13.125 14.1281 13.125 13.4375C13.125 12.7469 13.6844 12.1875 14.375 12.1875C15.0656 12.1875 15.625 12.7469 15.625 13.4375C15.625 14.1281 15.0656 14.6875 14.375 14.6875ZM5.625 9.6875C7.34688 9.6875 8.75 8.28438 8.75 6.5625C8.75 5.78125 8.45937 5.06875 7.98438 4.52188C8.57812 4.43125 9.25 4.375 10 4.375C13.975 4.375 16.65 5.9375 16.65 5.9375L17.5 4.25938C17.5 4.25938 14.4469 2.5 10 2.5C6.83437 2.5 2.5 3.38125 2.5 6.5625C2.5 8.28438 3.90312 9.6875 5.625 9.6875ZM5.625 5.3125C6.31562 5.3125 6.875 5.87188 6.875 6.5625C6.875 7.25313 6.31562 7.8125 5.625 7.8125C4.93438 7.8125 4.375 7.25313 4.375 6.5625C4.375 5.87188 4.93438 5.3125 5.625 5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cancerIcon = createIcon("cancer", iconDefinition);
export {
  iconDefinition,
  cancerIcon
};
