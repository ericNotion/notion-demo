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
// src/noticons/src/capricorn/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M12.8125 9.375C12.025 9.375 11.2719 9.6 10.625 10.0156V5.625C10.625 3.7 9.7375 2.5 7.8125 2.5C6.75625 2.5 6.01563 2.8625 5.55938 3.50625C5.01875 2.8625 4.18125 2.5 3.125 2.5V4.375C3.89375 4.375 4.375 4.85625 4.375 5.625V11.25H6.25V5.625C6.25 4.85625 6.73125 4.375 7.5 4.375C8.26875 4.375 8.75 4.85625 8.75 5.625V11.7562L6.14687 14.3594C5.73438 14.7719 5.18438 15 4.6 15H3.125V16.875H4.6C5.68438 16.875 6.70625 16.4531 7.47188 15.6844L8.84375 14.3125C9.24375 16.1344 10.8719 17.5 12.8125 17.5C15.0531 17.5 16.875 15.6781 16.875 13.4375C16.875 11.1969 15.0531 9.375 12.8125 9.375ZM12.8125 15.625C11.6062 15.625 10.625 14.6438 10.625 13.4375V12.5312L11.2656 11.8906C11.6781 11.4781 12.2281 11.25 12.8125 11.25C14.0188 11.25 15 12.2312 15 13.4375C15 14.6438 14.0188 15.625 12.8125 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var capricornIcon = createIcon("capricorn", iconDefinition);
export {
  iconDefinition,
  capricornIcon
};
