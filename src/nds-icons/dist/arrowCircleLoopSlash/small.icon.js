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

// src/nds-icons/src/arrowCircleLoopSlash/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.875a6.1 6.1 0 0 0-2.568.563.075.075 0 0 0-.025.117l.75.876a.075.075 0 0 0 .085.02A4.9 4.9 0 0 1 8 3.126a4.85 4.85 0 0 1 2.73.836.625.625 0 0 0 .701-1.035A6.1 6.1 0 0 0 8 1.875m-4.025.468a.625.625 0 1 0-.95.814l.535.624A6.1 6.1 0 0 0 1.875 8v1.08l-.736-.736a.625.625 0 1 0-.884.884l1.803 1.803c.244.244.64.244.884 0l1.803-1.803a.625.625 0 1 0-.884-.884l-.736.736V8c0-1.255.474-2.4 1.254-3.264l6.293 7.342A4.85 4.85 0 0 1 8 12.875a4.85 4.85 0 0 1-2.73-.836.625.625 0 1 0-.701 1.035A6.1 6.1 0 0 0 8 14.125c1.297 0 2.5-.403 3.491-1.092l.534.624a.625.625 0 0 0 .957-.804L4.21 2.617l-.006-.007zm9.967 2.627a.625.625 0 0 0-.884 0l-1.803 1.802a.625.625 0 1 0 .884.884l.736-.736V8c0 .886-.236 1.717-.65 2.433a.075.075 0 0 0 .009.086l.75.876a.075.075 0 0 0 .12-.007A6.1 6.1 0 0 0 14.125 8V6.92l.736.736a.625.625 0 0 0 .884-.884z"
  }, undefined, false, undefined, this)
};
var arrowCircleLoopSlashSmallIcon = createIcon("arrowCircleLoopSlashSmall", iconDefinition);
export {
  iconDefinition,
  arrowCircleLoopSlashSmallIcon
};
