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
// src/noticons/src/sun/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M13.75 10C13.75 12.0719 12.0719 13.75 10 13.75C7.92812 13.75 6.25 12.0719 6.25 10C6.25 7.92812 7.92812 6.25 10 6.25C12.0719 6.25 13.75 7.92812 13.75 10ZM10.625 1.875H9.375V5H10.625V1.875ZM9.375 18.125H10.625V15H9.375V18.125ZM6.90625 6.02188L4.69687 3.8125L3.8125 4.69687L6.02188 6.90625L6.90625 6.02188ZM13.0938 13.9781L15.3031 16.1875L16.1875 15.3031L13.9781 13.0938L13.0938 13.9781ZM5 9.375H1.875V10.625H5V9.375ZM15 9.375V10.625H18.125V9.375H15ZM3.8125 15.3031L4.69687 16.1875L6.90625 13.9781L6.02188 13.0938L3.8125 15.3031ZM16.1875 4.69687L15.3031 3.8125L13.0938 6.02188L13.9781 6.90625L16.1875 4.69687Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sunIcon = createIcon("sun", iconDefinition);
export {
  sunIcon,
  iconDefinition
};
