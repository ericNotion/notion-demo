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

// src/nds-icons/src/fish/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10823_12084)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M11.117 8a.707.707 0 1 1 1.415 0 .707.707 0 0 1-1.415 0"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "m15.33 7.657.035.072c.08.171.08.369 0 .54l-.035.072a7.14 7.14 0 0 1-3.99 3.642 5.55 5.55 0 0 1-4.495 2.294H5.188a.5.5 0 0 1-.4-.8l1.224-1.625a7.15 7.15 0 0 1-2.395-1.695l-.01-.012-2.063 1.36a.625.625 0 0 1-.969-.521V4.956a.625.625 0 0 1 .97-.521L3.64 5.818a7.15 7.15 0 0 1 2.37-1.672L4.788 2.523a.499.499 0 0 1 .399-.8h1.657c1.792 0 3.444.855 4.492 2.291a7.14 7.14 0 0 1 3.993 3.643M9.541 3.602a4.56 4.56 0 0 0-2.696-.88H6.19l.817 1.085c.6-.161 1.22-.254 1.853-.254.191 0 .38.019.567.038zm-3.35 9.675h.654a4.56 4.56 0 0 0 2.7-.882l-.113.011c-.19.02-.379.038-.572.038a7 7 0 0 1-1.851-.253zm-1.658-3.97a5.9 5.9 0 0 0 4.327 1.887A5.9 5.9 0 0 0 14.093 8 5.9 5.9 0 0 0 8.86 4.803c-1.642 0-3.21.684-4.327 1.888l-.093.1a2 2 0 0 0-.165.207.625.625 0 0 1-.86.169l-1.59-1.05v3.706L3.388 8.79a.625.625 0 0 1 .867.18q.081.122.185.235z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10823_12084",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var fishSmallIcon = createIcon("fishSmall", iconDefinition);
export {
  iconDefinition,
  fishSmallIcon
};
