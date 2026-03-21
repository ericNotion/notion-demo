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
// src/noticons/src/midtones/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M10 2.5C5.85625 2.5 2.5 5.85625 2.5 10C2.5 14.1438 5.85625 17.5 10 17.5C14.1438 17.5 17.5 14.1438 17.5 10C17.5 5.85625 14.1438 2.5 10 2.5ZM9.40312 4.40937L4.40937 9.40312C4.6875 6.76562 6.76562 4.6875 9.40312 4.40937ZM4.48125 11.0969L11.0938 4.48438C11.5469 4.575 11.9906 4.725 12.4156 4.92813L4.92188 12.4219C4.71875 11.9969 4.56875 11.5531 4.47812 11.1L4.48125 11.0969ZM5.60313 13.5094L13.5063 5.60625C13.8531 5.88438 14.1125 6.14375 14.3906 6.49063L6.4875 14.3938C6.14062 14.1156 5.88125 13.8562 5.60313 13.5094ZM8.9 15.5156C8.44687 15.425 8.00313 15.275 7.57812 15.0719L15.0719 7.57812C15.275 8.00313 15.425 8.44687 15.5156 8.9L8.90312 15.5125L8.9 15.5156ZM10.5938 15.5906L15.5875 10.5969C15.3094 13.2344 13.2313 15.3125 10.5938 15.5906Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var midtonesIcon = createIcon("midtones", iconDefinition);
export {
  midtonesIcon,
  iconDefinition
};
