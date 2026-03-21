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

// src/nds-icons/src/bellSlash/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10 2.355a2.35 2.35 0 0 0-2.253 1.686q-.12.06-.236.126l.834.973a4 4 0 0 1 .186-.084l.33-.138.048-.354A1.104 1.104 0 0 1 10 3.605c.556 0 1.017.415 1.091.96l.049.353.329.138a3.81 3.81 0 0 1 2.337 3.512v1.189c0 .917.25 1.812.716 2.59l2.383 2.78a1.55 1.55 0 0 0-.092-1.937l-.818-.935a3.8 3.8 0 0 1-.939-2.498v-1.19a5.06 5.06 0 0 0-2.803-4.526A2.35 2.35 0 0 0 10 2.355m6.767 14.531L5.489 3.73a.6.6 0 0 1-.093-.144l-.121-.142a.625.625 0 0 0-.95.814L5.718 5.88a5.03 5.03 0 0 0-.773 2.688v1.189c0 .919-.334 1.806-.939 2.498l-.818.935c-.881 1.007-.166 2.583 1.173 2.583h3.02a2.65 2.65 0 0 0 5.24 0h1.577l1.529 1.784a.625.625 0 0 0 1.04-.67M6.194 8.568c0-.602.14-1.172.389-1.678l6.543 7.633H4.36a.308.308 0 0 1-.232-.51l.818-.935a5.04 5.04 0 0 0 1.248-3.321zm5.305 7.205a1.55 1.55 0 0 1-2.998 0z"
  }, undefined, false, undefined, this)
};
var bellSlashIcon = createIcon("bellSlash", iconDefinition);
export {
  iconDefinition,
  bellSlashIcon
};
