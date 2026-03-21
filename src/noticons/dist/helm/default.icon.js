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
// src/noticons/src/helm/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.25 10C16.25 9.19688 16.0937 8.43125 15.8156 7.725L18.0469 6.4375L17.1094 4.8125L14.8812 6.1C13.9219 4.9 12.5281 4.06875 10.9406 3.82812V1.25H9.06562V3.82812C7.475 4.06875 6.08437 4.9 5.125 6.1L2.89687 4.8125L1.95937 6.4375L4.19062 7.725C3.91562 8.43125 3.75625 9.19688 3.75625 10C3.75625 10.8031 3.9125 11.5687 4.19062 12.275L1.95937 13.5625L2.89687 15.1875L5.125 13.9C6.08437 15.1 7.47812 15.9312 9.06562 16.1719V18.75H10.9406V16.1719C12.5312 15.9312 13.9219 15.1 14.8812 13.9L17.1094 15.1875L18.0469 13.5625L15.8156 12.275C16.0906 11.5687 16.25 10.8031 16.25 10ZM14.375 10C14.375 10.4625 14.3031 10.9063 14.1687 11.325L11.875 10L14.1687 8.675C14.3 9.09375 14.375 9.5375 14.375 10ZM13.2281 7.05312L10.9375 8.375V5.72813C11.8375 5.925 12.6281 6.39687 13.2281 7.05312ZM9.0625 5.72813V8.375L6.77187 7.05312C7.37187 6.39687 8.1625 5.925 9.0625 5.72813ZM5.625 10C5.625 9.5375 5.69687 9.09375 5.83125 8.675L8.125 10L5.83125 11.325C5.7 10.9063 5.625 10.4625 5.625 10ZM6.77187 12.9469L9.0625 11.625V14.2719C8.1625 14.075 7.37187 13.6031 6.77187 12.9469ZM10.9375 14.2719V11.625L13.2281 12.9469C12.6281 13.6031 11.8375 14.075 10.9375 14.2719Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var helmIcon = createIcon("helm", iconDefinition);
export {
  iconDefinition,
  helmIcon
};
