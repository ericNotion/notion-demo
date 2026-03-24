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
// src/noticons/src/darks/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10 2.5C5.85625 2.5 2.5 5.85625 2.5 10C2.5 14.1438 5.85625 17.5 10 17.5C14.1438 17.5 17.5 14.1438 17.5 10C17.5 5.85625 14.1438 2.5 10 2.5ZM6.02188 6.02188C6.96875 5.075 8.16875 4.54062 9.40312 4.40937L6.90625 6.90625L6.02188 6.02188ZM7.79063 7.79063L11.0969 4.48438C11.55 4.575 11.9938 4.725 12.4188 4.92813L8.67188 8.675L7.7875 7.79063H7.79063ZM9.55937 9.55937L13.5094 5.60938C13.8562 5.8875 14.1156 6.14688 14.3938 6.49375L10.4406 10.4437L9.55625 9.55937H9.55937ZM11.3281 11.3281L15.075 7.58125C15.2781 8.00625 15.4281 8.45 15.5188 8.90312L12.2125 12.2094L11.3281 11.325V11.3281ZM13.9813 13.9813L13.0969 13.0969L15.5938 10.6C15.4625 11.8344 14.9281 13.0344 13.9813 13.9813Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var darksIcon = createIcon("darks", iconDefinition);
export {
  iconDefinition,
  darksIcon
};
