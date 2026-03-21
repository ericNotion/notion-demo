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
// src/noticons/src/bloodPressure/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M9.04688 14.375C9.75 14.375 10.3062 14.1437 10.8031 13.6469L13.0969 11.3531C13.6562 11.6813 14.3031 11.875 15 11.875C17.0719 11.875 18.75 10.1969 18.75 8.125C18.75 6.05312 17.0719 4.375 15 4.375C12.9281 4.375 11.25 6.05312 11.25 8.125C11.25 8.81875 11.4437 9.46875 11.7719 10.0281L9.47813 12.3219C9.32812 12.4719 9.25625 12.5 9.04688 12.5C8.60938 12.5 8.4375 12.3281 8.4375 11.8906V10H10V2.5H1.875V10H3.4375V11.875C3.4375 15.2906 5.64687 17.5 9.0625 17.5H11.4375C11.7875 18.2875 12.6062 18.75 13.75 18.75C15.2937 18.75 16.25 17.9125 16.25 16.5625C16.25 15.2125 15.2937 14.375 13.75 14.375C12.6062 14.375 11.7844 14.8375 11.4375 15.625H9.0625C6.67812 15.625 5.3125 14.2594 5.3125 11.875V10H6.5625V11.8906C6.5625 13.3531 7.58438 14.375 9.04688 14.375ZM13.6969 5.9375L15.3125 7.55312L14.4281 8.4375L12.8125 6.82188L13.6969 5.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bloodPressureIcon = createIcon("bloodPressure", iconDefinition);
export {
  iconDefinition,
  bloodPressureIcon
};
