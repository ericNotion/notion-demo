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
// src/noticons/src/cigarette/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15 11.875V13.125H13.75V11.875C13.75 11.45 13.55 11.25 13.125 11.25H9.375C7.87813 11.25 6.875 10.2469 6.875 8.75C6.875 8.27812 6.975 7.85625 7.15625 7.5C5.08437 7.4875 3.75 6.14062 3.75 4.0625C3.75 1.98438 5.1 0.625 7.1875 0.625H8.125V1.875H7.1875C5.79688 1.875 5 2.67188 5 4.0625C5 5.45312 5.79688 6.25 7.1875 6.25H10V7.5H9.375C8.56875 7.5 8.125 7.94375 8.125 8.75C8.125 9.55625 8.56875 10 9.375 10H13.125C14.2469 10 15 10.7531 15 11.875ZM13.75 16.875H15V14.375H13.75V16.875ZM2.5 16.875H12.5V14.375H2.5V16.875ZM16.25 16.875H17.5V14.375H16.25V16.875ZM14.375 7.64062C14.775 7.11875 15 6.43125 15 5.625C15 3.725 13.7719 2.5 11.875 2.5H9.375V3.75H11.875C13.0656 3.75 13.75 4.43438 13.75 5.625C13.75 6.81563 13.0656 7.5 11.875 7.5H11.25V8.75H13.125C15.0813 8.75 16.25 9.91875 16.25 11.875V13.125H17.5V11.875C17.5 9.6625 16.3094 8.1 14.375 7.64062Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cigaretteIcon = createIcon("cigarette", iconDefinition);
export {
  iconDefinition,
  cigaretteIcon
};
