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

// src/nds-icons/src/blockColor/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.485 2.335a1.04 1.04 0 0 0-1.04 1.04v.31a.5.5 0 0 0-.255-.07h-.555a.5.5 0 0 0 0 1h.555q.141-.001.255-.07v.31c0 .574.466 1.04 1.04 1.04h7.03a1.04 1.04 0 0 0 1.04-1.04v-.24h.44a.24.24 0 0 1 .24.24v1.619a.24.24 0 0 1-.24.24H8.74a1.24 1.24 0 0 0-1.24 1.24v.68a1.04 1.04 0 0 0-.91 1.031v2.96c0 .574.466 1.04 1.04 1.04h.74a1.04 1.04 0 0 0 1.04-1.04v-2.96c0-.53-.397-.968-.91-1.032v-.68a.24.24 0 0 1 .24-.24h4.255a1.24 1.24 0 0 0 1.24-1.24V4.856a1.24 1.24 0 0 0-1.24-1.24h-.44v-.24a1.04 1.04 0 0 0-1.04-1.04z"
  }, undefined, false, undefined, this)
};
var blockColorFillSmallIcon = createIcon("blockColorFillSmall", iconDefinition);
export {
  iconDefinition,
  blockColorFillSmallIcon
};
