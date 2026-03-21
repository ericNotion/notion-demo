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

// src/nds-icons/src/wifiExclamationMark/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.75 2.878a.75.75 0 1 0-1.5 0v6.4a.75.75 0 0 0 1.5 0zM9.5 4.74V3.217a9.2 9.2 0 0 1 5.065 2.589.75.75 0 1 1-1.061 1.06A7.7 7.7 0 0 0 9.5 4.74m-3-1.506A9.2 9.2 0 0 0 1.501 5.84a.75.75 0 0 0 1.066 1.055A7.7 7.7 0 0 1 6.5 4.76zm0 2.499a6.77 6.77 0 0 0-3.232 1.805.75.75 0 0 0 1.06 1.06c.6-.6 1.343-1.055 2.172-1.311zm3-.023v1.547A5.3 5.3 0 0 1 11.771 8.6a.75.75 0 1 0 1.061-1.061A6.76 6.76 0 0 0 9.5 5.71m-3 2.583A4.3 4.3 0 0 0 5 9.27a.75.75 0 1 0 1.061 1.06q.256-.256.57-.44a1.5 1.5 0 0 1-.131-.612zm3 .985c0 .2-.04.392-.11.566q.36.197.65.487a.75.75 0 1 0 1.06-1.06 4.3 4.3 0 0 0-1.6-1.015zm-1.45 1.844a1.199 1.199 0 1 1 0 2.397 1.199 1.199 0 0 1 0-2.397"
  }, undefined, false, undefined, this)
};
var wifiExclamationMarkFillSmallIcon = createIcon("wifiExclamationMarkFillSmall", iconDefinition);
export {
  wifiExclamationMarkFillSmallIcon,
  iconDefinition
};
