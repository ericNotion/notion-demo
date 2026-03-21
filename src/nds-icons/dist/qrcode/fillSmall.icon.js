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

// src/nds-icons/src/qrcode/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.516 3.798c0-.717.58-1.298 1.297-1.298h2.393c.716 0 1.297.58 1.297 1.298V6.19c0 .717-.58 1.298-1.297 1.298H3.813A1.3 1.3 0 0 1 2.516 6.19zm2.095.598a.2.2 0 0 0-.2.2v.797c0 .11.09.2.2.2h.797a.2.2 0 0 0 .2-.2v-.798a.2.2 0 0 0-.2-.2zM2.516 9.78c0-.717.58-1.298 1.297-1.298h2.393c.716 0 1.297.58 1.297 1.297v2.393c0 .717-.58 1.297-1.297 1.297H3.813c-.716 0-1.297-.58-1.297-1.297zm2.095.598a.2.2 0 0 0-.2.199v.797c0 .11.09.2.2.2h.797a.2.2 0 0 0 .2-.2v-.797a.2.2 0 0 0-.2-.2zm3.886-6.58c0-.717.581-1.298 1.298-1.298h2.393c.716 0 1.297.58 1.297 1.298V6.19c0 .717-.58 1.298-1.297 1.298H9.795A1.3 1.3 0 0 1 8.497 6.19zm2.893.598h-.797a.2.2 0 0 0-.2.2v.797c0 .11.09.2.2.2h.797a.2.2 0 0 0 .2-.2v-.798a.2.2 0 0 0-.2-.2m1.739 4.252h-.877a.2.2 0 0 0-.2.2v.876c0 .11.09.2.2.2h.877a.2.2 0 0 0 .2-.2v-.877a.2.2 0 0 0-.2-.2m-.877 3.39h.877c.11 0 .2.09.2.2v.877a.2.2 0 0 1-.2.2h-.877a.2.2 0 0 1-.2-.2v-.877c0-.11.09-.2.2-.2M9.74 8.647h-.878a.2.2 0 0 0-.2.2v.876c0 .11.09.2.2.2h.877a.2.2 0 0 0 .2-.2v-.877a.2.2 0 0 0-.2-.2m-.877 3.39h.877c.11 0 .2.09.2.2v.877a.2.2 0 0 1-.2.2h-.877a.2.2 0 0 1-.2-.2v-.877c0-.11.09-.2.2-.2m2.568-1.698h-.877a.2.2 0 0 0-.2.199v.877c0 .11.09.2.2.2h.877a.2.2 0 0 0 .2-.2v-.877a.2.2 0 0 0-.2-.2"
  }, undefined, false, undefined, this)
};
var qrcodeFillSmallIcon = createIcon("qrcodeFillSmall", iconDefinition);
export {
  qrcodeFillSmallIcon,
  iconDefinition
};
