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
// src/noticons/src/skull/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.1781 12.9187C16.0719 11.8656 16.5625 10.45 16.5625 8.75C16.5625 4.89375 14.05 2.5 10 2.5C5.95 2.5 3.4375 4.89375 3.4375 8.75C3.4375 10.45 3.92813 11.8656 4.82188 12.9187L4.5375 13.4906C4.42813 13.7094 4.375 13.925 4.375 14.1281C4.375 14.65 4.72187 15.0813 5.3375 15.2344L6.875 15.6187V16.8781H13.125V15.6187L14.6625 15.2344C15.2781 15.0813 15.625 14.65 15.625 14.1281C15.625 13.925 15.5719 13.7094 15.4625 13.4906L15.1781 12.9187ZM5.625 10.7812C5.625 9.9125 6.7875 9.375 7.65625 9.375C8.525 9.375 9.0625 9.9125 9.0625 10.7812C9.0625 11.65 7.9 12.1875 7.03125 12.1875C6.1625 12.1875 5.625 11.65 5.625 10.7812ZM8.75 14.375L10 11.875L11.25 14.375H8.75ZM12.9688 12.1875C12.1 12.1875 10.9375 11.65 10.9375 10.7812C10.9375 9.9125 11.475 9.375 12.3438 9.375C13.2125 9.375 14.375 9.9125 14.375 10.7812C14.375 11.65 13.8375 12.1875 12.9688 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skullIcon = createIcon("skull", iconDefinition);
export {
  skullIcon,
  iconDefinition
};
