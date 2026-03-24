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
// src/noticons/src/geography/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M11.25 15.5188C11.8375 15.4188 12.4219 15.25 12.9906 15.0031L13.5625 14.7531L12.5469 12.4188C14.0125 11.5469 14.9969 9.95315 14.9969 8.1219C14.9969 5.3594 12.7594 3.1219 9.99688 3.1219C9.50938 3.1219 9.0375 3.19377 8.59375 3.32502L7.58125 0.993774L7.00938 1.24377C3.21563 2.89377 1.47188 7.31877 3.12188 11.1125C4.16875 13.5219 6.3375 15.0969 8.75 15.5094V16.2469H5V17.4969H15V16.2469H11.25V15.5156V15.5188ZM12.8219 10.5875C12.8094 10.1156 12.7375 9.59065 12.6063 9.0344L13.725 8.5469C13.6375 9.3219 13.3125 10.025 12.825 10.5844L12.8219 10.5875ZM13.6344 7.22502L12.2344 7.8344C12.1625 7.64065 12.0875 7.4469 12.0031 7.25315C11.9188 7.0594 11.8281 6.8719 11.7375 6.68752L13.1375 6.07815C13.3625 6.42502 13.5313 6.81252 13.6344 7.22502ZM12.225 5.11252L11.1094 5.5969C10.7938 5.1219 10.4594 4.71252 10.1219 4.38127C10.9094 4.40627 11.6313 4.67502 12.2219 5.11252H12.225ZM11.4969 11.5625C11.4969 11.5625 11.4938 11.5625 11.4906 11.5656C11.1719 11.7 10.5969 11.1281 10.0031 10.1688L11.4906 9.5219C11.7875 10.6094 11.8125 11.4188 11.4969 11.5625ZM10.5969 7.1844C10.6844 7.36877 10.775 7.55627 10.8594 7.75315C10.9438 7.95002 11.0219 8.14065 11.0969 8.33127L9.40313 9.06877C9.3125 8.8844 9.225 8.6969 9.14063 8.50002C9.05625 8.30315 8.97813 8.11252 8.90313 7.9219L10.5969 7.1844ZM9.875 11.8688C9.0875 11.8438 8.36563 11.575 7.775 11.1375L8.89063 10.6531C9.20625 11.1281 9.54063 11.5375 9.87813 11.8688H9.875ZM8.5 4.68752C8.5 4.68752 8.50313 4.68752 8.50625 4.6844C8.825 4.55002 9.4 5.1219 9.99375 6.08127L8.50625 6.72815C8.20938 5.64065 8.18438 4.83127 8.5 4.68752ZM7.7625 8.41565C7.83438 8.6094 7.90938 8.80315 7.99375 8.9969C8.07813 9.19065 8.16875 9.37815 8.25938 9.56252L6.85938 10.1719C6.63438 9.82502 6.46563 9.43752 6.3625 9.02502L7.7625 8.41565ZM6.275 7.70002C6.3625 6.92502 6.6875 6.2219 7.175 5.66252C7.1875 6.1344 7.25938 6.6594 7.39063 7.21565L6.27188 7.70315L6.275 7.70002ZM4.26875 10.6188C2.97813 7.65315 4.18125 4.21877 6.94688 2.6719L7.45 3.83127C5.98438 4.70315 5 6.2969 5 8.12815C5 10.8906 7.2375 13.1281 10 13.1281C10.4875 13.1281 10.9594 13.0563 11.4031 12.925L11.9063 14.0813C8.8875 15.05 5.55938 13.5875 4.26875 10.6219V10.6188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var geographyIcon = createIcon("geography", iconDefinition);
export {
  iconDefinition,
  geographyIcon
};
