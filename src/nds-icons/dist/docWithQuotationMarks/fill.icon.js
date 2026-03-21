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

// src/nds-icons/src/docWithQuotationMarks/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M13.75 17.625a2.125 2.125 0 0 0 2.125-2.125v-11a2.125 2.125 0 0 0-2.125-2.125h-7.5A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125zM6.375 7.25c0-1.174.951-2.125 2.125-2.125h.25a.375.375 0 1 1 0 .75H8.5c-.745 0-1.352.593-1.374 1.333A1.375 1.375 0 1 1 8.25 9.375 1.875 1.875 0 0 1 6.375 7.5zm4 0c0-1.174.951-2.125 2.125-2.125h.25a.375.375 0 0 1 0 .75h-.25c-.745 0-1.352.593-1.374 1.333a1.375 1.375 0 1 1 1.124 2.167A1.875 1.875 0 0 1 10.375 7.5zm.175 7a.55.55 0 0 1-.55.55H7.25a.55.55 0 0 1 0-1.1H10a.55.55 0 0 1 .55.55m2.2-1.95h-5.5a.55.55 0 0 1 0-1.1h5.5a.55.55 0 1 1 0 1.1"
  }, undefined, false, undefined, this)
};
var docWithQuotationMarksFillIcon = createIcon("docWithQuotationMarksFill", iconDefinition);
export {
  iconDefinition,
  docWithQuotationMarksFillIcon
};
