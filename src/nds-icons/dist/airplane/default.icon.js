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

// src/nds-icons/src/airplane/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.29 3.366a.63.63 0 0 1 .54-.311h2.81c.182 0 .356.08.474.218l4.023 4.692h2.983c1.112 0 2.025.897 2.025 2.025v.02a2.03 2.03 0 0 1-2.025 2.025h-2.983l-4.023 4.692a.63.63 0 0 1-.474.218H5.83a.625.625 0 0 1-.542-.936l2.274-3.974H6.496l-1.949 1.358-.026.017c-.24.15-.533.255-.851.255h-.65a.625.625 0 0 1-.597-.81L3.306 10l-.883-2.855a.625.625 0 0 1 .597-.81h.65c.298 0 .61.079.883.276l1.943 1.354h1.066L5.288 3.99a.63.63 0 0 1 .001-.624m1.618.939 2.274 3.974a.625.625 0 0 1-.542.936H6.3a.63.63 0 0 1-.357-.112L3.896 7.677l.661 2.138a.63.63 0 0 1 0 .37l-.661 2.138 2.047-1.426a.63.63 0 0 1 .357-.112h2.34a.625.625 0 0 1 .542.935l-2.274 3.975h1.445l4.023-4.692a.63.63 0 0 1 .474-.218h3.27a.78.78 0 0 0 .775-.775v-.02a.773.773 0 0 0-.775-.775h-3.27a.63.63 0 0 1-.474-.218L8.353 4.305z"
  }, undefined, false, undefined, this)
};
var airplaneIcon = createIcon("airplane", iconDefinition);
export {
  iconDefinition,
  airplaneIcon
};
