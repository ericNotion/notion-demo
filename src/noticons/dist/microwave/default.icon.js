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
// src/noticons/src/microwave/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M1.875 3.75V16.25H18.125V3.75H1.875ZM12.5 13.125C12.5 13.8969 12.0219 14.375 11.25 14.375H5C4.22813 14.375 3.75 13.8969 3.75 13.125V6.875C3.75 6.10313 4.22813 5.625 5 5.625H11.25C12.0219 5.625 12.5 6.10313 12.5 6.875V13.125ZM15.3125 7.5C14.7937 7.5 14.375 7.08125 14.375 6.5625C14.375 6.04375 14.7937 5.625 15.3125 5.625C15.8313 5.625 16.25 6.04375 16.25 6.5625C16.25 7.08125 15.8313 7.5 15.3125 7.5ZM10.6938 7.52813L11.8062 8.09688C11.7719 8.1625 10.9781 9.6875 9.56875 9.6875C8.78438 9.6875 8.21562 9.275 7.75938 8.94375C7.32812 8.63125 7.04375 8.4375 6.68437 8.4375C5.95937 8.4375 5.58125 9.29688 5.57812 9.30625L4.425 8.825C4.45312 8.75938 5.12187 7.19063 6.68437 7.19063C7.46875 7.19063 8.0375 7.60312 8.49375 7.93437C8.925 8.24687 9.20938 8.44063 9.56875 8.44063C10.2031 8.44063 10.6906 7.54063 10.6938 7.53125V7.52813ZM10.6938 10.6531L11.8062 11.2219C11.7719 11.2875 10.9781 12.8125 9.56875 12.8125C8.78438 12.8125 8.21562 12.4 7.75938 12.0687C7.32812 11.7562 7.04375 11.5625 6.68437 11.5625C5.95937 11.5625 5.58438 12.4187 5.58125 12.425L4.425 11.9469C4.45312 11.8812 5.12187 10.3094 6.68437 10.3094C7.46875 10.3094 8.0375 10.7219 8.49375 11.0531C8.925 11.3656 9.20938 11.5594 9.56875 11.5594C10.2031 11.5594 10.6906 10.6594 10.6938 10.65V10.6531Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var microwaveIcon = createIcon("microwave", iconDefinition);
export {
  microwaveIcon,
  iconDefinition
};
