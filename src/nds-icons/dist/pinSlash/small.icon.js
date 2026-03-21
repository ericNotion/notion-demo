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

// src/nds-icons/src/pinSlash/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m5.81 3.03-.92-1.08.06-.05c.11-.08.24-.12.37-.12h5.36c.34 0 .62.28.62.62v.38c0 .86-.37 1.68-1.01 2.26l-.18.16.11 1.14c1.44.58 2.41 2 2.41 3.55v.5c0 .11-.03.22-.09.32l-.05.09-1.14-1.33v-.02c-.16-.93-.82-1.7-1.72-2h-.02l-.02-.02-.58-.68v-.02l-.17-1.72c-.02-.2.06-.4.21-.53l.42-.38c.32-.28.52-.66.58-1.08H5.82zm7.1 10.69a.63.63 0 0 1-.88-.07l-2.26-2.63H8.74v2.34c0 .14-.03.28-.09.4l-.35.77-.06.08c-.07.07-.16.11-.26.11h-.06a.35.35 0 0 1-.26-.2l-.35-.75a.9.9 0 0 1-.09-.4v-2.34H3.99c-.34 0-.63-.28-.63-.62v-.5c0-1.55.96-2.96 2.39-3.54L3.01 3.18a.63.63 0 0 1 .07-.88.63.63 0 0 1 .88.07l9.01 10.51c.22.26.18.65-.08.87zM8.7 9.77 6.63 7.36s-.04.02-.07.03l-.19.06c-1 .34-1.7 1.27-1.75 2.32z"
  }, undefined, false, undefined, this)
};
var pinSlashSmallIcon = createIcon("pinSlashSmall", iconDefinition);
export {
  pinSlashSmallIcon,
  iconDefinition
};
