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
// src/noticons/src/orbit/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.75 6.725C17.025 6.32188 17.1875 5.8375 17.1875 5.3125C17.1875 3.93125 16.0688 2.8125 14.6875 2.8125C14.1625 2.8125 13.675 2.975 13.275 3.25C12.2844 2.76875 11.175 2.5 10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 8.825 17.2312 7.71563 16.75 6.725ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C10.7937 4.375 11.55 4.54062 12.2344 4.8375C12.2063 4.99062 12.1875 5.15 12.1875 5.3125C12.1875 6.69375 13.3062 7.8125 14.6875 7.8125C14.85 7.8125 15.0094 7.79688 15.1625 7.76562C15.4594 8.45 15.625 9.20625 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625ZM12.5 10C12.5 11.3813 11.3813 12.5 10 12.5C8.61875 12.5 7.5 11.3813 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var orbitIcon = createIcon("orbit", iconDefinition);
export {
  orbitIcon,
  iconDefinition
};
