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

// src/nds-icons/src/listNumber/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.126 2.961c.19.113.308.318.308.539v4a.625.625 0 1 1-1.25 0V4.562l-.13.073a.625.625 0 1 1-.608-1.093l1.06-.588a.63.63 0 0 1 .62.007M8.5 5.25a.75.75 0 0 0 0 1.5H16a.75.75 0 0 0 0-1.5zm0 8a.75.75 0 0 0 0 1.5H16a.75.75 0 0 0 0-1.5zM6 16.625H3.5a.625.625 0 0 1-.474-1.032l1.923-2.24a.6.6 0 0 0 .148-.4.26.26 0 0 0-.206-.255l-.164-.035a.5.5 0 0 0-.213.003l-.029.008a.5.5 0 0 0-.37.38.625.625 0 1 1-1.228-.234 1.75 1.75 0 0 1 1.303-1.36l.03-.008a1.7 1.7 0 0 1 .765-.01l.164.034a1.51 1.51 0 0 1 1.197 1.478c0 .445-.16.876-.45 1.214L4.86 15.375H6a.625.625 0 1 1 0 1.25"
  }, undefined, false, undefined, this)
};
var listNumberFillIcon = createIcon("listNumberFill", iconDefinition);
export {
  listNumberFillIcon,
  iconDefinition
};
