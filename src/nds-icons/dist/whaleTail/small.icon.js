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

// src/nds-icons/src/whaleTail/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.112 3.035a.625.625 0 0 0-.724.743l.5 2.398A4.64 4.64 0 0 0 5.2 9.702a.916.916 0 0 1 .675.884v2.664c0 .345.28.625.625.625h3c.345 0 .625-.28.625-.625v-2.664c0-.413.276-.775.675-.884a4.64 4.64 0 0 0 3.312-3.526l.5-2.398a.625.625 0 0 0-.724-.743l-2.484.452A5.43 5.43 0 0 0 8 5.615a5.43 5.43 0 0 0-3.404-2.128zm9.515 1.682L13.2 4.43l-.31 1.49a3.39 3.39 0 0 1-2.42 2.575 2.17 2.17 0 0 0-1.594 2.09v2.039h-1.75v-2.039c0-.976-.653-1.832-1.594-2.09a3.39 3.39 0 0 1-2.42-2.575l-.31-1.49 1.572.286a4.18 4.18 0 0 1 2.65 1.68l.468.656a.625.625 0 0 0 1.018 0l.468-.655a4.18 4.18 0 0 1 2.65-1.681"
  }, undefined, false, undefined, this)
};
var whaleTailSmallIcon = createIcon("whaleTailSmall", iconDefinition);
export {
  whaleTailSmallIcon,
  iconDefinition
};
