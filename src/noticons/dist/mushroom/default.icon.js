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
// src/noticons/src/mushroom/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.37187 2.5 10C2.5 10.7719 2.97812 11.25 3.75 11.25H8.125L7.06875 14.9531C6.925 15.4531 6.875 15.8062 6.875 16.3281V17.5031H13.125V16.3281C13.125 15.8094 13.075 15.4531 12.9313 14.9531L11.875 11.25H16.25C17.0219 11.25 17.5 10.7719 17.5 10C17.5 5.37187 14.6281 2.5 10 2.5ZM5.9375 9.375C5.41875 9.375 5 8.95625 5 8.4375C5 7.91875 5.41875 7.5 5.9375 7.5C6.45625 7.5 6.875 7.91875 6.875 8.4375C6.875 8.95625 6.45625 9.375 5.9375 9.375ZM7.8125 6.25C7.29375 6.25 6.875 5.83125 6.875 5.3125C6.875 4.79375 7.29375 4.375 7.8125 4.375C8.33125 4.375 8.75 4.79375 8.75 5.3125C8.75 5.83125 8.33125 6.25 7.8125 6.25ZM12.8125 9.375C11.95 9.375 11.25 8.675 11.25 7.8125C11.25 6.95 11.95 6.25 12.8125 6.25C13.675 6.25 14.375 6.95 14.375 7.8125C14.375 8.675 13.675 9.375 12.8125 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mushroomIcon = createIcon("mushroom", iconDefinition);
export {
  mushroomIcon,
  iconDefinition
};
