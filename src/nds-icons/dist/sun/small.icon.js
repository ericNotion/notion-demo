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

// src/nds-icons/src/sun/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "1.17 1.17 13.66 13.66",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 11.976c.345 0 .625.28.625.625v1.6a.625.625 0 0 1-1.25 0v-1.6c0-.346.28-.625.625-.625M4.305 10.81a.626.626 0 0 1 .883.885l-1.13 1.131a.625.625 0 0 1-.884-.884zm6.507 0a.626.626 0 0 1 .883 0l1.131 1.132a.625.625 0 0 1-.884.884l-1.13-1.132a.625.625 0 0 1 0-.884M8 4.675a3.326 3.326 0 1 1 0 6.651 3.326 3.326 0 0 1 0-6.651m0 1.25a2.075 2.075 0 1 0 0 4.15 2.075 2.075 0 0 0 0-4.15m-4.6 1.45a.625.625 0 1 1 0 1.25H1.8a.625.625 0 0 1 0-1.25zm10.8 0a.625.625 0 1 1 0 1.25h-1.6a.625.625 0 1 1 0-1.25zM3.174 3.174a.625.625 0 0 1 .884 0l1.13 1.132a.625.625 0 0 1-.883.883L3.174 4.058a.625.625 0 0 1 0-.884m8.768 0a.625.625 0 0 1 .884.884l-1.13 1.131a.625.625 0 0 1-.884-.883zM8 1.175c.345 0 .625.28.625.625v1.6a.625.625 0 1 1-1.25 0V1.8c0-.345.28-.625.625-.625"
  }, undefined, false, undefined, this)
};
var sunSmallIcon = createIcon("sunSmall", iconDefinition, "small");
export {
  sunSmallIcon,
  iconDefinition
};
