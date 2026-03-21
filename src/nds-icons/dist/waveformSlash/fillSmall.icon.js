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

// src/nds-icons/src/waveformSlash/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.67 2.52a.75.75 0 1 0-1.5 0v.523l1.5 1.75zm.688 3.076L9.83 7.313V5.8a.75.75 0 0 0-1.472-.204m2.132 2.487 1.5 1.75V4.76a.75.75 0 0 0-1.5 0zm2.663 4.797L4.559 2.854a.6.6 0 0 1-.07-.102l-.42-.49a.75.75 0 0 0-1.138.976l1.079 1.26v7.142a.75.75 0 0 0 1.5 0V6.247l.66.77v6.463a.75.75 0 0 0 1.5 0V8.767l.66.77v.663a.75.75 0 0 0 1.125.65l2.476 2.888a.75.75 0 0 0 1.222-.858"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.6 6.17a.75.75 0 0 1 .75.75v2.16a.75.75 0 1 1-1.5 0V6.92a.75.75 0 0 1 .75-.75m10.8 0a.75.75 0 0 1 .75.75v2.16a.75.75 0 0 1-1.5 0V6.92a.75.75 0 0 1 .75-.75"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var waveformSlashFillSmallIcon = createIcon("waveformSlashFillSmall", iconDefinition);
export {
  waveformSlashFillSmallIcon,
  iconDefinition
};
