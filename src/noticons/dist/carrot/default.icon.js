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
// src/noticons/src/carrot/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10.3938 2.53437C10.8344 2.09375 11.3438 1.875 11.8719 1.875C12.6063 1.875 13.3875 2.34688 13.925 2.9875C14.3625 2.475 14.9969 2.11562 15.6219 2.11562C16.7375 2.11562 17.8844 3.2625 17.8844 4.37813C17.8844 5.00313 17.525 5.6375 17.0125 6.075C17.6563 6.6125 18.125 7.39375 18.125 8.12813C18.125 8.65625 17.9063 9.16563 17.4656 9.60625L15.9188 8.05938C15.5094 7.65 15.05 7.44688 14.5938 7.44688C14.1375 7.44688 13.6781 7.65 13.2688 8.05938L12.5406 8.7875L13.0438 9.29062C13.55 9.79688 13.7531 10.2844 13.7531 11.0031C13.7531 12.0281 13.3313 12.7125 12.4156 13.1687L3.75313 17.5L2.50313 16.25L6.83438 7.5875C7.29375 6.67188 7.975 6.25 9 6.25C9.71875 6.25 10.2063 6.45312 10.7125 6.95938L11.2156 7.4625L11.9438 6.73438C12.3531 6.325 12.5563 5.86562 12.5563 5.40937C12.5563 4.95312 12.3531 4.49375 11.9438 4.08437L10.3969 2.5375L10.3938 2.53437Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var carrotIcon = createIcon("carrot", iconDefinition);
export {
  iconDefinition,
  carrotIcon
};
