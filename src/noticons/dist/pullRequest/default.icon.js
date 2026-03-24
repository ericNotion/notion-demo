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
// src/noticons/src/pullRequest/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M15.625 11.25C15.1031 11.25 14.6125 11.3781 14.1813 11.6062L11.95 9.375H14.375V7.5H8.75V13.125H10.625V10.7L12.8562 12.9313C12.6312 13.3625 12.5 13.8531 12.5 14.375C12.5 16.1 13.9 17.5 15.625 17.5C17.35 17.5 18.75 16.1 18.75 14.375C18.75 12.65 17.35 11.25 15.625 11.25ZM15.625 15.625C14.9344 15.625 14.375 15.0656 14.375 14.375C14.375 13.6844 14.9344 13.125 15.625 13.125C16.3156 13.125 16.875 13.6844 16.875 14.375C16.875 15.0656 16.3156 15.625 15.625 15.625ZM8.125 5.625C8.125 3.9 6.725 2.5 5 2.5C3.275 2.5 1.875 3.9 1.875 5.625C1.875 7.025 2.79375 8.20938 4.0625 8.60625V11.3937C2.79375 11.7906 1.875 12.975 1.875 14.375C1.875 16.1 3.275 17.5 5 17.5C6.725 17.5 8.125 16.1 8.125 14.375C8.125 12.975 7.20625 11.7906 5.9375 11.3937V8.60625C7.20625 8.20938 8.125 7.025 8.125 5.625ZM5 4.375C5.69062 4.375 6.25 4.93438 6.25 5.625C6.25 6.31562 5.69062 6.875 5 6.875C4.30938 6.875 3.75 6.31562 3.75 5.625C3.75 4.93438 4.30938 4.375 5 4.375ZM5 15.625C4.30938 15.625 3.75 15.0656 3.75 14.375C3.75 13.6844 4.30938 13.125 5 13.125C5.69062 13.125 6.25 13.6844 6.25 14.375C6.25 15.0656 5.69062 15.625 5 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pullRequestIcon = createIcon("pullRequest", iconDefinition);
export {
  pullRequestIcon,
  iconDefinition
};
