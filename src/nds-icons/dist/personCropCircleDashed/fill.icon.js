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

// src/nds-icons/src/personCropCircleDashed/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.758 2.476a7.7 7.7 0 0 1 2.484 0 .625.625 0 1 1-.202 1.233 6.4 6.4 0 0 0-2.08 0 .625.625 0 0 1-.202-1.233m4.812 1.469a.625.625 0 0 1 .872-.143 7.7 7.7 0 0 1 1.756 1.756.625.625 0 1 1-1.015.729 6.4 6.4 0 0 0-1.47-1.47.625.625 0 0 1-.143-.872m-7.283.872a.625.625 0 0 0-.73-1.015 7.7 7.7 0 0 0-1.755 1.756.625.625 0 1 0 1.015.729 6.4 6.4 0 0 1 1.47-1.47m10.519 3.425a.625.625 0 0 1 .718.516 7.7 7.7 0 0 1 0 2.484.625.625 0 0 1-1.233-.202 6.4 6.4 0 0 0 0-2.08.625.625 0 0 1 .515-.718M3.71 8.96a.625.625 0 0 0-1.234-.202 7.7 7.7 0 0 0 0 2.484.625.625 0 1 0 1.233-.202 6.4 6.4 0 0 1 0-2.08m12.346 4.61c.28.201.344.592.143.872a8 8 0 0 1-.625.762l-.006.007A7.6 7.6 0 0 1 10 17.625a7.6 7.6 0 0 1-4.434-1.42l-.008-.007a7.7 7.7 0 0 1-1.756-1.756.625.625 0 0 1 1.015-.729q.241.336.523.637l.006.006q.267.286.567.537C6.702 13.495 8.246 12.56 10 12.56s3.298.934 4.087 2.332a6.4 6.4 0 0 0 1.096-1.18.625.625 0 0 1 .872-.143m-8.3-7.4C8.277 5.519 9.05 5.125 10 5.125s1.723.393 2.245 1.044c.51.635.75 1.474.75 2.346s-.24 1.71-.75 2.346c-.522.65-1.294 1.044-2.245 1.044-.95 0-1.723-.394-2.245-1.044-.51-.635-.75-1.474-.75-2.346s.24-1.711.75-2.346"
  }, undefined, false, undefined, this)
};
var personCropCircleDashedFillIcon = createIcon("personCropCircleDashedFill", iconDefinition);
export {
  personCropCircleDashedFillIcon,
  iconDefinition
};
