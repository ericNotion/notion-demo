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
// src/noticons/src/lights/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10 2.5C5.85625 2.5 2.5 5.85625 2.5 10C2.5 14.1438 5.85625 17.5 10 17.5C14.1438 17.5 17.5 14.1438 17.5 10C17.5 5.85625 14.1438 2.5 10 2.5ZM10.5969 15.5906L13.0938 13.0938L12.2094 12.2094L8.90312 15.5156C8.45 15.425 8.00625 15.275 7.58125 15.0719L11.3281 11.325L10.4437 10.4406L6.49375 14.3938C6.14688 14.1156 5.8875 13.8562 5.60938 13.5094L9.5625 9.55625L8.67813 8.67188L4.93125 12.4188C4.72812 11.9938 4.57812 11.55 4.4875 11.0969L7.79375 7.79063L6.90938 6.90625L4.4125 9.40312C4.71563 6.54375 7.12812 4.375 10.0031 4.375C13.1094 4.375 15.6281 6.89375 15.6281 10C15.6281 12.8781 13.4594 15.2875 10.6 15.5906H10.5969Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lightsIcon = createIcon("lights", iconDefinition);
export {
  lightsIcon,
  iconDefinition
};
