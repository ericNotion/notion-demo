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
// src/noticons/src/mobile/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M4.375 11.25H2.5V7.9375L9.0625 4.65625V2.5H10.9375V4.65625L17.5 7.9375V11.25H15.625V9.09375L10.9375 6.75V11.25H9.0625V6.75L4.375 9.09375V11.25ZM12.8062 13.75H10.8344L10.225 11.875H9.77188L9.1625 13.75H7.19063L7.05 14.1813L8.64375 15.3406L8.03437 17.2156L8.4 17.4812L9.99375 16.325C9.99375 16.325 9.99687 16.325 10 16.325L11.5938 17.4812L11.9594 17.2156L11.35 15.3406L12.9437 14.1813L12.8031 13.75H12.8062ZM4.6875 13.4375C4.725 13.4375 4.7625 13.4469 4.8 13.45L5 13.05C4.57188 12.7062 4.02813 12.5 3.4375 12.5C2.05625 12.5 0.9375 13.6187 0.9375 15C0.9375 16.3813 2.05625 17.5 3.4375 17.5C4.02813 17.5 4.57188 17.2938 5 16.95L4.8 16.55C4.7625 16.55 4.725 16.5625 4.6875 16.5625C3.825 16.5625 3.125 15.8625 3.125 15C3.125 14.1375 3.825 13.4375 4.6875 13.4375ZM16.5625 12.5C15.1812 12.5 14.0625 13.6187 14.0625 15C14.0625 16.3813 15.1812 17.5 16.5625 17.5C17.9438 17.5 19.0625 16.3813 19.0625 15C19.0625 13.6187 17.9438 12.5 16.5625 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mobileIcon = createIcon("mobile", iconDefinition);
export {
  mobileIcon,
  iconDefinition
};
