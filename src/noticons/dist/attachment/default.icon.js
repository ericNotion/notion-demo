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
// src/noticons/src/attachment/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 2.49999C12.7906 2.49999 11.8312 2.86562 11.0969 3.59687L5.58436 9.10937L6.24686 9.77187L4.12186 11.8969C3.48124 12.5375 3.15936 13.3781 3.15936 14.2156C3.15936 16.0281 4.62811 17.4969 6.44061 17.4969C7.28124 17.4969 8.11874 17.175 8.75936 16.5344L16.3969 8.89687C17.1281 8.16562 17.4937 7.20624 17.4937 6.24374C17.4937 4.17187 15.8156 2.49374 13.7437 2.49374L13.75 2.49999ZM7.43749 15.2125C7.16249 15.4875 6.80311 15.625 6.44374 15.625C5.66561 15.625 5.03749 14.9969 5.03749 14.2187C5.03749 13.8594 5.17499 13.5 5.44999 13.225L10.275 8.39999C10.4594 8.21562 10.6969 8.12499 10.9375 8.12499C11.4562 8.12499 11.875 8.54374 11.875 9.06249C11.875 9.30312 11.7844 9.54374 11.6 9.72499L8.89999 12.425L9.56249 13.0875L7.43749 15.2125ZM15.075 7.57499L13.7406 8.90937C13.6625 7.47812 12.5187 6.33437 11.0875 6.25624L12.4219 4.92187C12.7875 4.55624 13.2687 4.37187 13.7469 4.37187C14.7812 4.37187 15.6219 5.21249 15.6219 6.24687C15.6219 6.72812 15.4375 7.20624 15.0719 7.57187L15.075 7.57499Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var attachmentIcon = createIcon("attachment", iconDefinition);
export {
  iconDefinition,
  attachmentIcon
};
