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
// src/noticons/src/alarm/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.875 10.625C16.875 9.4875 16.5969 8.41563 16.1094 7.47188L17.1344 6.44688C17.6219 5.95938 17.6219 5.16875 17.1344 4.67813L15.3656 2.90938C14.8781 2.42188 14.0875 2.42188 13.5969 2.90938L12.3437 4.1625C11.6125 3.89688 10.8219 3.75 9.99687 3.75C9.17187 3.75 8.40625 3.89063 7.68125 4.15L6.44062 2.90938C5.89375 2.3625 5.21875 2.3625 4.67187 2.90938L2.90312 4.67813C2.35625 5.225 2.35625 5.9 2.90312 6.44688L3.9 7.44375C3.40312 8.39688 3.11875 9.47813 3.11875 10.6281C3.11875 12.0281 3.5375 13.3281 4.25625 14.4156L2.49375 16.1781L3.81875 17.5031L5.49687 15.825C6.70312 16.8688 8.275 17.5031 9.99375 17.5031C11.7125 17.5031 13.2844 16.8688 14.4906 15.825L16.1687 17.5031L17.4937 16.1781L15.7312 14.4156C16.45 13.3281 16.8687 12.0281 16.8687 10.6281L16.875 10.625ZM10.9375 11.875H6.25V10H9.0625V6.25H10.9375V11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var alarmIcon = createIcon("alarm", iconDefinition);
export {
  iconDefinition,
  alarmIcon
};
