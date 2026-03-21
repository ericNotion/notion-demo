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

// src/nds-icons/src/eyeglasses/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.538 10.331c0 2.171-1.657 3.931-3.7 3.931s-3.7-1.76-3.7-3.93a4 4 0 0 1 .05-.657h-.513a.5.5 0 0 1 0-1h.806C3.069 7.33 4.351 6.4 5.838 6.4c1.362 0 2.553.782 3.195 1.948a2.5 2.5 0 0 1 1.935 0C11.61 7.182 12.8 6.4 14.163 6.4c1.486 0 2.768.931 3.356 2.275h.806a.5.5 0 1 1 0 1h-.514q.052.32.052.656c0 2.171-1.657 3.931-3.7 3.931s-3.7-1.76-3.7-3.93q.001-.55.134-1.055a1.5 1.5 0 0 0-1.194 0q.133.505.135 1.054m-1.25 0c0-1.553-1.168-2.681-2.45-2.681s-2.45 1.128-2.45 2.681 1.167 2.681 2.45 2.681c1.282 0 2.45-1.128 2.45-2.68m8.325 0c0-1.553-1.168-2.681-2.45-2.681s-2.45 1.128-2.45 2.681 1.167 2.681 2.45 2.681c1.282 0 2.45-1.128 2.45-2.68"
  }, undefined, false, undefined, this)
};
var eyeglassesIcon = createIcon("eyeglasses", iconDefinition);
export {
  iconDefinition,
  eyeglassesIcon
};
