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
// src/noticons/src/menorah/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M9.0625 3.125C9.0625 2.60625 9.30937 2.25625 10 1.40625C10.6906 2.25625 10.9375 2.60625 10.9375 3.125C10.9375 3.64375 10.5188 4.0625 10 4.0625C9.48125 4.0625 9.0625 3.64375 9.0625 3.125ZM7.5 5.9375C8.01875 5.9375 8.4375 5.51875 8.4375 5C8.4375 4.48125 8.19063 4.13125 7.5 3.28125C6.80937 4.13125 6.5625 4.48125 6.5625 5C6.5625 5.51875 6.98125 5.9375 7.5 5.9375ZM15 5.9375C15.5188 5.9375 15.9375 5.51875 15.9375 5C15.9375 4.48125 15.6906 4.13125 15 3.28125C14.3094 4.13125 14.0625 4.48125 14.0625 5C14.0625 5.51875 14.4812 5.9375 15 5.9375ZM12.5 5.9375C13.0188 5.9375 13.4375 5.51875 13.4375 5C13.4375 4.48125 13.1906 4.13125 12.5 3.28125C11.8094 4.13125 11.5625 4.48125 11.5625 5C11.5625 5.51875 11.9812 5.9375 12.5 5.9375ZM5 5.9375C5.51875 5.9375 5.9375 5.51875 5.9375 5C5.9375 4.48125 5.69063 4.13125 5 3.28125C4.30938 4.13125 4.0625 4.48125 4.0625 5C4.0625 5.51875 4.48125 5.9375 5 5.9375ZM17.5 3.28125C16.8094 4.13125 16.5625 4.48125 16.5625 5C16.5625 5.51875 16.9812 5.9375 17.5 5.9375C18.0187 5.9375 18.4375 5.51875 18.4375 5C18.4375 4.48125 18.1906 4.13125 17.5 3.28125ZM3.4375 5C3.4375 4.48125 3.19062 4.13125 2.5 3.28125C1.80937 4.13125 1.5625 4.48125 1.5625 5C1.5625 5.51875 1.98125 5.9375 2.5 5.9375C3.01875 5.9375 3.4375 5.51875 3.4375 5ZM10.625 13.725V12.475C13.7281 12.2281 15.625 10.1313 15.625 6.875H14.375C14.375 9.35938 12.9531 10.9719 10.625 11.2156V9.95312C12.1812 9.71875 13.125 8.58437 13.125 6.875H11.875C11.875 7.80312 11.4062 8.44375 10.625 8.65937V5H9.375V8.65937C8.59375 8.44062 8.125 7.80312 8.125 6.875H6.875C6.875 8.58437 7.81875 9.71875 9.375 9.95312V11.2156C7.04688 10.9719 5.625 9.35938 5.625 6.875H4.375C4.375 10.1313 6.27187 12.2281 9.375 12.475V13.725C5.50312 13.475 3.125 10.9031 3.125 6.875H1.875C1.875 11.675 4.73125 14.7312 9.375 14.9812V16.25H5V17.5H15V16.25H10.625V14.9812C15.2688 14.7312 18.125 11.675 18.125 6.875H16.875C16.875 10.9031 14.4969 13.475 10.625 13.725Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var menorahIcon = createIcon("menorah", iconDefinition);
export {
  menorahIcon,
  iconDefinition
};
