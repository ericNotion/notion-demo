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
// src/noticons/src/conversation/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.5 11.4062C7.5 11.8094 7.53438 12.1906 7.59063 12.5625C6.99375 12.725 6.3375 12.8125 5.625 12.8125C4.98438 12.8125 4.39062 12.7437 3.84688 12.6156C2.90625 13.325 1.7375 13.75 0.46875 13.75L0 13.0469L1.57188 11.475C0.5625 10.5813 0 9.275 0 7.65625C0 4.475 2.15313 2.5 5.625 2.5C8.31563 2.5 10.2094 3.69062 10.925 5.70312C8.77187 6.70625 7.5 8.73125 7.5 11.4062ZM20 11.4062C20 8.225 17.8469 6.25 14.375 6.25C10.9031 6.25 8.75 8.225 8.75 11.4062C8.75 14.5875 10.9031 16.5625 14.375 16.5625C15.0156 16.5625 15.6094 16.4937 16.1531 16.3656C17.0938 17.075 18.2625 17.5 19.5312 17.5L20 16.7969L18.4281 15.225C19.4375 14.3313 20 13.025 20 11.4062Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var conversationIcon = createIcon("conversation", iconDefinition);
export {
  iconDefinition,
  conversationIcon
};
