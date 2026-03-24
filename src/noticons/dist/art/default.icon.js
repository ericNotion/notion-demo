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
// src/noticons/src/art/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.5 7.65625C17.9094 7.55312 18.125 7.27813 18.125 6.85625V3.125H14.3938C13.9719 3.125 13.6969 3.34063 13.5938 3.75C13.4906 4.15937 13.2156 4.375 12.7937 4.375C12.3719 4.375 12.0969 4.15937 11.9938 3.75L11.525 1.875H8.47812L8.00937 3.75C7.90625 4.15937 7.63125 4.375 7.20937 4.375C6.7875 4.375 6.5125 4.15937 6.40938 3.75C6.30625 3.34063 6.03125 3.125 5.60938 3.125H1.875V6.85625C1.875 7.27813 2.09063 7.55312 2.5 7.65625C2.90937 7.75938 3.125 8.03437 3.125 8.45625V11.5437C3.125 11.9656 2.90937 12.2406 2.5 12.3438C2.09063 12.4469 1.875 12.7219 1.875 13.1438V16.875H5.60625C6.02813 16.875 6.30312 16.6594 6.40625 16.25C6.50938 15.8406 6.78437 15.625 7.20625 15.625H12.7937C13.2156 15.625 13.4906 15.8406 13.5938 16.25C13.6969 16.6594 13.9719 16.875 14.3938 16.875H18.125V13.1438C18.125 12.7219 17.9094 12.4469 17.5 12.3438C17.0906 12.2406 16.875 11.9656 16.875 11.5437V8.45625C16.875 8.03437 17.0906 7.75938 17.5 7.65625ZM15 13.75H5V6.25H15V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var artIcon = createIcon("art", iconDefinition);
export {
  iconDefinition,
  artIcon
};
