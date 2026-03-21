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

// src/nds-icons/src/textFormat/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    fillRule: "evenodd",
    d: "m8.793 12.35 1.124 3.042a.625.625 0 1 0 1.173-.434L7.352 4.846a.988.988 0 0 0-1.854 0L1.761 14.958a.625.625 0 1 0 1.172.434l1.124-3.042zm-.462-1.25L6.425 5.943 4.52 11.1zm9.322-2.381c.345 0 .625.28.625.625v5.83a.625.625 0 1 1-1.25 0v-.204a3.26 3.26 0 0 1-2.21.83c-.903 0-1.742-.342-2.353-.98s-.961-1.537-.961-2.592.35-1.943.968-2.567c.616-.623 1.454-.942 2.346-.942.824 0 1.606.272 2.21.802v-.177c0-.345.28-.625.625-.625m-4.9 3.51c0-.774.252-1.33.608-1.69.358-.362.864-.57 1.457-.57s1.107.209 1.472.573c.361.361.616.917.616 1.686 0 1.503-.966 2.322-2.088 2.322-.582 0-1.088-.217-1.45-.595-.362-.377-.614-.952-.614-1.727",
    clipRule: "evenodd"
  }, undefined, false, undefined, this)
};
var textFormatIcon = createIcon("textFormat", iconDefinition);
export {
  textFormatIcon,
  iconDefinition
};
