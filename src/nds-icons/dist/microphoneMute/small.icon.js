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

// src/nds-icons/src/microphoneMute/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.775c-.915 0-1.71.518-2.106 1.276a.08.08 0 0 0 .01.083l.842.983a.075.075 0 0 0 .132-.044 1.125 1.125 0 0 1 2.247.077v2.715q0 .027.018.049l.893 1.04a.075.075 0 0 0 .125-.017c.137-.3.214-.635.214-.987v-2.8A2.375 2.375 0 0 0 8 1.775m-4.025.568a.625.625 0 1 0-.95.814l2.6 3.033v.76a2.375 2.375 0 0 0 2.672 2.357l.771.9a4.02 4.02 0 0 1-4.373-1.593.625.625 0 1 0-1.028.71 5.26 5.26 0 0 0 3.708 2.24V12.8H4.85a.625.625 0 1 0 0 1.25h6.3a.625.625 0 0 0 .622-.69l.253.297a.625.625 0 0 0 .958-.804L4.209 2.618l-.006-.008zm5.97 8.886 1.364 1.591a.6.6 0 0 0-.16-.02H8.626v-1.237a5.2 5.2 0 0 0 1.32-.334m2.228-2.774a.625.625 0 0 0-.87.16 4 4 0 0 1-.295.377.075.075 0 0 0 0 .098l.72.842a.075.075 0 0 0 .113.002q.267-.285.491-.61a.625.625 0 0 0-.16-.869"
  }, undefined, false, undefined, this)
};
var microphoneMuteSmallIcon = createIcon("microphoneMuteSmall", iconDefinition);
export {
  microphoneMuteSmallIcon,
  iconDefinition
};
