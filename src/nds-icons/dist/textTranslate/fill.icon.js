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

// src/nds-icons/src/textTranslate/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M15.026 5.217a.875.875 0 1 0-1.75 0v.717H9.524a.875.875 0 1 0 0 1.75h6.32c-.318.752-.858 1.716-1.692 2.735a12.4 12.4 0 0 1-1.261-1.853.875.875 0 0 0-1.533.844c.394.716.917 1.502 1.593 2.302a16 16 0 0 1-3.123 2.311.875.875 0 0 0 .87 1.519 18 18 0 0 0 3.454-2.557 18 18 0 0 0 3.454 2.557.875.875 0 0 0 .87-1.519 16 16 0 0 1-3.123-2.311c1.272-1.507 2.01-2.965 2.36-4.028h1.068a.875.875 0 1 0 0-1.75h-3.754zm-8.439 7.41.898 2.456a.875.875 0 1 0 1.644-.601L5.88 5.596a1.19 1.19 0 0 0-2.234 0l-3.25 8.886a.875.875 0 1 0 1.645.6l.898-2.456zm-.64-1.75H3.579l1.185-3.24z"
  }, undefined, false, undefined, this)
};
var textTranslateFillIcon = createIcon("textTranslateFill", iconDefinition);
export {
  textTranslateFillIcon,
  iconDefinition
};
