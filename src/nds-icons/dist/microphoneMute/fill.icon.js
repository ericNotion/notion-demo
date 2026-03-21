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

// src/nds-icons/src/microphoneMute/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.315 4.021a2.876 2.876 0 0 1 5.56 1.029v3.6c0 .517-.136 1.002-.375 1.42zm-2.418-.935-.122-.143a.625.625 0 0 0-.95.814l3.3 3.85V8.65a2.875 2.875 0 0 0 3.329 2.84l1.233 1.438A5.3 5.3 0 0 1 10 13.2a5.33 5.33 0 0 1-4.396-2.309.625.625 0 0 0-1.028.71 6.58 6.58 0 0 0 4.799 2.82v1.929H5.95a.625.625 0 0 0 0 1.25h8.1a.625.625 0 0 0 0-1.25h-3.425v-1.93a6.5 6.5 0 0 0 1.927-.483l2.674 3.12a.625.625 0 0 0 1.04-.67L4.99 3.229a.6.6 0 0 1-.093-.143m9.73 9.466q.442-.437.797-.95a.625.625 0 1 0-1.029-.71q-.262.38-.584.708z"
  }, undefined, false, undefined, this)
};
var microphoneMuteFillIcon = createIcon("microphoneMuteFill", iconDefinition);
export {
  microphoneMuteFillIcon,
  iconDefinition
};
