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

// src/nds-icons/src/xMarkSeal/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.405 1.724a.625.625 0 0 0-.81 0L7.36 3.628l-2.926.234a.625.625 0 0 0-.573.573L3.628 7.36 1.724 9.595a.624.624 0 0 0 0 .81l1.904 2.234.233 2.926a.625.625 0 0 0 .574.574l2.926.233 2.234 1.904a.624.624 0 0 0 .81 0l2.234-1.904 2.926-.233a.625.625 0 0 0 .573-.574l.234-2.926 1.904-2.234a.624.624 0 0 0 0-.81L16.372 7.36l-.234-2.926a.625.625 0 0 0-.573-.573l-2.926-.234zm2.412 5.46a.625.625 0 0 1 0 .883L10.884 10l1.933 1.933a.625.625 0 0 1-.884.884L10 10.884l-1.933 1.933a.625.625 0 0 1-.884-.884L9.116 10 7.183 8.067a.625.625 0 0 1 .884-.884L10 9.116l1.933-1.933a.625.625 0 0 1 .884 0"
  }, undefined, false, undefined, this)
};
var xMarkSealFillIcon = createIcon("xMarkSealFill", iconDefinition);
export {
  xMarkSealFillIcon,
  iconDefinition
};
