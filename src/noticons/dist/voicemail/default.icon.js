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
// src/noticons/src/voicemail/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M7.8125 10C7.8125 11.0344 6.97188 11.875 5.9375 11.875C4.90313 11.875 4.0625 11.0344 4.0625 10C4.0625 8.96562 4.90313 8.125 5.9375 8.125C6.97188 8.125 7.8125 8.96562 7.8125 10ZM18.75 4.375V15.625H1.25V4.375H18.75ZM17.1875 10C17.1875 8.27812 15.7844 6.875 14.0625 6.875C12.3406 6.875 10.9375 8.27812 10.9375 10C10.9375 10.7031 11.175 11.3531 11.5688 11.875H8.43125C8.825 11.3531 9.0625 10.7031 9.0625 10C9.0625 8.27812 7.65938 6.875 5.9375 6.875C4.21562 6.875 2.8125 8.27812 2.8125 10C2.8125 11.7219 4.21562 13.125 5.9375 13.125H14.0625C15.7844 13.125 17.1875 11.7219 17.1875 10ZM14.0625 8.125C13.0281 8.125 12.1875 8.96562 12.1875 10C12.1875 11.0344 13.0281 11.875 14.0625 11.875C15.0969 11.875 15.9375 11.0344 15.9375 10C15.9375 8.96562 15.0969 8.125 14.0625 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var voicemailIcon = createIcon("voicemail", iconDefinition);
export {
  voicemailIcon,
  iconDefinition
};
