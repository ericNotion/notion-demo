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
// src/noticons/src/bee/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.5 6.25C17 6.25 16.5281 6.44375 16.175 6.8L13.75 9.225V8.75313C13.75 7.59688 13.0313 6.87813 11.875 6.87813V6.25313C11.875 5.75312 11.7344 5.34063 11.4875 5.025L12.2125 4.3C12.6188 3.89375 12.9656 3.75 13.5375 3.75H13.7531V2.5H13.5375C12.6313 2.5 11.9688 2.775 11.3281 3.41563L10.3406 4.40313C10.2313 4.3875 10.1219 4.375 10.0031 4.375C9.88438 4.375 9.77188 4.3875 9.66563 4.40313L8.67813 3.41563C8.03751 2.775 7.37501 2.5 6.46876 2.5H6.25313V3.75H6.46876C7.04063 3.75 7.39063 3.89375 7.79376 4.3L8.51876 5.025C8.27188 5.3375 8.13126 5.75 8.13126 6.25313V6.87813C6.97501 6.87813 6.25626 7.59688 6.25626 8.75313V9.225L3.83126 6.8C3.47813 6.44688 3.00626 6.25 2.50626 6.25C1.46876 6.25 0.631256 7.0875 0.631256 8.125C0.631256 8.625 0.825006 9.09687 1.18126 9.45L2.50626 10.775V11.875C2.50626 12.6469 2.98438 13.125 3.75626 13.125H6.25626V13.5969C6.25626 14.1531 6.41251 14.5312 6.80626 14.9219L10.0063 18.1219L13.2063 14.9219C13.6 14.5281 13.7563 14.1531 13.7563 13.5969V13.125H16.2563C17.0281 13.125 17.5063 12.6469 17.5063 11.875V10.775L18.8313 9.45C19.1844 9.09687 19.3813 8.625 19.3813 8.125C19.3813 7.0875 18.5438 6.25 17.5063 6.25H17.5ZM11.875 13.3406C11.875 13.525 11.8219 13.6531 11.6906 13.7812L10 15.4719L8.30938 13.7812C8.17813 13.65 8.12501 13.525 8.12501 13.3406V13.125H11.875V13.3406ZM11.875 11.25H8.12501V9.375H11.875V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var beeIcon = createIcon("bee", iconDefinition);
export {
  iconDefinition,
  beeIcon
};
