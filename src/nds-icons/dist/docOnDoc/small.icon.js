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

// src/nds-icons/src/docOnDoc/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.435 1.735c-.875 0-1.585.71-1.585 1.585v.735H3.765c-.875 0-1.585.71-1.585 1.585v7.04c0 .875.71 1.585 1.585 1.585h4.8c.875 0 1.585-.71 1.585-1.585v-.735h2.085c.876 0 1.585-.71 1.585-1.585V5.638c0-.42-.167-.824-.464-1.121l-2.318-2.318a1.6 1.6 0 0 0-1.12-.464zM7.1 3.32c0-.185.15-.335.335-.335H9.58V4.44c0 .848.687 1.535 1.535 1.535h1.455v4.385c0 .185-.15.335-.335.335H10.15V7.958c0-.42-.167-.824-.464-1.121L7.368 4.519a1.6 1.6 0 0 0-.268-.215zm3.63 1.12v-.781l1.166 1.166h-.78a.385.385 0 0 1-.386-.385m-7.3 1.2c0-.185.15-.335.335-.335H5.91V6.76c0 .848.687 1.535 1.535 1.535H8.9v4.385c0 .185-.15.335-.335.335h-4.8a.335.335 0 0 1-.335-.335zm3.63 1.12v-.781l1.166 1.166h-.781a.385.385 0 0 1-.385-.385"
  }, undefined, false, undefined, this)
};
var docOnDocSmallIcon = createIcon("docOnDocSmall", iconDefinition);
export {
  iconDefinition,
  docOnDocSmallIcon
};
