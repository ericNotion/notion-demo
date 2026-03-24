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
// src/noticons/src/translate/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M6.6625 2.1875H4.6875L1.875 9.6875H3.85L4.31875 8.4375H7.55312L8.02187 9.6875H9.99687L7.1875 2.1875H6.6625ZM5.02187 6.5625L5.9375 4.125L6.85313 6.5625H5.025H5.02187ZM6.4625 13.5344C7.4375 14.5094 8.71875 15 9.99687 15V16.875C8.2375 16.875 6.47813 16.2031 5.13438 14.8625L4.37187 14.1V16.8781H2.49687V10.9406H8.43437V12.8156H5.7375L6.45937 13.5375L6.4625 13.5344ZM13.5344 6.4625C12.5594 5.4875 11.2781 4.99687 10 4.99687V3.12187C11.7594 3.12187 13.5188 3.79375 14.8625 5.13438L15.625 5.89688V3.11875H17.5V9.05625H11.5625V7.18125H14.2594L13.5375 6.45937L13.5344 6.4625ZM18.75 12.8094V10.9344H15.625V9.99687H13.75V10.9344H10.625V12.8094H11.8687C12.1156 13.6594 12.5625 14.4312 13.1906 15.1C11.8969 15.6844 10.625 15.7406 10.625 15.7406L11.2844 17.4969C12.6156 17.2594 13.7531 16.8438 14.6875 16.2875C15.6219 16.8438 16.7594 17.2594 18.0906 17.4969L18.75 15.7406C18.75 15.7406 17.4813 15.6812 16.1844 15.1C16.8125 14.4312 17.2594 13.6594 17.5063 12.8094H18.75ZM14.6875 14.1062C14.3281 13.7531 14.0156 13.3281 13.8 12.8094H15.5781C15.3594 13.3281 15.05 13.7531 14.6906 14.1062H14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var translateIcon = createIcon("translate", iconDefinition);
export {
  translateIcon,
  iconDefinition
};
