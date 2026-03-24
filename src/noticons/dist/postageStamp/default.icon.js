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
// src/noticons/src/postageStamp/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.3125 5.3125C15.3125 4.525 15.9375 4.64062 15.9375 3.75C15.9375 2.97812 15.4594 2.5 14.6875 2.5C13.7844 2.5 13.9219 3.125 13.125 3.125C12.3281 3.125 12.4531 2.5 11.5625 2.5C10.6719 2.5 10.7969 3.125 10 3.125C9.20312 3.125 9.32812 2.5 8.4375 2.5C7.54688 2.5 7.67188 3.125 6.875 3.125C6.07812 3.125 6.20312 2.5 5.3125 2.5C4.54062 2.5 4.0625 2.97812 4.0625 3.75C4.0625 4.65313 4.6875 4.51562 4.6875 5.3125C4.6875 6.10938 4.0625 5.98438 4.0625 6.875C4.0625 7.76562 4.6875 7.64062 4.6875 8.4375C4.6875 9.23438 4.0625 9.10938 4.0625 10C4.0625 10.8906 4.6875 10.7656 4.6875 11.5625C4.6875 12.3594 4.0625 12.2344 4.0625 13.125C4.0625 14.0156 4.6875 13.8906 4.6875 14.6875C4.6875 15.4844 4.0625 15.3594 4.0625 16.25C4.0625 17.0219 4.54062 17.5 5.3125 17.5C6.21563 17.5 6.07812 16.875 6.875 16.875C7.67188 16.875 7.54688 17.5 8.4375 17.5C9.32812 17.5 9.20312 16.875 10 16.875C10.7969 16.875 10.6719 17.5 11.5625 17.5C12.4531 17.5 12.3281 16.875 13.125 16.875C13.9219 16.875 13.7969 17.5 14.6875 17.5C15.4594 17.5 15.9375 17.0219 15.9375 16.25C15.9375 15.3469 15.3125 15.4844 15.3125 14.6875C15.3125 13.8906 15.9375 14.0156 15.9375 13.125C15.9375 12.2344 15.3125 12.3594 15.3125 11.5625C15.3125 10.7656 15.9375 10.8906 15.9375 10C15.9375 9.10938 15.3125 9.23438 15.3125 8.4375C15.3125 7.64062 15.9375 7.76562 15.9375 6.875C15.9375 5.98438 15.3125 6.10938 15.3125 5.3125ZM13.75 15.3125H6.25V4.6875H13.75V15.3125ZM12.5 14.0625H7.5V5.9375H12.5V14.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var postageStampIcon = createIcon("postageStamp", iconDefinition);
export {
  postageStampIcon,
  iconDefinition
};
