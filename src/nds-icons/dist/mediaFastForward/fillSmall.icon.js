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

// src/nds-icons/src/mediaFastForward/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.608 11.555c-.536.536-.803.803-1.03.837a.7.7 0 0 1-.663-.274c-.136-.184-.136-.563-.136-1.32V5.202c0-.757 0-1.136.136-1.32a.7.7 0 0 1 .663-.274c.227.034.494.301 1.03.837l2.797 2.798c.248.247.372.371.425.511.06.159.06.333 0 .492-.053.14-.177.264-.425.511z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.888 4.424c0-.252 0-.378.045-.476a.5.5 0 0 1 .25-.25c.098-.044.223-.044.475-.044h.894c.252 0 .378 0 .476.044a.5.5 0 0 1 .25.25c.044.098.044.224.044.476v7.152c0 .252 0 .378-.044.476a.5.5 0 0 1-.25.25c-.098.044-.224.044-.476.044h-.894c-.252 0-.377 0-.476-.044a.5.5 0 0 1-.25-.25c-.044-.098-.044-.224-.044-.476zm-9.411 7.968c.226-.034.494-.301 1.029-.837l2.798-2.798c.248-.247.371-.371.424-.511a.7.7 0 0 0 0-.492c-.053-.14-.176-.264-.424-.511L3.506 4.445c-.535-.536-.803-.803-1.03-.837a.7.7 0 0 0-.662.274c-.136.184-.136.563-.136 1.32v5.596c0 .757 0 1.136.136 1.32a.7.7 0 0 0 .663.274"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var mediaFastForwardFillSmallIcon = createIcon("mediaFastForwardFillSmall", iconDefinition);
export {
  mediaFastForwardFillSmallIcon,
  iconDefinition
};
