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
// src/noticons/src/link/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.67188 13.9781L9.99688 15.3032L8.9 16.4C8.16875 17.1313 7.20938 17.4969 6.24688 17.4969C4.175 17.4969 2.49688 15.8188 2.49688 13.7469C2.49688 12.7875 2.8625 11.8281 3.59375 11.0938L6.71875 7.96877C7.45 7.23752 8.40938 6.8719 9.37188 6.8719C10.3344 6.8719 11.2906 7.23752 12.025 7.96877L12.4656 8.4094L11.1406 9.7344L10.7 9.29377C10.3469 8.94065 9.875 8.74377 9.375 8.74377C8.875 8.74377 7.77813 9.56252 7.425 9.91877L4.925 12.4188C4.57188 12.7719 4.375 13.2438 4.375 13.7438C4.375 14.7781 5.21563 15.6188 6.25 15.6188C6.75 15.6188 7.22188 15.425 7.575 15.0688L8.67188 13.9719V13.9781ZM13.75 2.50002C12.7906 2.50002 11.8313 2.86565 11.0969 3.5969L10 4.69377L11.325 6.01877L12.4219 4.9219C12.775 4.56877 13.2469 4.3719 13.7469 4.3719C14.7813 4.3719 15.6219 5.21252 15.6219 6.2469C15.6219 6.7469 15.4281 7.21877 15.0719 7.5719L11.9469 10.6969C11.5938 11.05 11.1219 11.2469 10.6219 11.2469C10.1219 11.2469 9.65 11.0531 9.29688 10.6969L8.85625 10.2563L7.53125 11.5813L7.97188 12.0219C8.70313 12.7531 9.6625 13.1188 10.625 13.1188C11.5875 13.1188 12.5438 12.7531 13.2781 12.0219L16.4031 8.8969C17.1344 8.16565 17.5 7.20627 17.5 6.24377C17.5 4.1719 15.8219 2.49377 13.75 2.49377V2.50002Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var linkIcon = createIcon("link", iconDefinition);
export {
  linkIcon,
  iconDefinition
};
