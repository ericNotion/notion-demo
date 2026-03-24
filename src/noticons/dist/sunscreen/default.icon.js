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
// src/noticons/src/sunscreen/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M3.125 11.25H0.625V10H3.125V11.25ZM7.5 4.375H6.25V6.875H7.5V4.375ZM2.0125 14.6031L2.89688 15.4875L4.66563 13.7188L3.78125 12.8344L2.0125 14.6031ZM4.66563 7.53125L2.89688 5.7625L2.0125 6.64688L3.78125 8.41563L4.66563 7.53125ZM11.875 16.875H16.25V14.375H11.875V16.875ZM9.375 3.125V4.00313C9.375 5.20312 9.50937 6.025 9.8875 7.16563L11.875 13.125H16.25L18.2375 7.16563C18.6187 6.025 18.75 5.20312 18.75 4.00313V3.125H9.375ZM6.875 8.125C5.49375 8.125 4.375 9.24375 4.375 10.625C4.375 12.0063 5.49375 13.125 6.875 13.125C8.25625 13.125 9.375 12.0063 9.375 10.625C9.375 9.24375 8.25625 8.125 6.875 8.125ZM6.25 16.875H7.5V14.375H6.25V16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sunscreenIcon = createIcon("sunscreen", iconDefinition);
export {
  sunscreenIcon,
  iconDefinition
};
