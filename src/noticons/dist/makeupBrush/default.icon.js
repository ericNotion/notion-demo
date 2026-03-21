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
// src/noticons/src/makeupBrush/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M11.25 10L7.5 6.25L9.66562 1.91875C9.89375 1.45937 10.2375 1.25 10.75 1.25C12.2594 1.25 16.2531 4.04688 16.2531 6.75C16.2531 7.2625 16.0406 7.60313 15.5844 7.83437L11.2531 10H11.25ZM0.625 15.55L1.95 16.875L10 11.25L6.25 7.5L0.625 15.55ZM18.5125 13.0719C18.6625 13.4781 18.75 13.9156 18.75 14.375C18.75 16.4469 17.0719 18.125 15 18.125C12.9281 18.125 11.25 16.4469 11.25 14.375C11.25 12.3031 12.9281 10.625 15 10.625C15.4594 10.625 15.8969 10.7125 16.3031 10.8625L17.1656 10L19.375 12.2094L18.5125 13.0719ZM16.875 14.375C16.875 13.3406 16.0344 12.5 15 12.5C13.9656 12.5 13.125 13.3406 13.125 14.375C13.125 15.4094 13.9656 16.25 15 16.25C16.0344 16.25 16.875 15.4094 16.875 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var makeupBrushIcon = createIcon("makeupBrush", iconDefinition);
export {
  makeupBrushIcon,
  iconDefinition
};
