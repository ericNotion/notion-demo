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
// src/noticons/src/mathematics/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.1562 16.7188C15.1562 17.3219 14.6656 17.8125 14.0625 17.8125C13.4594 17.8125 12.9688 17.3219 12.9688 16.7188C12.9688 16.1156 13.4594 15.625 14.0625 15.625C14.6656 15.625 15.1562 16.1156 15.1562 16.7188ZM6.875 2.5H5V5H2.5V6.875H5V9.375H6.875V6.875H9.375V5H6.875V2.5ZM8.05 10.625L5.9375 12.7375L3.825 10.625L2.5 11.95L4.6125 14.0625L2.5 16.175L3.825 17.5L5.9375 15.3875L8.05 17.5L9.375 16.175L7.2625 14.0625L9.375 11.95L8.05 10.625ZM10.625 5V6.875H17.5V5H10.625ZM15.1562 11.4062C15.1562 10.8031 14.6656 10.3125 14.0625 10.3125C13.4594 10.3125 12.9688 10.8031 12.9688 11.4062C12.9688 12.0094 13.4594 12.5 14.0625 12.5C14.6656 12.5 15.1562 12.0094 15.1562 11.4062ZM10.625 15H17.5V13.125H10.625V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mathematicsIcon = createIcon("mathematics", iconDefinition);
export {
  mathematicsIcon,
  iconDefinition
};
