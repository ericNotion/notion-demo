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

// src/nds-icons/src/arrowCircleLoopSlash/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 17 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m4.292 2.46-.17-.198a.75.75 0 1 0-1.138.976l.462.539A6.23 6.23 0 0 0 1.803 8v.778l-.523-.522a.75.75 0 0 0-1.06 1.06l1.803 1.803a.75.75 0 0 0 1.06 0l1.803-1.803a.75.75 0 1 0-1.06-1.06l-.523.522V8c0-1.172.425-2.245 1.128-3.073l6.106 7.123c-.723.444-1.574.7-2.484.7-.987 0-1.901-.3-2.66-.814a.75.75 0 1 0-.841 1.242 6.23 6.23 0 0 0 3.501 1.072 6.2 6.2 0 0 0 3.47-1.05l.46.538a.75.75 0 0 0 1.185-.917L4.33 2.51zm9.049 8.873c.61-.965.962-2.108.962-3.333v-.778l.523.522a.75.75 0 0 0 1.06-1.06L14.085 4.88a.75.75 0 0 0-1.061 0L11.22 6.684a.75.75 0 0 0 1.06 1.06l.523-.522V8a4.7 4.7 0 0 1-.5 2.122zM6.606 3.474a4.8 4.8 0 0 1 1.447-.224c.987 0 1.902.3 2.66.814a.75.75 0 1 0 .842-1.242A6.2 6.2 0 0 0 8.053 1.75a6.2 6.2 0 0 0-2.485.514z"
  }, undefined, false, undefined, this)
};
var arrowCircleLoopSlashFillSmallIcon = createIcon("arrowCircleLoopSlashFillSmall", iconDefinition);
export {
  iconDefinition,
  arrowCircleLoopSlashFillSmallIcon
};
