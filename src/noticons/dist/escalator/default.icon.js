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
// src/noticons/src/escalator/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M2.50001 4.0625C2.50001 3.09688 3.09689 2.5 4.06251 2.5C5.02814 2.5 5.62501 3.09688 5.62501 4.0625C5.62501 5.02813 5.02814 5.625 4.06251 5.625C3.09689 5.625 2.50001 5.02813 2.50001 4.0625ZM16.875 4.375H13.4375C12.6906 4.375 12.1969 4.57812 11.6688 5.10625L6.15001 10.625H3.12189C1.58126 10.625 0.621887 11.5844 0.621887 13.125C0.621887 14.6656 1.58126 15.625 3.12189 15.625H7.18439C7.93126 15.625 8.42501 15.4219 8.95314 14.8938L14.4719 9.375H16.875C18.4156 9.375 19.375 8.41563 19.375 6.875C19.375 5.33438 18.4156 4.375 16.875 4.375ZM5.62501 8.125C5.62501 7.15938 5.02814 6.5625 4.06251 6.5625C3.09689 6.5625 2.50001 7.15938 2.50001 8.125V9.375H5.62501V8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var escalatorIcon = createIcon("escalator", iconDefinition);
export {
  iconDefinition,
  escalatorIcon
};
