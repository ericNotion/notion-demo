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
// src/noticons/src/trophy/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.625 5H15V2.5H5V5H4.375C2.44687 5 1.25 6.19688 1.25 8.125C1.25 10.0531 2.44687 11.25 4.375 11.25H5.52813C6.17813 12.5906 7.40938 13.45 9.0625 13.6812V14.375C9.0625 15.1469 8.58437 15.625 7.8125 15.625H7.1875V17.5H12.8125V15.625H12.1875C11.4156 15.625 10.9375 15.1469 10.9375 14.375V13.6812C12.5938 13.45 13.8219 12.5906 14.4719 11.25H15.625C17.5531 11.25 18.75 10.0531 18.75 8.125C18.75 6.19688 17.5531 5 15.625 5ZM4.375 9.375C3.4875 9.375 3.125 9.0125 3.125 8.125C3.125 7.2375 3.4875 6.875 4.375 6.875H5V8.75C5 8.96562 5.0125 9.17188 5.03125 9.375H4.375ZM15.625 9.375H14.9688C14.9875 9.17188 15 8.96562 15 8.75V6.875H15.625C16.5125 6.875 16.875 7.2375 16.875 8.125C16.875 9.0125 16.5125 9.375 15.625 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trophyIcon = createIcon("trophy", iconDefinition);
export {
  trophyIcon,
  iconDefinition
};
