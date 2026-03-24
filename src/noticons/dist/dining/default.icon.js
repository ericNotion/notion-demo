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
// src/noticons/src/dining/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M4.375 2.5H5.625V7.1875C5.625 8.58437 4.92812 9.55313 3.75 9.87813V17.5H1.875V9.87813C0.696875 9.55313 0 8.58437 0 7.1875V2.5H1.25V7.1875H2.1875V2.5H3.4375V7.1875H4.375V2.5ZM20 10C20 13.7969 16.9219 16.875 13.125 16.875C9.32812 16.875 6.25 13.7969 6.25 10C6.25 6.20312 9.32812 3.125 13.125 3.125C16.9219 3.125 20 6.20312 20 10ZM18.125 10C18.125 7.2375 15.8875 5 13.125 5C10.3625 5 8.125 7.2375 8.125 10C8.125 12.7625 10.3625 15 13.125 15C15.8875 15 18.125 12.7625 18.125 10ZM13.125 6.25C11.0531 6.25 9.375 7.92812 9.375 10C9.375 12.0719 11.0531 13.75 13.125 13.75C15.1969 13.75 16.875 12.0719 16.875 10C16.875 7.92812 15.1969 6.25 13.125 6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var diningIcon = createIcon("dining", iconDefinition);
export {
  iconDefinition,
  diningIcon
};
