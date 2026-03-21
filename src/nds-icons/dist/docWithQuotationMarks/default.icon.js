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

// src/nds-icons/src/docWithQuotationMarks/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.375 7.25c0-1.174.951-2.125 2.125-2.125h.25a.375.375 0 1 1 0 .75H8.5c-.745 0-1.352.593-1.374 1.333A1.375 1.375 0 1 1 8.25 9.375 1.875 1.875 0 0 1 6.375 7.5zM12.5 5.125a2.125 2.125 0 0 0-2.125 2.125v.25c0 1.036.84 1.875 1.875 1.875a1.375 1.375 0 1 0-1.124-2.167A1.375 1.375 0 0 1 12.5 5.875h.25a.375.375 0 0 0 0-.75zm-1.95 9.125a.55.55 0 0 1-.55.55H7.25a.55.55 0 0 1 0-1.1H10a.55.55 0 0 1 .55.55m2.2-1.95a.55.55 0 0 0 0-1.1h-5.5a.55.55 0 1 0 0 1.1z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.75 17.625h-7.5A2.125 2.125 0 0 1 4.125 15.5v-11c0-1.174.951-2.125 2.125-2.125h7.5c1.174 0 2.125.951 2.125 2.125v11a2.125 2.125 0 0 1-2.125 2.125m.875-2.125v-11a.875.875 0 0 0-.875-.875h-7.5a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h7.5a.875.875 0 0 0 .875-.875"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var docWithQuotationMarksIcon = createIcon("docWithQuotationMarks", iconDefinition);
export {
  iconDefinition,
  docWithQuotationMarksIcon
};
