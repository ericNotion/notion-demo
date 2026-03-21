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
// src/noticons/src/snake/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.125 15C18.125 16.1562 17.4063 16.875 16.25 16.875H5.66876C4.55626 16.875 3.80314 16.5625 3.01564 15.7781L1.24689 14.0094L2.13126 13.125L3.38126 14.375H4.99689V13.9188C4.99689 12.9094 5.59376 12.2688 6.55939 12.2V11.4188C6.55939 10.35 7.22189 9.6875 8.29064 9.6875C8.39689 9.6875 8.46876 9.69375 8.57501 9.7125L11.1875 10.1469L9.53126 8.49062C8.74689 7.70625 8.43439 6.95 8.43439 5.84063C8.43439 3.78125 9.30314 2.5 11.15 2.5C11.9094 2.5 12.425 2.6375 13.0844 3.0125L14.3719 3.75V5H10.9344V5.84063C10.9344 6.2125 11.0375 6.4625 11.3 6.725L13.8969 9.32188C14.3563 9.78125 14.6531 10.2344 14.8188 10.7531L15.3031 10.8344C16.3125 11.0031 16.8688 11.6594 16.8688 12.6844V13.2156C17.65 13.4344 18.1188 14.0719 18.1188 15H18.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var snakeIcon = createIcon("snake", iconDefinition);
export {
  snakeIcon,
  iconDefinition
};
