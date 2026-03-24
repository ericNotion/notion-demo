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
// src/noticons/src/scorpio/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M19.45 15.3125L15.3875 19.375L14.0625 18.05L15.8625 16.25H13.75C12.2063 16.25 11.25 15.2937 11.25 13.75V5.625C11.25 4.85625 10.7688 4.375 10 4.375C9.23125 4.375 8.75 4.85625 8.75 5.625V13.75H6.875V5.625C6.875 4.85625 6.39375 4.375 5.625 4.375C4.85625 4.375 4.375 4.85625 4.375 5.625V13.75H2.5V5.625C2.5 4.85625 2.01875 4.375 1.25 4.375V2.5C2.30625 2.5 3.14062 2.8625 3.68438 3.50625C4.14062 2.8625 4.88125 2.5 5.9375 2.5C6.99375 2.5 7.66563 2.83125 8.125 3.41875C8.58437 2.83125 9.30625 2.5 10.3125 2.5C12.2375 2.5 13.125 3.7 13.125 5.625V13.75C13.125 14.1344 13.3656 14.375 13.75 14.375H15.8625L14.0625 12.575L15.3875 11.25L19.45 15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var scorpioIcon = createIcon("scorpio", iconDefinition);
export {
  scorpioIcon,
  iconDefinition
};
