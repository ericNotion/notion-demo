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

// src/nds-icons/src/squareOnSquareDashed/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.26 3.625a.635.635 0 0 0-.635.635v.831a.625.625 0 1 1-1.25 0V4.26c0-1.041.844-1.885 1.885-1.885h.831a.625.625 0 1 1 0 1.25zM6.794 3c0-.345.28-.625.625-.625H9.08a.625.625 0 1 1 0 1.25H7.42A.625.625 0 0 1 6.794 3m3.99 0c0-.345.28-.625.625-.625h.831c1.041 0 1.885.844 1.885 1.885v.831a.625.625 0 1 1-1.25 0V4.26a.635.635 0 0 0-.635-.635h-.831A.625.625 0 0 1 10.784 3M3 6.794c.345 0 .625.28.625.625V9.08a.625.625 0 1 1-1.25 0V7.42c0-.345.28-.625.625-.625m0 3.989c.345 0 .625.28.625.625v.831c0 .35.284.635.635.635h.831a.625.625 0 1 1 0 1.25H4.26a1.885 1.885 0 0 1-1.885-1.885v-.831c0-.345.28-.625.625-.625m5.25-4.659A2.125 2.125 0 0 0 6.125 8.25v7.5c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-7.5a2.125 2.125 0 0 0-2.125-2.125z"
  }, undefined, false, undefined, this)
};
var squareOnSquareDashedFillIcon = createIcon("squareOnSquareDashedFill", iconDefinition);
export {
  squareOnSquareDashedFillIcon,
  iconDefinition
};
