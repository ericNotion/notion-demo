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
// src/noticons/src/taurus/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.7125 2.5C14.5594 2.5 13.4906 3.07187 12.8531 4.03125L11.8375 5.55625C11.5469 5.99063 11.0625 6.25313 10.5375 6.25313H9.4625C8.9375 6.25313 8.45313 5.99375 8.1625 5.55625L7.14688 4.03125C6.50938 3.07187 5.4375 2.5 4.2875 2.5H2.5V4.375H4.2875C4.8125 4.375 5.29687 4.63437 5.5875 5.07187L6.60312 6.59688C6.72812 6.78438 6.875 6.95312 7.03125 7.10938C5.44062 8.10313 4.37813 9.86562 4.37813 11.8781C4.37813 14.9812 6.90312 17.5031 10.0031 17.5031C13.1031 17.5031 15.6281 14.9812 15.6281 11.8781C15.6281 9.86875 14.5656 8.10625 12.975 7.10938C13.1313 6.95312 13.2781 6.78438 13.4031 6.59688L14.4187 5.07187C14.7094 4.6375 15.1937 4.375 15.7188 4.375H17.5063V2.5H15.7188H15.7125ZM10 15.625C7.93125 15.625 6.25 13.9438 6.25 11.875C6.25 9.80625 7.93125 8.125 10 8.125C12.0688 8.125 13.75 9.80625 13.75 11.875C13.75 13.9438 12.0688 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var taurusIcon = createIcon("taurus", iconDefinition);
export {
  taurusIcon,
  iconDefinition
};
