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

// src/nds-icons/src/handbag/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m6.308 4.616-.484 2.9q-.53.06-1.058.137A2.07 2.07 0 0 0 3.01 9.455l-.591 4.989a2.425 2.425 0 0 0 2.408 2.71h10.348a2.425 2.425 0 0 0 2.408-2.71l-.591-4.99a2.066 2.066 0 0 0-1.757-1.801q-.528-.077-1.058-.137l-.483-2.9a3.325 3.325 0 0 0-3.28-2.779h-.826a3.325 3.325 0 0 0-3.28 2.779m3.28-1.529h.825c1.014 0 1.88.734 2.047 1.734l.428 2.57a37 37 0 0 0-5.776 0l.429-2.57a2.075 2.075 0 0 1 2.046-1.734m5.586 12.817H4.826c-.704 0-1.25-.614-1.167-1.313l.489-4.123c1.375 1.31 3.136 2.059 4.952 2.244v1.455c0 .248.202.45.45.45h.9a.45.45 0 0 0 .45-.45v-1.455c1.816-.185 3.577-.933 4.952-2.244l.489 4.123a1.175 1.175 0 0 1-1.167 1.313m.391-6.73c-2.85 3.312-8.28 3.312-11.13 0a.82.82 0 0 1 .51-.284 35.4 35.4 0 0 1 10.11 0c.205.03.385.134.51.285"
  }, undefined, false, undefined, this)
};
var handbagIcon = createIcon("handbag", iconDefinition);
export {
  iconDefinition,
  handbagIcon
};
