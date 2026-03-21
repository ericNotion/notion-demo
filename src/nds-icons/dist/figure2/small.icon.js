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

// src/nds-icons/src/figure2/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.618 2.595a1.096 1.096 0 1 0 0 2.192 1.096 1.096 0 0 0 0-2.192m4.764 0a1.096 1.096 0 1 0 0 2.192 1.096 1.096 0 0 0 0-2.192M1.939 4.95a.575.575 0 0 0-.127 1.142q1.273.143 2.55.225v.532a27.4 27.4 0 0 1-.442 4.796l-.229 1.259a.575.575 0 0 0 1.132.206l.229-1.26q.18-1.001.292-2.011h.548q.11 1.01.293 2.012l.228 1.259a.575.575 0 0 0 1.132-.206l-.229-1.26a27.4 27.4 0 0 1-.442-4.905v-.315q1.125.022 2.252 0v.625a25 25 0 0 1-.405 4.395l-.266 1.46a.575.575 0 0 0 1.132.206l.265-1.46q.164-.902.265-1.811h.54q.11 1.01.291 2.012l.23 1.259a.575.575 0 0 0 1.13-.206l-.228-1.26a27.4 27.4 0 0 1-.442-4.905v-.422a56 56 0 0 0 2.55-.225.575.575 0 1 0-.126-1.143 55 55 0 0 1-12.123 0"
  }, undefined, false, undefined, this)
};
var figure2SmallIcon = createIcon("figure2Small", iconDefinition);
export {
  iconDefinition,
  figure2SmallIcon
};
