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
// src/noticons/src/monorail/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.75 15.625H11.25V18.75H8.75V15.625ZM15.8188 12.0594L14.2125 16.875H12.4969V14.375H7.49688V16.875H5.78125L4.175 12.0594C3.60313 10.3406 3.60313 9.0375 4.175 7.31563L5.45625 3.46875C6.25 3.08125 7.38438 2.69063 8.875 2.55313L9.4 0.9375H10.5906L11.1156 2.55313C12.6031 2.69063 13.7406 3.08438 14.5344 3.46875L15.8156 7.31563C16.3875 9.03438 16.3875 10.3375 15.8156 12.0594H15.8188ZM7.8125 11.5625C7.8125 11.0437 7.39375 10.625 6.875 10.625C6.35625 10.625 5.9375 11.0437 5.9375 11.5625C5.9375 12.0813 6.35625 12.5 6.875 12.5C7.39375 12.5 7.8125 12.0813 7.8125 11.5625ZM14.0625 11.5625C14.0625 11.0437 13.6438 10.625 13.125 10.625C12.6062 10.625 12.1875 11.0437 12.1875 11.5625C12.1875 12.0813 12.6062 12.5 13.125 12.5C13.6438 12.5 14.0625 12.0813 14.0625 11.5625ZM14.3219 8.75L13.0281 4.8625C12.2812 4.59688 11.2781 4.375 10.0031 4.375C8.72812 4.375 7.72188 4.59688 6.97813 4.8625C6.97813 4.8625 5.87813 8.15938 5.68438 8.75H14.3281H14.3219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var monorailIcon = createIcon("monorail", iconDefinition);
export {
  monorailIcon,
  iconDefinition
};
