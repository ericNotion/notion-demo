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

// src/nds-icons/src/calendarAlt/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  fittedViewBox: "3.12 3.12 13.75 13.75",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.125 12.125a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2.875 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-2.875-2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2.875 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2.875 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        fillRule: "evenodd",
        d: "M14.75 3.125c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125v-9.5c0-1.174.951-2.125 2.125-2.125zM4.375 7.55v7.2c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-7.2zm.875-3.175a.875.875 0 0 0-.875.875v1.2h11.25v-1.2a.875.875 0 0 0-.875-.875z",
        clipRule: "evenodd"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var calendarAltIcon = createIcon("calendarAlt", iconDefinition);
export {
  iconDefinition,
  calendarAltIcon
};
