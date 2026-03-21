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
// src/noticons/src/hare/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M18.75 9.39377C18.75 10.1625 18.2469 10.625 17.4812 10.625H15L13.75 12.5L14.2688 13.0188C14.7937 13.5438 15 14.0469 15 14.7875V17.5031H13.125V15.8C13.125 15.2 12.8406 14.8032 12.2687 14.6157L7.1375 12.9063C6.58437 13.4281 5.84375 13.75 5.025 13.7563C5.18125 13.9 5.35 14.025 5.54062 14.1188L6.61562 14.6563C7.29375 14.9969 7.50625 15.6281 7.16563 16.3063L6.87813 16.8844L5.46562 16.1782C4.74375 15.8188 4.0875 15.3438 3.51562 14.7719L2.72187 13.9781C2.58438 13.8406 2.50312 13.6563 2.5 13.4625C2.49688 13.2282 2.55938 13.0719 2.72187 12.9094L3.75 11.8813L3.125 10.6313C1.96875 10.6313 1.25 9.91252 1.25 8.75627C1.25 7.60002 1.96875 6.88127 3.125 6.88127C3.36875 6.88127 3.58437 6.91877 3.7875 6.98127C4.44375 6.09065 5.62813 5.00627 7.5 5.00627C10.5938 5.00627 11.8094 7.96252 11.8719 8.12502C12.3219 8.08752 12.6313 7.86877 12.8469 7.44065L13.3031 6.52815L11.25 2.42502L12.3344 1.8844C14.1438 2.48752 15.4688 3.92815 15.8594 5.70627C17.6688 6.02502 18.7594 7.37815 18.75 9.40002V9.39377Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hareIcon = createIcon("hare", iconDefinition);
export {
  iconDefinition,
  hareIcon
};
