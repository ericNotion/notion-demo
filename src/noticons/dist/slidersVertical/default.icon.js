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
// src/noticons/src/slidersVertical/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M16.5625 6.4125V2.5H14.6875V6.4125C13.5969 6.8 12.8125 7.8375 12.8125 9.0625C12.8125 10.2875 13.5969 11.325 14.6875 11.7125V17.5H16.5625V11.7125C17.6531 11.325 18.4375 10.2875 18.4375 9.0625C18.4375 7.8375 17.6531 6.8 16.5625 6.4125ZM15.625 10C15.1062 10 14.6875 9.58125 14.6875 9.0625C14.6875 8.54375 15.1062 8.125 15.625 8.125C16.1438 8.125 16.5625 8.54375 16.5625 9.0625C16.5625 9.58125 16.1438 10 15.625 10ZM10.9375 10.7875V2.5H9.0625V10.7875C7.97188 11.175 7.1875 12.2125 7.1875 13.4375C7.1875 14.6625 7.97188 15.7 9.0625 16.0875V17.5H10.9375V16.0875C12.0281 15.7 12.8125 14.6625 12.8125 13.4375C12.8125 12.2125 12.0281 11.175 10.9375 10.7875ZM10 14.375C9.48125 14.375 9.0625 13.9563 9.0625 13.4375C9.0625 12.9187 9.48125 12.5 10 12.5C10.5188 12.5 10.9375 12.9187 10.9375 13.4375C10.9375 13.9563 10.5188 14.375 10 14.375ZM5.3125 3.9125V2.5H3.4375V3.9125C2.34688 4.3 1.5625 5.3375 1.5625 6.5625C1.5625 7.7875 2.34688 8.825 3.4375 9.2125V17.5H5.3125V9.2125C6.40312 8.825 7.1875 7.7875 7.1875 6.5625C7.1875 5.3375 6.40312 4.3 5.3125 3.9125ZM4.375 7.5C3.85625 7.5 3.4375 7.08125 3.4375 6.5625C3.4375 6.04375 3.85625 5.625 4.375 5.625C4.89375 5.625 5.3125 6.04375 5.3125 6.5625C5.3125 7.08125 4.89375 7.5 4.375 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var slidersVerticalIcon = createIcon("slidersVertical", iconDefinition);
export {
  slidersVerticalIcon,
  iconDefinition
};
