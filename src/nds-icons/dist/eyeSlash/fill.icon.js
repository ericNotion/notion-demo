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

// src/nds-icons/src/eyeSlash/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m4.897 3.086-.122-.143a.625.625 0 0 0-.95.814l1.347 1.57c-1.762.91-3.195 2.304-4.083 3.997a1.47 1.47 0 0 0 0 1.362c1.61 3.07 5.011 5.155 8.911 5.155 1.282 0 2.51-.225 3.637-.637l1.588 1.853a.625.625 0 0 0 1.042-.67L4.989 3.229a.6.6 0 0 1-.093-.143m1.778 6.916c0-.784.272-1.505.726-2.074l1.291 1.507a1.426 1.426 0 0 0 1.67 1.948l1.291 1.506a3.326 3.326 0 0 1-4.978-2.887m9.228 4.038a9.4 9.4 0 0 0 3.01-3.354 1.47 1.47 0 0 0 0-1.362C17.302 6.254 13.9 4.169 10 4.169c-.805 0-1.588.089-2.339.257L9.61 6.699a3.326 3.326 0 0 1 3.595 4.194z"
  }, undefined, false, undefined, this)
};
var eyeSlashFillIcon = createIcon("eyeSlashFill", iconDefinition);
export {
  iconDefinition,
  eyeSlashFillIcon
};
