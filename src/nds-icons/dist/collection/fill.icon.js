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

// src/nds-icons/src/collection/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10 2.875c-1.848 0-3.497.268-4.664.685-.586.21-1.02.445-1.297.68-.281.237-.34.416-.34.525 0 .108.059.288.34.525.277.234.711.47 1.297.68 1.167.416 2.816.684 4.664.684s3.497-.268 4.664-.685c.586-.209 1.02-.445 1.297-.68.28-.236.34-.416.34-.524s-.06-.288-.34-.525c-.277-.235-.711-.47-1.297-.68-1.167-.417-2.816-.685-4.664-.685"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m3.886 6.542-.188-.107V10c0 .108.06.288.34.525.278.234.712.47 1.298.68 1.167.416 2.816.685 4.664.685s3.497-.269 4.664-.685c.586-.21 1.02-.446 1.297-.68.28-.237.34-.417.34-.525V6.435l-.187.107c-.318.183-.68.344-1.073.484-1.317.47-3.1.75-5.041.75s-3.725-.28-5.042-.75a6.6 6.6 0 0 1-1.072-.484"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m3.886 11.778-.188-.108v3.565c0 .109.06.289.34.526.278.234.712.47 1.298.679 1.167.417 2.816.685 4.664.685s3.497-.268 4.664-.685c.586-.21 1.02-.446 1.297-.68.28-.236.34-.416.34-.525V11.67l-.187.108c-.318.182-.68.344-1.073.484-1.317.47-3.1.75-5.041.75s-3.725-.28-5.042-.75a6.7 6.7 0 0 1-1.072-.484"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var collectionFillIcon = createIcon("collectionFill", iconDefinition);
export {
  iconDefinition,
  collectionFillIcon
};
