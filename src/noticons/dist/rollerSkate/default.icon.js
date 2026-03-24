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
// src/noticons/src/rollerSkate/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.4688 13.8813C15.5688 14.1313 15.625 14.4032 15.625 14.6875C15.625 15.8969 14.6469 16.875 13.4375 16.875C12.2281 16.875 11.25 15.8969 11.25 14.6875C11.25 14.5813 11.2594 14.4782 11.275 14.375H9.68751L7.81251 12.5H6.87501V14.6875C6.87501 15.8969 5.89689 16.875 4.68751 16.875C3.47814 16.875 2.50001 15.8969 2.50001 14.6875C2.50001 13.9657 2.85001 13.3282 3.38751 12.9313L2.72189 10.2719C2.55626 9.6063 2.49689 9.13755 2.49689 8.45317C2.49689 7.7688 2.55314 7.30005 2.72189 6.63442L3.12189 5.0313V2.50317H9.37189V5.62817L14.3719 10.0032L17.4969 10.7844V12.5032C17.4969 12.5032 16.9375 13.3313 15.4656 13.8844L15.4688 13.8813Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rollerSkateIcon = createIcon("rollerSkate", iconDefinition);
export {
  rollerSkateIcon,
  iconDefinition
};
