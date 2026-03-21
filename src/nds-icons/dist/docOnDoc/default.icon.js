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

// src/nds-icons/src/docOnDoc/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.294 2.325h3.103c.484 0 .948.192 1.29.534l2.897 2.898c.342.342.535.806.535 1.29v5.903a1.825 1.825 0 0 1-1.825 1.825H12.53v1.075a1.825 1.825 0 0 1-1.825 1.825h-6A1.825 1.825 0 0 1 2.88 15.85v-8.8c0-1.008.817-1.825 1.825-1.825H7.47V4.15c0-1.008.817-1.825 1.825-1.825M9.1 5.76l2.897 2.897c.342.342.534.806.534 1.29v3.578h2.763a.575.575 0 0 0 .575-.575V7.3h-1.975a1.75 1.75 0 0 1-1.75-1.75V3.575h-2.85a.575.575 0 0 0-.575.575v1.318q.208.12.38.292m6.16.44-2.016-2.016V5.55c0 .359.29.65.65.65zm-10.554.275a.575.575 0 0 0-.575.575v8.8c0 .318.258.575.575.575h6a.575.575 0 0 0 .575-.575V10.2H9.306a1.75 1.75 0 0 1-1.75-1.75V6.475zm3.95.609V8.45c0 .359.291.65.65.65h1.366z"
  }, undefined, false, undefined, this)
};
var docOnDocIcon = createIcon("docOnDoc", iconDefinition);
export {
  iconDefinition,
  docOnDocIcon
};
