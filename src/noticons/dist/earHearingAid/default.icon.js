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
// src/noticons/src/earHearingAid/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.3375 12.1875H16.5625C16.5625 12.1875 15.3594 13.4375 13.75 13.4375C12.1406 13.4375 10.9375 12.2531 10.9375 10.625C10.9375 8.99687 12.1094 7.825 13.725 7.8125C13.5687 5.99062 12.7031 5 11.25 5C9.32186 5 8.12499 6.55625 8.12499 9.0625C8.12499 10.1219 8.35311 11.0938 8.75311 11.9344L7.62499 12.5C7.14686 11.4906 6.87811 10.325 6.87811 9.0625C6.87811 5.83437 8.59686 3.75 11.2531 3.75C13.4312 3.75 15.0031 5.36875 15.0031 7.8125C15.0031 8.54688 14.5906 9.0625 13.7531 9.0625C12.8187 9.0625 12.1906 9.69063 12.1906 10.625C12.1906 11.5594 12.8187 12.1875 13.7531 12.1875C15.2594 12.1875 16.8781 10.475 16.8781 7.8125C16.8781 4.49375 14.8062 2.02187 11.2406 1.8875L11.2531 1.875H7.18124C4.74061 1.875 3.12499 3.04063 2.40936 5.375C2.06249 6.50625 1.87811 7.74375 1.87811 9.0625C1.87811 9.37813 1.89374 9.69063 1.91249 10H3.79061C3.76561 9.69063 3.74999 9.37813 3.74999 9.0625C3.74999 7.69063 3.99061 6.425 4.42499 5.31563C4.84061 4.25312 5.60624 3.75 6.74686 3.75H6.79999C5.69061 4.99688 5.00311 6.81563 5.00311 9.0625C5.00311 14.375 8.88436 18.125 13.4406 18.125C15.175 18.125 16.2531 17.0469 16.2531 15.3125L16.9656 14.4812C17.3125 14.075 17.5031 13.5594 17.5031 13.0281C17.5031 12.7406 17.4469 12.4531 17.3406 12.1875H17.3375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var earHearingAidIcon = createIcon("earHearingAid", iconDefinition);
export {
  iconDefinition,
  earHearingAidIcon
};
