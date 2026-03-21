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

// src/nds-icons/src/globe/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25m-.23 1.621c.141-.172.22-.187.23-.188.01.001.09.016.23.188.155.19.323.505.476.948q.082.24.153.513a11 11 0 0 1-1.718 0q.071-.274.154-.513c.152-.443.32-.757.476-.948m-1.873 1.28a7 7 0 0 1-1.196-.365 4.9 4.9 0 0 1 1.67-1.007q-.143.297-.258.633-.12.345-.216.74m3.99-.74a6 6 0 0 0-.257-.632 4.9 4.9 0 0 1 1.67 1.007c-.35.145-.753.27-1.197.365a8 8 0 0 0-.216-.74m.56 3.339a15 15 0 0 0-.116-1.369 8 8 0 0 0 1.798-.598c.368.584.615 1.251.706 1.967zm-4.78-1.37q-.088.655-.115 1.369h-2.39a4.8 4.8 0 0 1 .707-1.967 8 8 0 0 0 1.798.598M8 6.242q.561 0 1.096-.05c.048.372.083.769.1 1.183h-2.39q.027-.622.1-1.183.535.05 1.095.05m-4.128 4.35a4.85 4.85 0 0 1-.706-1.967h2.389q.027.713.115 1.369c-.67.142-1.28.345-1.798.598m3.035-.784q-.075-.56-.101-1.183h2.39q-.027.622-.1 1.183a12 12 0 0 0-2.19 0m3.425.186q.087-.655.115-1.369h2.39a4.8 4.8 0 0 1-.712 1.975.6.6 0 0 0-.1-.058 8 8 0 0 0-1.693-.548m-3.036 1.562a7 7 0 0 1-.154-.514 11 11 0 0 1 1.718 0 7 7 0 0 1-.153.514c-.153.443-.321.757-.477.948-.14.172-.22.187-.229.188-.01-.001-.089-.016-.23-.188-.155-.19-.323-.505-.475-.948m-.925 1.04a4.9 4.9 0 0 1-1.67-1.007c.35-.145.753-.27 1.197-.366q.096.394.216.74.115.336.257.633m3.517-.633q.12-.345.216-.739c.442.096.845.22 1.196.365a4.9 4.9 0 0 1-1.67 1.007q.143-.297.258-.633"
  }, undefined, false, undefined, this)
};
var globeSmallIcon = createIcon("globeSmall", iconDefinition);
export {
  iconDefinition,
  globeSmallIcon
};
