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
// src/noticons/src/cherries/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 13.75C18.125 15.8219 16.4469 17.5 14.375 17.5C12.3031 17.5 10.625 15.8219 10.625 13.75C10.625 12.4281 11.3125 11.2656 12.3469 10.6C12.2531 10.0125 12.1875 9.29375 12.1875 8.4375C12.1875 7.50313 12.2656 6.7375 12.3719 6.12188C10.0281 6.86562 8.13125 8.39063 7.17188 10.3375C8.47188 10.9281 9.375 12.2312 9.375 13.75C9.375 15.8219 7.69688 17.5 5.625 17.5C3.55312 17.5 1.875 15.8219 1.875 13.75C1.875 11.8031 3.3625 10.2 5.2625 10.0188C6.15625 7.875 7.91875 6.10625 10.1656 5H9.375C7.83125 5 6.875 4.04375 6.875 2.5H10.9375C12.1 2.5 12.9281 3.04375 13.2687 3.97187C14.0312 3.82812 14.8188 3.75 15.625 3.75V5.625C15.2063 5.625 14.7906 5.65 14.3844 5.69687C14.2375 6.23125 14.0625 7.1375 14.0625 8.4375C14.0625 9.05 14.1031 9.57187 14.1594 10.0094C14.2313 10.0062 14.3031 10 14.375 10C16.4469 10 18.125 11.6781 18.125 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cherriesIcon = createIcon("cherries", iconDefinition);
export {
  iconDefinition,
  cherriesIcon
};
