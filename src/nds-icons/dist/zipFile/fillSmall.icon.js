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

// src/nds-icons/src/zipFile/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.063 1.765a.981.981 0 0 1 1.874 0l.822 2.646a1.842 1.842 0 1 1-3.518 0zm1.7 3.19a.763.763 0 1 0-1.526 0 .763.763 0 0 0 1.526 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5 1.9h.974l-.688 2.215A2.843 2.843 0 0 0 7.5 7.757V8.3H6.45a.5.5 0 0 0 0 1H7.5v.6H6.45a.5.5 0 1 0 0 1H7.5v.6H6.45a.5.5 0 0 0 0 1H7.5v1.6H5a1.7 1.7 0 0 1-1.7-1.7V3.6A1.7 1.7 0 0 1 5 1.9m4.55 8.8H8.5v-.6h1.05a.5.5 0 0 0 0-1H8.5V7.757a2.843 2.843 0 0 0 2.214-3.642L10.026 1.9H11a1.7 1.7 0 0 1 1.7 1.7v8.8a1.7 1.7 0 0 1-1.7 1.7H8.5v-.8h1.05a.5.5 0 0 0 0-1H8.5v-.6h1.05a.5.5 0 0 0 0-1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var zipFileFillSmallIcon = createIcon("zipFileFillSmall", iconDefinition);
export {
  zipFileFillSmallIcon,
  iconDefinition
};
