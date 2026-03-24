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

// src/nds-icons/Icon.tsx
"use client";
// src/noticons/src/glasses/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M0.625 7.1875V9.0625H1.875L2.22813 11.1844C2.5375 13.0406 3.74375 14.0625 5.625 14.0625C7.50625 14.0625 8.7125 13.0406 9.02188 11.1844L9.27188 9.67812C9.3375 9.28125 9.59688 9.0625 10 9.0625C10.4031 9.0625 10.6625 9.28125 10.7281 9.67812L10.9781 11.1844C11.2875 13.0406 12.4937 14.0625 14.375 14.0625C16.2563 14.0625 17.4625 13.0406 17.7719 11.1844L18.125 9.0625H19.375V7.1875H0.625ZM7.17188 10.8781C7.0125 11.8344 6.59375 12.1875 5.625 12.1875C4.65625 12.1875 4.2375 11.8313 4.07812 10.8781L3.775 9.0625H7.47188L7.16875 10.8781H7.17188ZM15.9219 10.8781C15.7625 11.8344 15.3438 12.1875 14.375 12.1875C13.4062 12.1875 12.9875 11.8313 12.8281 10.8781L12.525 9.0625H16.2219L15.9187 10.8781H15.9219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var glassesIcon = createIcon("glasses", iconDefinition);
export {
  iconDefinition,
  glassesIcon
};
