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
// src/noticons/src/basketball/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5.59687 10.625C5.46562 12.0844 4.875 13.4094 3.975 14.4625C3.16562 13.3719 2.64688 12.0563 2.53125 10.625H5.6H5.59687ZM17.475 9.37501C17.3562 7.94376 16.8375 6.62814 16.0312 5.53751C15.1312 6.59064 14.5406 7.91876 14.4094 9.37501H17.4781H17.475ZM15.1969 4.59064C13.9906 3.43126 12.3969 2.67189 10.6281 2.52814V9.37501H13.1531C13.2937 7.54689 14.0406 5.88439 15.1937 4.59064H15.1969ZM3.975 5.53439C3.16562 6.62501 2.64688 7.94064 2.53125 9.37189H5.6C5.46875 7.91251 4.87812 6.58751 3.97812 5.53439H3.975ZM10.6281 10.6219V17.4688C12.3969 17.3219 13.9906 16.5656 15.1969 15.4063C14.0406 14.1156 13.2937 12.4531 13.1562 10.6219H10.6313H10.6281ZM16.0312 14.4594C16.8406 13.3688 17.3594 12.0531 17.475 10.6219H14.4062C14.5375 12.0813 15.1281 13.4063 16.0281 14.4594H16.0312ZM4.80938 15.4031C6.01562 16.5625 7.60938 17.3219 9.37813 17.4656V10.6188H6.85313C6.7125 12.4469 5.96562 14.1094 4.8125 15.4031H4.80938ZM6.85 9.36876H9.375V2.52814C7.60625 2.67501 6.0125 3.43126 4.80625 4.59064C5.9625 5.88126 6.70937 7.54376 6.84687 9.37501L6.85 9.36876Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var basketballIcon = createIcon("basketball", iconDefinition);
export {
  iconDefinition,
  basketballIcon
};
