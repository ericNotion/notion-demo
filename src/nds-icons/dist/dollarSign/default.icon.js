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

// src/nds-icons/src/dollarSign/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.375 18.072a.625.625 0 1 0 1.25 0V16.9c1.044-.083 1.989-.378 2.722-.868.889-.594 1.478-1.489 1.478-2.596 0-1.028-.37-1.924-1.196-2.624-.704-.598-1.707-1.025-3.004-1.32V4.354c.83.08 1.526.318 2.028.653.611.409.922.945.922 1.557a.625.625 0 1 0 1.25 0c0-1.107-.59-2.002-1.478-2.596-.733-.49-1.678-.785-2.722-.868V1.928a.625.625 0 1 0-1.25 0V3.1c-1.045.083-1.99.378-2.722.868-.889.594-1.478 1.489-1.478 2.596 0 1.029.37 1.924 1.195 2.624.705.598 1.708 1.025 3.005 1.32v5.138c-.83-.08-1.526-.318-2.028-.653-.611-.409-.922-.945-.922-1.557a.625.625 0 0 0-1.25 0c0 1.107.59 2.002 1.478 2.596.733.49 1.677.785 2.722.869zm0-8.85c-1.038-.262-1.741-.601-2.196-.987-.525-.445-.754-.982-.754-1.671 0-.612.31-1.148.922-1.557.502-.335 1.197-.573 2.028-.653zm1.25 1.556c1.037.262 1.74.601 2.195.987.525.446.755.982.755 1.671 0 .612-.31 1.148-.922 1.557-.502.335-1.197.573-2.028.653z"
  }, undefined, false, undefined, this)
};
var dollarSignIcon = createIcon("dollarSign", iconDefinition);
export {
  iconDefinition,
  dollarSignIcon
};
