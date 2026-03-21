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

// src/nds-icons/src/pencilAndOutline/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m16.326 4.41.843-.843v-.02a1.05 1.05 0 0 0-.066-1.402 1.05 1.05 0 0 0-1.475 0l-.784.783zm-7.739 7.739 7.304-7.304-1.482-1.483-7.31 7.299c-.141.14-.239.324-.3.495l-.093.3-.214.687-.002.008c-.08.303.146.625.454.63a.5.5 0 0 0 .165-.027l.97-.3q.287-.083.508-.305"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.578 3.938c.751 0 1.475.115 2.156.329L10.267 5.73a6 6 0 0 0-.689-.043h-.35a5.103 5.103 0 0 0-5.103 5.102v.257c0 .958.284 1.895.815 2.692a7.75 7.75 0 0 0 4.571 3.221l.514.129a.875.875 0 0 1-.425 1.697l-.513-.128a9.5 9.5 0 0 1-5.603-3.948 6.6 6.6 0 0 1-1.109-3.663v-.257a6.853 6.853 0 0 1 6.853-6.852z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m15.482 7.022-1.263 1.263a5.45 5.45 0 0 1 .812 2.87 3.124 3.124 0 0 1-2.704 3.096l-.08.01a4.97 4.97 0 0 1-3.393-.775 2.3 2.3 0 0 1-.42.166l-.94.292a1.7 1.7 0 0 1-.722.079 6.72 6.72 0 0 0 5.705 1.973l.081-.01a4.874 4.874 0 0 0 4.223-4.832 7.2 7.2 0 0 0-1.3-4.132"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var pencilAndOutlineFillIcon = createIcon("pencilAndOutlineFill", iconDefinition);
export {
  pencilAndOutlineFillIcon,
  iconDefinition
};
