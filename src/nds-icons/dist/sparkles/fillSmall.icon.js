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

// src/nds-icons/src/sparkles/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.201 2.236a.625.625 0 1 0-1.25 0c0 .389-.249.914-.705 1.37s-.981.705-1.37.705a.625.625 0 0 0 0 1.25c.389 0 .914.25 1.37.706s.705.98.705 1.37a.625.625 0 0 0 1.25 0c0-.39.25-.915.706-1.37s.981-.706 1.37-.706a.625.625 0 1 0 0-1.25c-.389 0-.914-.249-1.37-.705S5.2 2.625 5.2 2.236m5.495 3.42a.625.625 0 0 0-1.25 0c0 .854-.403 1.715-1.058 2.37-.656.656-1.517 1.059-2.37 1.059a.625.625 0 1 0 0 1.25c.853 0 1.714.402 2.37 1.058.655.656 1.058 1.517 1.058 2.37a.625.625 0 0 0 1.25 0c0-.853.402-1.714 1.058-2.37s1.517-1.058 2.37-1.058a.625.625 0 0 0 0-1.25c-.853 0-1.714-.403-2.37-1.058-.656-.656-1.058-1.517-1.058-2.37"
  }, undefined, false, undefined, this)
};
var sparklesFillSmallIcon = createIcon("sparklesFillSmall", iconDefinition);
export {
  sparklesFillSmallIcon,
  iconDefinition
};
