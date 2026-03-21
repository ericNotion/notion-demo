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

// src/nds-icons/src/figure2/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.2 4.51a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0M5.4 9.086V7.588a74 74 0 0 1-3.56-.308.55.55 0 0 1 .12-1.094 72.8 72.8 0 0 0 16.08 0 .55.55 0 0 1 .12 1.094 74 74 0 0 1-3.56.308v1.498c0 1.695.153 3.386.456 5.054l.435 2.395a.55.55 0 0 1-1.082.196l-.435-2.395q-.19-1.046-.305-2.103h-1.038a29 29 0 0 1-.304 2.103l-.436 2.395a.55.55 0 0 1-1.082-.196l.436-2.395c.296-1.634.449-3.29.455-4.95V7.712a74 74 0 0 1-3.4 0V9.14a28.3 28.3 0 0 0 .456 5l.435 2.395a.55.55 0 1 1-1.082.196l-.435-2.395q-.19-1.046-.305-2.103H6.331a29 29 0 0 1-.304 2.103l-.436 2.395a.55.55 0 0 1-1.082-.196l.435-2.395A28.3 28.3 0 0 0 5.4 9.086m7.75-3.226a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7"
  }, undefined, false, undefined, this)
};
var figure2Icon = createIcon("figure2", iconDefinition);
export {
  iconDefinition,
  figure2Icon
};
