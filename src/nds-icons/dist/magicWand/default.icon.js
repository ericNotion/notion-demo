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

// src/nds-icons/src/magicWand/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.55 3a.55.55 0 0 0-1.1 0v2a.55.55 0 0 0 1.1 0zM8.47 8.47a.75.75 0 0 1 1.06 0l.897.896-1.06 1.06-.897-.896a.75.75 0 0 1 0-1.06m1.603 2.664 6.647 6.646a.75.75 0 1 0 1.06-1.06l-6.646-6.647zM10.55 15a.55.55 0 0 0-1.1 0v2a.55.55 0 0 0 1.1 0zm-3.697-1.853a.55.55 0 0 1 0 .777L5.44 15.34a.55.55 0 1 1-.778-.778l1.415-1.415a.55.55 0 0 1 .777 0m8.485-8.486a.55.55 0 0 1 0 .778l-1.415 1.414a.55.55 0 1 1-.777-.777L14.56 4.66a.55.55 0 0 1 .777 0M5.55 10a.55.55 0 0 1-.55.55H3a.55.55 0 1 1 0-1.1h2a.55.55 0 0 1 .55.55m12 0a.55.55 0 0 1-.55.55h-2a.55.55 0 1 1 0-1.1h2a.55.55 0 0 1 .55.55M6.853 6.853a.55.55 0 0 1-.778 0L4.661 5.44a.55.55 0 1 1 .778-.778l1.414 1.415a.55.55 0 0 1 0 .777"
  }, undefined, false, undefined, this)
};
var magicWandIcon = createIcon("magicWand", iconDefinition);
export {
  magicWandIcon,
  iconDefinition
};
