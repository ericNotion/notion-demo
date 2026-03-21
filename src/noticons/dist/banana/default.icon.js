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
// src/noticons/src/banana/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5.63438 8.74687C5.00625 8.0375 4.775 7.50313 4.775 7.50313L5.625 6.5625C7.58125 7.60625 9.22813 7.95312 10.4781 7.81563C10.3406 7.95625 10.1969 8.08125 10.0344 8.18125C9.33125 8.61875 8.31875 8.85 7.10313 8.85C6.6375 8.85 6.14688 8.81563 5.63125 8.75L5.63438 8.74687ZM4.79688 12.4188C8.10313 12.1219 9.68438 11.0469 10.3656 10.3656C10.7938 9.9375 11.075 9.37188 11.2969 8.7625C11.1156 8.94063 10.9188 9.1 10.6969 9.24062C9.29375 10.1156 6.975 10.4187 3.825 9.6875L3.125 11.0563C3.125 11.0563 3.64688 11.7125 4.79688 12.4188ZM17.3938 7.41875C16.9031 4.3125 14.8938 1.875 14.8938 1.875L13.0188 2.8125C13.0188 2.8125 14.3094 3.71562 14.9656 5.025C12.5813 5.35625 13.3531 9.15 11.2531 11.25C9.78438 12.7188 7.03438 13.75 2.97188 13.75L2.50313 15.625C2.50313 15.625 4.84063 17.5 9.37813 17.5C13.5938 17.5 17.5031 13.75 17.5031 8.75C17.5031 8.32812 17.4719 7.86875 17.3969 7.41875H17.3938Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bananaIcon = createIcon("banana", iconDefinition);
export {
  iconDefinition,
  bananaIcon
};
