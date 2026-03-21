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

// src/nds-icons/src/burst/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.625 3a.625.625 0 1 0-1.25 0v2.5a.625.625 0 1 0 1.25 0zm4.767 2.492a.625.625 0 1 0-.884-.884L12.74 6.376a.625.625 0 1 0 .884.884zM17.625 10c0 .345-.28.625-.625.625h-2.5a.625.625 0 0 1 0-1.25H17c.345 0 .625.28.625.625m-3.117 5.392a.625.625 0 1 0 .884-.884l-1.768-1.768a.625.625 0 0 0-.884.884zM10 17.625A.625.625 0 0 1 9.375 17v-2.5a.625.625 0 0 1 1.25 0V17c0 .345-.28.625-.625.625m-5.392-3.117a.625.625 0 0 0 .884.884l1.768-1.768a.625.625 0 1 0-.884-.884zM2.375 10c0-.345.28-.625.625-.625h2.5a.625.625 0 0 1 0 1.25H3A.625.625 0 0 1 2.375 10m3.117-5.392a.625.625 0 1 0-.884.884L6.376 7.26a.625.625 0 1 0 .884-.884z"
  }, undefined, false, undefined, this)
};
var burstIcon = createIcon("burst", iconDefinition);
export {
  iconDefinition,
  burstIcon
};
