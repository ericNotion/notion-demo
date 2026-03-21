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

// src/nds-icons/src/zipFile/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.829 2.206a1.227 1.227 0 0 1 2.342 0l.053.169h2.526c1.174 0 2.125.951 2.125 2.125v11a2.125 2.125 0 0 1-2.125 2.125h-7.5A2.125 2.125 0 0 1 4.125 15.5v-11c0-1.174.951-2.125 2.125-2.125h2.526zm-.441 1.419H6.25a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875H9.5V14.5H8.063a.5.5 0 0 1 0-1H9.5v-1H8.063a.5.5 0 0 1 0-1H9.5v-1H8.063a.5.5 0 0 1 0-1H9.5V8.446a2.304 2.304 0 0 1-1.699-2.932zM10.5 12.5h1.438a.5.5 0 0 1 0 1H10.5v1h1.438a.5.5 0 0 1 0 1H10.5v.875h3.25a.875.875 0 0 0 .875-.875v-11a.875.875 0 0 0-.875-.875h-2.138l.587 1.89a2.304 2.304 0 0 1-1.699 2.93V10.5h1.438a.5.5 0 0 1 0 1H10.5zm.454-6.306a.954.954 0 1 0-1.908 0 .954.954 0 0 0 1.908 0"
  }, undefined, false, undefined, this)
};
var zipFileIcon = createIcon("zipFile", iconDefinition);
export {
  zipFileIcon,
  iconDefinition
};
