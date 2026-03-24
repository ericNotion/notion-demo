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
// src/noticons/src/champagneBottle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.875 5.625V3.125H7.5V1.25H3.75V3.125H4.375V5.625L3.34062 6.65937C2.29375 7.70625 1.875 8.7125 1.875 10.1937V16.2469C1.875 17.0188 2.35312 17.4969 3.125 17.4969H8.125C8.89687 17.4969 9.375 17.0188 9.375 16.2469V10.1937C9.375 8.7125 8.95937 7.70625 7.90937 6.65937L6.875 5.625ZM7.5 15.625H3.75V10.1969C3.75 9.69375 3.80938 9.30937 3.95937 8.95937L5.625 10.625L7.29063 8.95937C7.44063 9.30937 7.5 9.69375 7.5 10.1969V15.625ZM18.125 8.75C18.125 8.42812 18.0844 8.10938 18.0063 7.79688L16.6813 2.5H12.0656L10.7406 7.79688C10.6625 8.10938 10.6219 8.42812 10.6219 8.75C10.6219 10.7625 11.525 12.1062 13.4344 12.425V15.625H10.9344V17.5H17.8094V15.625H15.3094V12.425C17.2188 12.1062 18.1219 10.7625 18.1219 8.75H18.125ZM15.2188 4.375L15.5312 5.625H13.2156L13.5281 4.375H15.2188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var champagneBottleIcon = createIcon("champagneBottle", iconDefinition);
export {
  iconDefinition,
  champagneBottleIcon
};
