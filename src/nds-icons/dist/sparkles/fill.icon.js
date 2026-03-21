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

// src/nds-icons/src/sparkles/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.35 2.795a.63.63 0 1 0-1.26 0c0 .541-.34 1.234-.925 1.82-.586.585-1.279.925-1.82.925a.63.63 0 1 0 0 1.26c.541 0 1.234.34 1.82.926.585.586.926 1.279.926 1.82a.63.63 0 0 0 1.26 0c0-.541.34-1.234.925-1.82.586-.585 1.279-.926 1.82-.926a.63.63 0 0 0 0-1.26c-.541 0-1.234-.34-1.82-.925-.585-.586-.925-1.279-.925-1.82m6.867 4.275a.63.63 0 1 0-1.26 0c0 1.115-.525 2.228-1.367 3.07-.843.843-1.956 1.367-3.07 1.367a.63.63 0 0 0 0 1.26c1.114 0 2.227.525 3.07 1.367.842.843 1.367 1.956 1.367 3.07a.63.63 0 1 0 1.26 0c0-1.114.524-2.227 1.367-3.07.842-.842 1.955-1.367 3.07-1.367a.63.63 0 1 0 0-1.26c-1.115 0-2.228-.524-3.07-1.366-.843-.843-1.367-1.956-1.367-3.07"
  }, undefined, false, undefined, this)
};
var sparklesFillIcon = createIcon("sparklesFill", iconDefinition);
export {
  sparklesFillIcon,
  iconDefinition
};
