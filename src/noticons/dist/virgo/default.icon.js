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
// src/noticons/src/virgo/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 9.0625C18.125 7.275 17.1313 5.625 15.3125 5.625C14.6812 5.625 14.1625 5.75625 13.75 5.99688V5.625C13.75 3.7 12.8625 2.5 10.9375 2.5C9.93125 2.5 9.20937 2.83125 8.75 3.41875C8.29063 2.83125 7.56875 2.5 6.5625 2.5C5.50625 2.5 4.76562 2.8625 4.30938 3.50625C3.76875 2.8625 2.93125 2.5 1.875 2.5V4.375C2.64375 4.375 3.125 4.85625 3.125 5.625V13.75H5V5.625C5 4.85625 5.48125 4.375 6.25 4.375C7.01875 4.375 7.5 4.85625 7.5 5.625V13.75H9.375V5.625C9.375 4.85625 9.85625 4.375 10.625 4.375C11.3938 4.375 11.875 4.85625 11.875 5.625V11.875H10.625V13.75H11.875V15C11.875 16.5437 12.8313 17.5 14.375 17.5H16.4875V15.625H14.375C13.9906 15.625 13.75 15.3844 13.75 15V13.7219C16.7656 13.4438 18.125 11.15 18.125 9.0625ZM13.75 11.825V8.75C13.75 7.98125 14.2312 7.5 15 7.5C15.8219 7.5 16.25 8.20937 16.25 9.0625C16.25 10.1875 15.4844 11.5562 13.75 11.825Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var virgoIcon = createIcon("virgo", iconDefinition);
export {
  virgoIcon,
  iconDefinition
};
