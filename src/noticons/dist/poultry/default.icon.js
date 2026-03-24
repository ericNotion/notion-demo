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
// src/noticons/src/poultry/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.5 7.13442C17.5 8.89067 16.5094 10.4938 14.9375 11.2813L10.6406 13.4313C10.2188 13.6407 9.75625 13.75 9.28437 13.75C8.90625 13.75 8.55 13.6782 8.21563 13.5532L7.60625 14.1625C7.08125 14.6875 6.875 15.1907 6.875 15.9313V16.8782C6.875 17.65 6.39687 18.1282 5.625 18.1282C4.85313 18.1282 4.375 17.65 4.375 16.8782V15.6282H3.125C2.35312 15.6282 1.875 15.15 1.875 14.3782C1.875 13.6063 2.35312 13.1282 3.125 13.1282H4.07187C4.8125 13.1282 5.31563 12.9188 5.84063 12.3969L6.45 11.7875C6.325 11.4532 6.25313 11.0969 6.25313 10.7188C6.25313 10.2469 6.3625 9.78442 6.57188 9.36255L8.72188 5.06567C9.50625 3.4938 11.1125 2.50317 12.8687 2.50317C15.4281 2.50317 17.5031 4.57817 17.5031 7.13755L17.5 7.13442Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var poultryIcon = createIcon("poultry", iconDefinition);
export {
  poultryIcon,
  iconDefinition
};
