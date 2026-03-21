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

// src/nds-icons/src/teamspace/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.075 3.3A2.125 2.125 0 0 0 1.95 5.425V16.75c0 .345.28.625.625.625h2.6V13.6a.55.55 0 0 1 .55-.55h3.6a.55.55 0 0 1 .55.55v3.775H13.1V5.425A2.125 2.125 0 0 0 10.975 3.3zm1.875 4a.675.675 0 1 1 0-1.35.675.675 0 0 1 0 1.35m.675 1.575a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0M5.95 11.8a.675.675 0 1 1 0-1.35.675.675 0 0 1 0 1.35m3.825-5.175a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0M9.1 9.55a.675.675 0 1 1 0-1.35.675.675 0 0 1 0 1.35m.675 1.575a.675.675 0 1 1-1.35 0 .675.675 0 0 1 1.35 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.775 17.375h-2.5V14.15h2.5zm5.425 0v-8.45h1.725c1.174 0 2.125.951 2.125 2.125v5.7c0 .345-.28.625-.625.625zm1.82-4.675a.675.675 0 1 0 0-1.35.675.675 0 0 0 0 1.35m.675 1.575a.675.675 0 1 0-1.35 0 .675.675 0 0 0 1.35 0"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var teamspaceFillIcon = createIcon("teamspaceFill", iconDefinition);
export {
  teamspaceFillIcon,
  iconDefinition
};
