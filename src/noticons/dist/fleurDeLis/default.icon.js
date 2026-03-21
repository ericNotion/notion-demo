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
// src/noticons/src/fleurDeLis/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 10.7812C18.125 12.2844 17.3062 13.4375 15.9375 13.4375C15.9375 11.9906 15.2375 10.9375 13.75 10.9375C12.6625 10.9375 11.9094 11.5188 11.6562 12.5H13.125V13.75H11.5969C11.7844 15.0625 12.7875 15.625 14.375 15.625V16.875H11.875L10 18.75L8.125 16.875H5.625V15.625C7.2125 15.625 8.21562 15.0625 8.40312 13.75H6.875V12.5H8.34375C8.09063 11.5188 7.3375 10.9375 6.25 10.9375C4.7625 10.9375 4.0625 11.9906 4.0625 13.4375C2.69375 13.4375 1.875 12.2844 1.875 10.7812C1.875 8.8 3.25937 7.5 5.3125 7.5C6.38125 7.5 7.225 7.97188 7.85312 8.70938L8.28438 8.27812C7.84688 7.38125 7.5 6.53437 7.5 5.75C7.5 4.24687 8.29375 2.9 10 1.25C11.7063 2.9 12.5 4.24375 12.5 5.75C12.5 6.53437 12.1531 7.38438 11.7156 8.27812L12.1469 8.70938C12.775 7.975 13.6187 7.5 14.6875 7.5C16.7406 7.5 18.125 8.8 18.125 10.7812Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fleurDeLisIcon = createIcon("fleurDeLis", iconDefinition);
export {
  iconDefinition,
  fleurDeLisIcon
};
