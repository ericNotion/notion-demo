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
// src/noticons/src/partlyCloudyDay/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 15C13.75 16.1562 13.0312 16.875 11.875 16.875H2.5C0.95625 16.875 0 15.9187 0 14.375C0 13.0531 0.70625 12.1625 1.87813 11.9344C1.87813 11.9156 1.87813 11.8938 1.87813 11.875C1.87813 9.5625 3.31562 8.125 5.62813 8.125C7.38125 8.125 8.63125 8.95 9.13125 10.3594C9.30625 10.3281 9.49375 10.3125 9.69063 10.3125C11.2344 10.3125 12.1906 11.2688 12.1906 12.8125C12.1906 12.9281 12.1844 13.0406 12.1719 13.15C13.1531 13.2656 13.7531 13.9469 13.7531 15H13.75ZM12.8125 2.5H11.5625V5.625H12.8125V2.5ZM16.875 9.6875V10.9375H20V9.6875H16.875ZM9.31563 6.55625L7.10625 4.34687L6.22188 5.23125L8.43125 7.44062L9.31563 6.55625ZM15.0594 14.0688L17.2687 16.2781L18.1531 15.3937L15.9438 13.1844L15.0594 14.0688ZM18.1531 5.23125L17.2687 4.34687L15.0594 6.55625L15.9438 7.44062L18.1531 5.23125ZM12.1875 6.875C11.0094 6.875 9.97188 7.46875 9.35312 8.37188C9.55313 8.58438 9.73125 8.81875 9.88437 9.07188C11.8156 9.15 13.1594 10.375 13.3969 12.2219C13.7687 12.4094 14.0875 12.6719 14.3406 12.9906C15.1219 12.3594 15.625 11.3969 15.625 10.3125C15.625 8.4125 14.0875 6.875 12.1875 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var partlyCloudyDayIcon = createIcon("partlyCloudyDay", iconDefinition);
export {
  partlyCloudyDayIcon,
  iconDefinition
};
