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

// src/nds-icons/src/captionsBubble/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M15.5 3.625c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-4.935l-3.871 2.978a.625.625 0 0 1-1.006-.496v-2.482H4.5a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125zm-10 5.838a.55.55 0 1 0 0 1.1h3a.55.55 0 1 0 0-1.1zm4.31.55c0 .303.246.55.55.55h4.14a.55.55 0 0 0 0-1.1h-4.14a.55.55 0 0 0-.55.55m-4.31 1.45a.55.55 0 0 0 0 1.1h1a.55.55 0 1 0 0-1.1zm7.45.55c0 .303.246.55.55.55h1a.55.55 0 0 0 0-1.1h-1a.55.55 0 0 0-.55.55M8 11.462a.55.55 0 0 0 0 1.1h3.828a.55.55 0 0 0 0-1.1z"
  }, undefined, false, undefined, this)
};
var captionsBubbleFillIcon = createIcon("captionsBubbleFill", iconDefinition);
export {
  iconDefinition,
  captionsBubbleFillIcon
};
