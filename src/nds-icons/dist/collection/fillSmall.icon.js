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

// src/nds-icons/src/collection/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 2.031c-1.545 0-2.924.226-3.9.578-.491.177-.856.376-1.09.575-.237.202-.291.359-.291.457s.054.255.29.457c.235.2.6.399 1.09.575.977.352 2.356.578 3.901.578s2.924-.226 3.9-.578c.491-.176.856-.376 1.09-.575.237-.202.291-.358.291-.457 0-.098-.054-.255-.29-.457-.235-.199-.6-.398-1.09-.575-.977-.352-2.356-.578-3.9-.578"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m2.907 5.12-.188-.109v3.036c0 .099.054.255.29.457.235.199.6.399 1.09.575.977.352 2.356.578 3.901.578s2.924-.226 3.9-.578c.491-.176.856-.376 1.09-.575.237-.202.291-.358.291-.457V5.01l-.187.11a5.5 5.5 0 0 1-.892.405c-1.097.395-2.582.63-4.202.63s-3.105-.235-4.201-.63a5.5 5.5 0 0 1-.892-.406"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m2.907 9.526-.188-.109v3.036c0 .098.054.255.29.456.235.2.6.4 1.09.576.977.351 2.356.578 3.901.578s2.924-.227 3.9-.578c.491-.177.856-.377 1.09-.576.237-.202.291-.358.291-.457V9.418l-.187.109a5.5 5.5 0 0 1-.892.406c-1.097.394-2.582.63-4.202.63s-3.105-.236-4.201-.63a5.5 5.5 0 0 1-.892-.406"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var collectionFillSmallIcon = createIcon("collectionFillSmall", iconDefinition);
export {
  iconDefinition,
  collectionFillSmallIcon
};
