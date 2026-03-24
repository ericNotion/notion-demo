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
// src/noticons/src/extension/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.7344 10C18.7344 11.1562 18.1375 11.875 17.1719 11.875C16.6031 11.875 16.1656 11.6219 15.9031 11.1781C15.8031 11.0125 15.675 10.9375 15.4813 10.9375C15.225 10.9375 15.05 11.0969 15 11.3094V16.875H3.125V11.4344C3.125 11.1594 3.31563 10.9375 3.62188 10.9375C3.81563 10.9375 3.94375 11.0125 4.04375 11.1781C4.30937 11.6219 4.74688 11.875 5.3125 11.875C6.27813 11.875 6.875 11.1562 6.875 10C6.875 8.84375 6.27813 8.125 5.3125 8.125C4.74375 8.125 4.30625 8.37812 4.04375 8.82187C3.94375 8.9875 3.81563 9.0625 3.62188 9.0625C3.31563 9.0625 3.125 8.87187 3.125 8.56563V3.125H15V8.7C15.05 8.925 15.2219 9.0625 15.4813 9.0625C15.675 9.0625 15.8031 8.9875 15.9031 8.82187C16.1687 8.37812 16.6062 8.125 17.1719 8.125C18.1375 8.125 18.7344 8.84375 18.7344 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var extensionIcon = createIcon("extension", iconDefinition);
export {
  iconDefinition,
  extensionIcon
};
