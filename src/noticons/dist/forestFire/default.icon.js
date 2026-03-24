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
// src/noticons/src/forestFire/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.875 10.625C6.875 12.4468 7.5875 14.1062 8.75 15.3375V17.5H6.25V14.9343C4.18125 14.7406 2.20312 14.0906 0.625 13.0343L3.7125 9.94683C3.05313 9.69995 2.43438 9.39058 1.875 9.01558L5.01562 5.87495C4.33125 5.66558 3.6875 5.37183 3.125 4.99683L6.875 1.24683H8.125L11.0687 4.19058C9.39687 5.2437 8.28125 7.09995 8.28125 9.21558C8.28125 9.2687 8.28125 9.3187 8.28125 9.37183H6.87187V10.6218L6.875 10.625ZM19.375 10.625C19.375 13.7312 16.8563 16.25 13.75 16.25C10.6438 16.25 8.125 13.7312 8.125 10.625H9.74687C9.60625 10.1812 9.53125 9.70933 9.53125 9.2187C9.53125 6.6312 11.6313 4.5312 14.2188 4.5312V9.05933L17.4969 6.87495C18.6375 7.7312 19.375 9.09058 19.375 10.625ZM15.625 12.9687C15.625 12.5843 15.5094 12.2249 15.3094 11.9281L13.75 12.9687V11.0937C12.7156 11.0937 11.875 11.9343 11.875 12.9687C11.875 14.0031 12.7156 14.8437 13.75 14.8437C14.7844 14.8437 15.625 14.0031 15.625 12.9687Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var forestFireIcon = createIcon("forestFire", iconDefinition);
export {
  iconDefinition,
  forestFireIcon
};
