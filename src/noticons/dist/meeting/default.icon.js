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
// src/noticons/src/meeting/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.4375 5.9375C8.4375 4.97188 9.03438 4.375 10 4.375C10.9656 4.375 11.5625 4.97188 11.5625 5.9375C11.5625 6.90313 10.9656 7.5 10 7.5C9.03438 7.5 8.4375 6.90313 8.4375 5.9375ZM17.8125 7.5C18.7781 7.5 19.375 6.90313 19.375 5.9375C19.375 4.97188 18.7781 4.375 17.8125 4.375C16.8469 4.375 16.25 4.97188 16.25 5.9375C16.25 6.90313 16.8469 7.5 17.8125 7.5ZM12.1875 9.6875C12.1875 8.91563 11.7094 8.4375 10.9375 8.4375H9.0625C8.29062 8.4375 7.8125 8.91563 7.8125 9.6875V11.875H12.1875V9.6875ZM5 15H15V13.125H5V15ZM18.75 8.4375H16.875C16.2156 8.4375 15.7719 8.65937 15.375 9.1875L14.2969 10.625H13.4375V11.875H14.9219L16.25 10.1031V15H20V9.6875C20 8.91563 19.5219 8.4375 18.75 8.4375ZM2.1875 7.5C3.15313 7.5 3.75 6.90313 3.75 5.9375C3.75 4.97188 3.15313 4.375 2.1875 4.375C1.22188 4.375 0.625 4.97188 0.625 5.9375C0.625 6.90313 1.22188 7.5 2.1875 7.5ZM6.5625 11.875V10.625H5.70312L4.625 9.1875C4.22813 8.65937 3.78437 8.4375 3.125 8.4375H1.25C0.478125 8.4375 0 8.91563 0 9.6875V15H3.75V10.1031L5.07812 11.875H6.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var meetingIcon = createIcon("meeting", iconDefinition);
export {
  meetingIcon,
  iconDefinition
};
