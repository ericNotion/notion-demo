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

// src/nds-icons/Icon.tsx
"use client";
// src/noticons/src/brain/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.25 9.22814C16.25 9.40314 16.1312 9.55626 15.9156 9.60939L15.1375 9.80314L14.825 11.6813C14.7375 12.1969 14.4 12.4969 13.9344 12.4969C13.8406 12.4969 13.7406 12.4844 13.6375 12.4594L11.8781 12.0188V13.1219L13.475 16.3125C13.6594 16.6813 13.7531 17.0844 13.7531 17.4969H10.6281V8.74689L13.2719 7.42501C13.2781 7.34689 13.2844 7.26564 13.2844 7.18439C13.2844 5.54376 11.9562 4.21564 10.3156 4.21564C8.675 4.21564 7.34687 5.54376 7.34687 7.18439C7.34687 8.49689 8.2 9.60626 9.37812 10V17.4969H5.00312C5.00312 15.7906 6.25312 14.3719 8.12812 13.4344V11.3281C6.64062 10.5406 5.62812 8.98126 5.62812 7.18439C5.62812 4.59689 7.72812 2.49689 10.3156 2.49689C12.9031 2.49689 15.0031 4.59689 15.0031 7.18439C15.0031 7.25626 14.9969 7.32814 14.9937 7.40001L16.1531 8.94689C16.2219 9.03751 16.2531 9.13439 16.2531 9.22501L16.25 9.22814Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var brainIcon = createIcon("brain", iconDefinition);
export {
  iconDefinition,
  brainIcon
};
