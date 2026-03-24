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
// src/noticons/src/sailboat/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10.625 10.625C10.625 10.625 11.25 9.33125 11.25 6.875C11.25 4.41875 10.625 3.125 10.625 3.125H10.6438C14.3094 3.125 16.25 6.875 16.25 10.625H10.625ZM10 1.875H8.75L3.75 9.375V10.625H10V1.875ZM13.75 16.25C12.5437 16.25 11.8656 15 10 15C8.13438 15 7.43125 16.25 6.25 16.25C5.06875 16.25 4.36562 15 2.5 15V16.875C3.70625 16.875 4.38438 18.125 6.25 18.125C8.11562 18.125 8.81875 16.875 10 16.875C11.1812 16.875 11.8844 18.125 13.75 18.125C15.6156 18.125 16.3188 16.875 17.5 16.875V15C15.6594 15 14.9312 16.25 13.75 16.25ZM6.25 15C6.44375 15 6.725 14.8406 7.07812 14.6406C7.74062 14.2656 8.64687 13.75 10 13.75C11.3531 13.75 12.2656 14.2656 12.9219 14.6406C13.2156 14.8094 13.4187 14.9219 13.5875 14.9719C15.2437 14.7937 16.2531 13.6438 16.2531 11.875H3.75V13.9094C4.45312 14.0906 4.99063 14.3938 5.42188 14.6438C5.82188 14.8719 6.05625 15.0031 6.25 15.0031V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sailboatIcon = createIcon("sailboat", iconDefinition);
export {
  sailboatIcon,
  iconDefinition
};
