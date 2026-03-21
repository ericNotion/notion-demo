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

// src/nds-icons/src/waveform/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.92 1.895a.625.625 0 0 0-.625.625v10.96a.625.625 0 1 0 1.25 0V2.52a.625.625 0 0 0-.625-.625m-2.16 1.84a.625.625 0 0 0-.625.625v7.28a.625.625 0 1 0 1.25 0V4.36a.625.625 0 0 0-.625-.625m6.48.4a.625.625 0 0 0-.625.625v6.48a.625.625 0 1 0 1.25 0V4.76a.625.625 0 0 0-.625-.625m-2.16 1.04a.625.625 0 0 0-.625.625v4.4a.625.625 0 1 0 1.25 0V5.8a.625.625 0 0 0-.625-.625M2.6 6.295a.625.625 0 0 0-.625.625v2.16a.625.625 0 1 0 1.25 0V6.92a.625.625 0 0 0-.625-.625m10.8 0a.625.625 0 0 0-.625.625v2.16a.625.625 0 0 0 1.25 0V6.92a.625.625 0 0 0-.625-.625"
  }, undefined, false, undefined, this)
};
var waveformSmallIcon = createIcon("waveformSmall", iconDefinition);
export {
  waveformSmallIcon,
  iconDefinition
};
