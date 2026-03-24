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
// src/noticons/src/trainMagneticLevitation/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M11.0875 3.17813H11.1219L10.5969 1.5625H9.40624L8.88124 3.17813H8.91561C5.64374 3.47188 4.06561 5 4.06561 5V15C4.06561 16.3813 5.18436 17.5 6.56561 17.5H8.12811V15.625H6.87811C6.53436 15.625 6.25311 15.3438 6.25311 15V13.75H13.7531V15C13.7531 15.3438 13.4719 15.625 13.1281 15.625H11.8781V17.5H13.4406C14.8219 17.5 15.9406 16.3813 15.9406 15V5C15.9406 5 14.3625 3.47188 11.0906 3.17813H11.0875ZM6.87499 12.5C6.35624 12.5 5.93749 12.0813 5.93749 11.5625C5.93749 11.0437 6.35624 10.625 6.87499 10.625C7.39374 10.625 7.81249 11.0437 7.81249 11.5625C7.81249 12.0813 7.39374 12.5 6.87499 12.5ZM13.125 12.5C12.6062 12.5 12.1875 12.0813 12.1875 11.5625C12.1875 11.0437 12.6062 10.625 13.125 10.625C13.6437 10.625 14.0625 11.0437 14.0625 11.5625C14.0625 12.0813 13.6437 12.5 13.125 12.5ZM14.0625 9.375H5.93749V6.25H14.0625V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trainMagneticLevitationIcon = createIcon("trainMagneticLevitation", iconDefinition);
export {
  trainMagneticLevitationIcon,
  iconDefinition
};
