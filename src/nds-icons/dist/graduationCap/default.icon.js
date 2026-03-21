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

// src/nds-icons/src/graduationCap/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.115 3.056a2.5 2.5 0 0 0-2.23 0L1.797 6.6a1.069 1.069 0 0 0 0 1.912l.04.02-.004.07v4.368a.87.87 0 0 0-.282.642v2.72a.875.875 0 1 0 1.75 0v-2.72a.87.87 0 0 0-.28-.642V9.123l1.162.582-.002.048v3.69c0 .708.344 1.371.922 1.779a8.5 8.5 0 0 0 9.794 0 2.18 2.18 0 0 0 .922-1.778V9.753q0-.025-.002-.048l2.386-1.193a1.069 1.069 0 0 0 0-1.912zm-1.7 1.062a1.31 1.31 0 0 1 1.17 0l6.875 3.438-6.876 3.437c-.368.184-.8.184-1.168 0L2.54 7.557zm5.216 6.18v3.146a.99.99 0 0 1-.418.807 7.31 7.31 0 0 1-8.425 0 .99.99 0 0 1-.42-.807v-3.146l3.517 1.758a2.5 2.5 0 0 0 2.23 0z"
  }, undefined, false, undefined, this)
};
var graduationCapIcon = createIcon("graduationCap", iconDefinition);
export {
  iconDefinition,
  graduationCapIcon
};
