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

// src/nds-icons/src/listToggleIndent/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.626 10c0-.484.392-.876.875-.876h7.6a.875.875 0 1 1 0 1.75H9.5A.875.875 0 0 1 8.626 10m-2-5c0-.484.392-.876.875-.876H17a.875.875 0 0 1 0 1.75H7.5A.875.875 0 0 1 6.626 5m4.874 9.124a.875.875 0 1 0 0 1.75h5.6a.875.875 0 1 0 0-1.75zM2.544 3.603c-.376 0-.643.393-.435.726L3.253 6.16a.52.52 0 0 0 .87 0l1.144-1.83c.208-.333-.058-.726-.435-.726zm2 5c-.376 0-.643.393-.435.726l1.144 1.831a.52.52 0 0 0 .87 0l1.144-1.83c.208-.333-.058-.726-.435-.726zm2 5c-.376 0-.643.393-.435.726l1.144 1.831a.52.52 0 0 0 .87 0l1.144-1.831c.208-.333-.058-.726-.435-.726z"
  }, undefined, false, undefined, this)
};
var listToggleIndentFillIcon = createIcon("listToggleIndentFill", iconDefinition);
export {
  listToggleIndentFillIcon,
  iconDefinition
};
