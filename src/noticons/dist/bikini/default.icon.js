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
// src/noticons/src/bikini/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M5 13.4375H15V15.625C12.8719 16.1031 11.4156 17.5594 10.9375 19.6875H9.0625C8.58437 17.5594 7.12812 16.1031 5 15.625V13.4375ZM15.3781 5.2875L14.9438 4.41875C14.6187 3.76563 14.3625 3.08125 14.1875 2.37188L13.75 0.625H12.1875V1.25L13.0312 4.625L10 7.65625L6.96875 4.625L7.8125 1.25V0.625H6.25L5.8125 2.37188C5.63438 3.08125 5.38125 3.76563 5.05625 4.41875L4.62187 5.2875C4.25313 6.02187 4.0625 6.83437 4.0625 7.65625C4.0625 9.29688 5.39062 10.625 7.03125 10.625C8.02813 10.625 8.90937 10.1313 9.45 9.375H10.5531C11.0906 10.1313 11.9719 10.625 12.9719 10.625C14.6125 10.625 15.9406 9.29688 15.9406 7.65625C15.9406 6.83437 15.75 6.025 15.3813 5.2875H15.3781Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bikiniIcon = createIcon("bikini", iconDefinition);
export {
  iconDefinition,
  bikiniIcon
};
