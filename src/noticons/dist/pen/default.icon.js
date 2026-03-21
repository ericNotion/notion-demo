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
// src/noticons/src/pen/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.5 3.38437L16.1812 5.4125C15.3312 6.71875 14.6562 7.55313 13.5531 8.65625L10.3344 11.875L8.12499 9.66563L11.3437 6.44687C12.4469 5.34375 13.2781 4.66875 14.5875 3.81875L16.6156 2.5L17.5 3.38437ZM7.37811 10.6875L9.31561 12.625L7.50311 16.2531H6.11561C5.37499 16.2531 4.87186 16.4625 4.34686 16.9844L3.82811 17.5031L2.50311 16.1781L3.02186 15.6594C3.54686 15.1344 3.75311 14.6313 3.75311 13.8906V12.5031L7.38124 10.6906L7.37811 10.6875ZM7.18749 13.75C7.18749 13.2312 6.76874 12.8125 6.24999 12.8125C5.73124 12.8125 5.31249 13.2312 5.31249 13.75C5.31249 14.2688 5.73124 14.6875 6.24999 14.6875C6.76874 14.6875 7.18749 14.2688 7.18749 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var penIcon = createIcon("pen", iconDefinition);
export {
  penIcon,
  iconDefinition
};
