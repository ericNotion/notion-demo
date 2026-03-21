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

// src/nds-icons/src/eraserLineDashed/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.953 2.681a2.385 2.385 0 0 0-3.422.052L1.905 7.648a2.385 2.385 0 0 0 .05 3.32l2.35 2.35c.447.448 1.027.68 1.611.698a.7.7 0 0 0 .215.036h3.994a.66.66 0 0 0 0-1.32H8.23l4.123-4.38a2.385 2.385 0 0 0-.05-3.321zm-2.512.909a1.135 1.135 0 0 1 1.629-.025l2.35 2.35c.433.433.444 1.133.023 1.58l-3.302 3.508-4.044-3.86zM2.815 8.505l.493-.525 4.045 3.86-.536.57a1.13 1.13 0 0 1-.549.323h-.137a.7.7 0 0 0-.205.032 1.13 1.13 0 0 1-.738-.33l-2.35-2.35a1.135 1.135 0 0 1-.023-1.58m9.306 4.262a.625.625 0 0 0 0 1.25h1.997a.625.625 0 1 0 0-1.25z"
  }, undefined, false, undefined, this)
};
var eraserLineDashedSmallIcon = createIcon("eraserLineDashedSmall", iconDefinition);
export {
  iconDefinition,
  eraserLineDashedSmallIcon
};
