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

// src/nds-icons/src/handWave/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.7 3.115a1.828 1.828 0 0 0-2.558 2.151 1.828 1.828 0 0 0-.882 2.93l.084.1a1.827 1.827 0 0 0-.724 2.876l3.616 4.298a6.291 6.291 0 0 0 10.73-6.193l-1.762-4.868a1.863 1.863 0 0 0-3.612.54L9.737 2.747a1.828 1.828 0 0 0-3.038.369m-1.174 1.2a.58.58 0 0 1 .814.07L9.17 7.748a.625.625 0 0 0 .956-.805L7.897 4.295a.578.578 0 0 1 .884-.744l3.73 4.431a.625.625 0 0 0 1.07-.598l-.71-2.149a.612.612 0 0 1 1.158-.4l1.762 4.867a5.042 5.042 0 0 1-8.598 4.963l-3.617-4.297a.577.577 0 1 1 .885-.744l1.627 1.934a.625.625 0 0 0 .957-.805L4.216 7.392a.578.578 0 0 1 .884-.744l2.228 2.648a.625.625 0 0 0 .957-.805L5.456 5.13a.58.58 0 0 1 .07-.814"
  }, undefined, false, undefined, this)
};
var handWaveIcon = createIcon("handWave", iconDefinition);
export {
  iconDefinition,
  handWaveIcon
};
