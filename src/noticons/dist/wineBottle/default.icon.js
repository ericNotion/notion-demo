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
// src/noticons/src/wineBottle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.875 5.825V1.25H4.375V5.825C3.19375 6.24062 2.5 7.28125 2.5 8.75V16.25C2.5 17.0219 2.97812 17.5 3.75 17.5H7.5C8.27187 17.5 8.75 17.0219 8.75 16.25V8.75C8.75 7.28438 8.05625 6.24062 6.875 5.825ZM6.875 13.75H4.375V10.625C4.375 9.85312 4.85313 9.375 5.625 9.375C6.39687 9.375 6.875 9.85312 6.875 10.625V13.75ZM18.75 8.75C18.75 8.42812 18.7094 8.10938 18.6313 7.79688L17.3063 2.5H11.4406L10.1156 7.79688C10.0375 8.10938 9.99687 8.42812 9.99687 8.75C9.99687 11.1469 11.1031 12.7344 13.4344 13.0594V15.625H10.9344V17.5H17.8094V15.625H15.3094V13.0594C17.6406 12.7344 18.7469 11.1469 18.7469 8.75H18.75ZM15.8438 4.375L16.7812 8.125H11.9688L12.9062 4.375H15.8469H15.8438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wineBottleIcon = createIcon("wineBottle", iconDefinition);
export {
  wineBottleIcon,
  iconDefinition
};
