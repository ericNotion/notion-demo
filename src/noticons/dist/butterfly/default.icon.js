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
// src/noticons/src/butterfly/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.75 3.75V5.625C18.2969 6.07812 18.0906 6.49062 18 7.125L17.6531 9.55312C17.5562 10.2406 17.1094 10.625 16.4156 10.625H13.125V11.25H13.8406C15.275 11.25 16.2312 11.8406 16.875 13.125L15.3125 16.25C13.9719 16.25 13.0594 15.8719 12.1125 14.925L10.9375 13.75V15.625H9.0625V13.75L7.8875 14.925C6.9375 15.875 6.02812 16.25 4.6875 16.25L3.125 13.125C3.76562 11.8406 4.72187 11.25 6.15937 11.25H6.875V10.625H3.58438C2.89063 10.625 2.44375 10.2406 2.34688 9.55312L2 7.125C1.90938 6.49062 1.70312 6.07812 1.25 5.625V3.75H3.4375C6.30937 3.75 8.1625 5.40938 8.40625 8.125H9.0625V6.5625C9.0625 5.98438 9.42188 5.625 10 5.625C10.5781 5.625 10.9375 5.98438 10.9375 6.5625V8.125H11.5938C11.8375 5.40938 13.6938 3.75 16.5625 3.75H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var butterflyIcon = createIcon("butterfly", iconDefinition);
export {
  iconDefinition,
  butterflyIcon
};
