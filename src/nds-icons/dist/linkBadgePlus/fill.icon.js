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

// src/nds-icons/src/linkBadgePlus/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.67 4.67 9.82 6.52c-.34.34-.9.34-1.24 0a.88.88 0 0 1 0-1.24l1.85-1.85a4 4 0 0 1 2.85-1.18 4 4 0 0 1 2.85 1.18l.37.37a4 4 0 0 1 1.18 2.85A4 4 0 0 1 16.5 9.5l-.63.63c-.43-.14-.88-.23-1.36-.23-.35 0-.69.05-1.01.12l1.76-1.76c.43-.43.67-1 .67-1.61s-.24-1.18-.67-1.61l-.37-.37c-.86-.86-2.36-.86-3.22 0m-1.653 8.823.003-.003v-.01z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.017 13.493 8.26 15.25c-.89.89-2.33.89-3.22 0l-.37-.37c-.89-.89-.89-2.33 0-3.22l1.85-1.85c.34-.34.34-.9 0-1.24a.88.88 0 0 0-1.24 0l-1.85 1.85a4.026 4.026 0 0 0 0 5.69l.37.37a4 4 0 0 0 2.85 1.18 4 4 0 0 0 2.85-1.18l.63-.63a4.4 4.4 0 0 1-.23-1.36c0-.345.049-.671.117-.997"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m11.92 6.77-5.45 5.45a.881.881 0 0 0 .62 1.5c.23 0 .45-.09.62-.26l5.45-5.45c.34-.34.34-.9 0-1.24a.88.88 0 0 0-1.24 0M11 14.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5m4.09.66h1.38c.34 0 .62-.28.62-.62s-.28-.62-.62-.62h-1.38v-1.38c0-.34-.28-.62-.62-.62s-.62.28-.62.62v1.38h-1.38c-.34 0-.62.28-.62.62s.28.62.62.62h1.38v1.38c0 .34.28.62.62.62s.62-.28.62-.62z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var linkBadgePlusFillIcon = createIcon("linkBadgePlusFill", iconDefinition);
export {
  linkBadgePlusFillIcon,
  iconDefinition
};
