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
// src/noticons/src/gavel/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M9.85625 11.1063L3.4625 17.5L1.25313 15.2906L7.64688 8.89687L7.50313 8.75313C7.12813 8.37813 7.03438 7.975 7.2 7.475L7.39688 6.88125L6.95625 6.44063L6.3625 6.6375C5.85938 6.80625 5.45625 6.70938 5.08438 6.33438L4.375 5.625L9.375 0.625L10.0844 1.33438C10.4594 1.70938 10.5531 2.1125 10.3875 2.6125L10.1906 3.20625L10.6313 3.64687L11.225 3.45C11.7281 3.28125 12.1313 3.37812 12.5031 3.75313L15 6.25C15.375 6.625 15.4688 7.02812 15.3031 7.52812L15.1063 8.12187L15.5469 8.5625L16.1406 8.36563C16.6438 8.19688 17.0469 8.29375 17.4188 8.66875L18.1281 9.37813L13.1281 14.3781L12.4188 13.6688C12.0438 13.2938 11.95 12.8906 12.1156 12.3906L12.3125 11.7969L11.8719 11.3562L11.2781 11.5531C10.775 11.7219 10.3719 11.625 10 11.25L9.85625 11.1063ZM9.375 17.5H18.125V15.625H9.375V17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gavelIcon = createIcon("gavel", iconDefinition);
export {
  iconDefinition,
  gavelIcon
};
