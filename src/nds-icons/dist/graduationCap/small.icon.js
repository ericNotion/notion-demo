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

// src/nds-icons/src/graduationCap/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.95 2.35c-.598-.3-1.302-.3-1.9 0L1.454 5.146a1 1 0 0 0 0 1.79l.067.033v3.799a.77.77 0 0 0-.271.586v2.16a.954.954 0 0 0 1.542 0v-2.16a.77.77 0 0 0-.271-.586v-3.3l.73.365v2.856c0 .61.295 1.18.793 1.531a6.87 6.87 0 0 0 7.912 0c.498-.35.794-.922.794-1.531V7.834l1.796-.898a1 1 0 0 0 0-1.789zM7.61 3.466a.88.88 0 0 1 .782 0l5.15 2.575-5.15 2.574a.88.88 0 0 1-.782 0L2.46 6.042zM11.5 8.46v2.231a.62.62 0 0 1-.264.51 5.62 5.62 0 0 1-6.472 0 .62.62 0 0 1-.264-.51V8.46l2.55 1.274c.598.3 1.302.3 1.9 0z"
  }, undefined, false, undefined, this)
};
var graduationCapSmallIcon = createIcon("graduationCapSmall", iconDefinition);
export {
  iconDefinition,
  graduationCapSmallIcon
};
