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

// src/nds-icons/src/eyeSlash/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m4.897 3.086-.122-.143a.625.625 0 0 0-.95.814l1.347 1.57c-1.762.91-3.195 2.304-4.083 3.997a1.47 1.47 0 0 0 0 1.362c1.61 3.07 5.011 5.155 8.911 5.155 1.282 0 2.51-.225 3.637-.637l1.588 1.853a.625.625 0 0 0 1.042-.67L4.989 3.229a.6.6 0 0 1-.093-.143M2.194 9.905c.807-1.538 2.15-2.807 3.816-3.599L7.4 7.928a3.326 3.326 0 0 0 4.252 4.961l1.107 1.292a9.4 9.4 0 0 1-2.76.41c-3.459 0-6.42-1.848-7.805-4.486a.22.22 0 0 1 0-.2m6.696.097q0-.151.039-.29l1.194 1.393q-.06.007-.124.007a1.11 1.11 0 0 1-1.109-1.11m7.012 4.038a9.4 9.4 0 0 0 3.01-3.354 1.47 1.47 0 0 0 0-1.362C17.302 6.254 13.9 4.169 10 4.169c-.805 0-1.588.089-2.339.257l.94 1.096a9.5 9.5 0 0 1 1.4-.103c3.458 0 6.42 1.848 7.804 4.486a.22.22 0 0 1 0 .2 8.14 8.14 0 0 1-2.722 2.98z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.205 10.893a3.33 3.33 0 0 0-3.596-4.194z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var eyeSlashIcon = createIcon("eyeSlash", iconDefinition);
export {
  iconDefinition,
  eyeSlashIcon
};
