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

// src/nds-icons/src/cursorClick/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.922 7.065a.379.379 0 0 1 .57-.37l.051.036 3.992 3.366a.379.379 0 0 1-.2.666l-1.166.132 1.328 2.386a.736.736 0 1 1-1.289.715l-1.286-2.31-.674.994a.379.379 0 0 1-.691-.17l-.635-5.445ZM4.96 10.05a.7.7 0 1 1 .99.99l-1.414 1.414a.7.7 0 1 1-.99-.99L4.96 10.05Zm-.56-2.75a.7.7 0 1 1 0 1.4H2.4a.7.7 0 0 1 0-1.4h2Zm9.2 0a.7.7 0 0 1 0 1.4h-2a.7.7 0 0 1 0-1.4h2ZM3.546 3.546a.7.7 0 0 1 .99 0l1.414 1.414a.7.7 0 1 1-.99.99L3.546 4.536a.7.7 0 0 1 0-.99Zm7.919 0a.7.7 0 1 1 .99.99l-1.414 1.414a.7.7 0 1 1-.99-.99l1.414-1.414ZM8 1.7c.387 0 .7.314.7.7v2a.7.7 0 0 1-1.4 0v-2c0-.386.313-.7.7-.7Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cursorClickFillSmallIcon = createIcon("cursorClickFillSmall", iconDefinition);
export {
  iconDefinition,
  cursorClickFillSmallIcon
};
