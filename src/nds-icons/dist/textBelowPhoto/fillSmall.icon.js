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

// src/nds-icons/src/textBelowPhoto/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.07 1.9A1.57 1.57 0 0 0 2.5 3.47v5.351c0 .868.703 1.57 1.57 1.57h7.848a1.57 1.57 0 0 0 1.57-1.57v-5.35a1.57 1.57 0 0 0-1.57-1.571zm6.188 2.717a.5.5 0 0 1 .353.147L12.49 6.64v2.18a.57.57 0 0 1-.57.57H4.07a.57.57 0 0 1-.57-.57V7.668l1.346-1.346a.5.5 0 0 1 .707 0L6.949 7.72l2.955-2.955a.5.5 0 0 1 .354-.147M6.924 3.513q.245.002.454.099a.79.79 0 0 0 .507 1.487 1.084 1.084 0 1 1-.96-1.586M2.5 13.6a.5.5 0 0 1 .5-.5h5.68a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5m.5-2.354a.5.5 0 1 0 0 1h8.4a.5.5 0 0 0 0-1z"
  }, undefined, false, undefined, this)
};
var textBelowPhotoFillSmallIcon = createIcon("textBelowPhotoFillSmall", iconDefinition);
export {
  textBelowPhotoFillSmallIcon,
  iconDefinition
};
