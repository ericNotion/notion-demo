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

// src/nds-icons/src/lockDoc/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 7.13c-.71 0-1.284.575-1.284 1.284v.676a1.07 1.07 0 0 0-.459.88v.78c0 .594.482 1.075 1.075 1.075h1.336c.593 0 1.075-.481 1.075-1.075v-.78c0-.364-.182-.686-.46-.88v-.676A1.28 1.28 0 0 0 8 7.13m-.384 1.284a.384.384 0 1 1 .768 0v.482h-.768zm.042 1.918a.342.342 0 1 1 .684 0 .342.342 0 0 1-.684 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.125 2.125a1.75 1.75 0 0 0-1.75 1.75v8.25c0 .966.784 1.75 1.75 1.75h5.75a1.75 1.75 0 0 0 1.75-1.75V6.591c0-.464-.184-.91-.513-1.237L9.396 2.638a1.75 1.75 0 0 0-1.237-.513zm-.5 1.75a.5.5 0 0 1 .5-.5h2.604v1.831c0 .98.794 1.775 1.775 1.775h1.871v5.144a.5.5 0 0 1-.5.5h-5.75a.5.5 0 0 1-.5-.5zm4.254 1.331V3.888l1.943 1.943H9.504a.625.625 0 0 1-.625-.625"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var lockDocSmallIcon = createIcon("lockDocSmall", iconDefinition);
export {
  lockDocSmallIcon,
  iconDefinition
};
