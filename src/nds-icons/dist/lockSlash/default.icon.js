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

// src/nds-icons/src/lockSlash/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.897 3.085q.035.077.092.144l11.992 13.99a.6.6 0 0 0 .127.113l.01.011a.625.625 0 0 1-.95.814l-.982-1.147c-.426.368-.98.59-1.586.59H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4c0-1.203.876-2.202 2.025-2.392v-1.09L3.826 3.758a.625.625 0 0 1 .949-.814zM6.4 8.6c-.649 0-1.175.526-1.175 1.175v5.4c0 .649.526 1.175 1.175 1.175h7.2c.296 0 .566-.11.772-.29l-3.23-3.766a1.36 1.36 0 0 1-.592.514v1.242a.55.55 0 0 1-1.1 0v-1.242a1.35 1.35 0 0 1 .014-2.473L7.977 8.6zm.452-5.118.837.976a2.75 2.75 0 0 1 5.06 1.492v1.4h-2.581l1.071 1.25H13.6c.649 0 1.175.526 1.175 1.175v2.95l1.25 1.459v-4.41A2.426 2.426 0 0 0 14 7.384V5.95a4 4 0 0 0-7.148-2.468"
  }, undefined, false, undefined, this)
};
var lockSlashIcon = createIcon("lockSlash", iconDefinition);
export {
  lockSlashIcon,
  iconDefinition
};
