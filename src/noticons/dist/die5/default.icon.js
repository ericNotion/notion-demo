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
// src/noticons/src/die5/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM5.9375 15.625C5.075 15.625 4.375 14.925 4.375 14.0625C4.375 13.2 5.075 12.5 5.9375 12.5C6.8 12.5 7.5 13.2 7.5 14.0625C7.5 14.925 6.8 15.625 5.9375 15.625ZM5.9375 7.5C5.075 7.5 4.375 6.8 4.375 5.9375C4.375 5.075 5.075 4.375 5.9375 4.375C6.8 4.375 7.5 5.075 7.5 5.9375C7.5 6.8 6.8 7.5 5.9375 7.5ZM10 11.5625C9.1375 11.5625 8.4375 10.8625 8.4375 10C8.4375 9.1375 9.1375 8.4375 10 8.4375C10.8625 8.4375 11.5625 9.1375 11.5625 10C11.5625 10.8625 10.8625 11.5625 10 11.5625ZM14.0625 15.625C13.2 15.625 12.5 14.925 12.5 14.0625C12.5 13.2 13.2 12.5 14.0625 12.5C14.925 12.5 15.625 13.2 15.625 14.0625C15.625 14.925 14.925 15.625 14.0625 15.625ZM14.0625 7.5C13.2 7.5 12.5 6.8 12.5 5.9375C12.5 5.075 13.2 4.375 14.0625 4.375C14.925 4.375 15.625 5.075 15.625 5.9375C15.625 6.8 14.925 7.5 14.0625 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var die5Icon = createIcon("die5", iconDefinition);
export {
  iconDefinition,
  die5Icon
};
