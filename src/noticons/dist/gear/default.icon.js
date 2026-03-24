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
// src/noticons/src/gear/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 10.625V9.37498L16.1437 8.88123C16.0812 8.54373 15.9937 8.2156 15.8812 7.89998L17.35 6.48123L16.725 5.39998L14.7625 5.96248C14.5437 5.7031 14.3031 5.46248 14.0437 5.24373L14.6062 3.28123L13.525 2.65623L12.1062 4.12498C11.7906 4.01248 11.4625 3.92185 11.125 3.86248L10.6312 1.88123H9.38125L8.8875 3.86248C8.55 3.92498 8.22187 4.01248 7.90625 4.12498L6.4875 2.65623L5.40625 3.28123L5.96875 5.24373C5.70937 5.46248 5.46875 5.7031 5.25 5.96248L3.2875 5.39998L2.6625 6.48123L4.13125 7.89998C4.01875 8.2156 3.92812 8.54373 3.86875 8.88123L1.8875 9.37498V10.625L3.86875 11.1187C3.93125 11.4562 4.01875 11.7844 4.13125 12.1L2.6625 13.5187L3.2875 14.6L5.25 14.0375C5.46875 14.2969 5.70937 14.5375 5.96875 14.7562L5.40625 16.7187L6.4875 17.3437L7.90625 15.875C8.22187 15.9875 8.55 16.0781 8.8875 16.1375L9.38125 18.1187H10.6312L11.125 16.1375C11.4625 16.075 11.7906 15.9875 12.1062 15.875L13.525 17.3437L14.6062 16.7187L14.0437 14.7562C14.3031 14.5375 14.5437 14.2969 14.7625 14.0375L16.725 14.6L17.35 13.5187L15.8812 12.1C15.9937 11.7844 16.0844 11.4562 16.1437 11.1187L18.125 10.625ZM5.625 9.99998C5.625 8.71873 6.17812 7.57185 7.05312 6.77185L8.91562 9.99998L7.05312 13.2281C6.17812 12.4281 5.625 11.2812 5.625 9.99998ZM10.5406 9.06248L8.675 5.83123C9.09375 5.69998 9.5375 5.62498 10 5.62498C12.0937 5.62498 13.8437 7.09685 14.2719 9.06248H10.5406ZM10.5406 10.9375H14.2719C13.8437 12.9031 12.0937 14.375 10 14.375C9.5375 14.375 9.09375 14.3031 8.675 14.1687L10.5406 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gearIcon = createIcon("gear", iconDefinition);
export {
  iconDefinition,
  gearIcon
};
