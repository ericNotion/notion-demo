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
// src/noticons/src/loopedSquare/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M14.375 11.25H13.125V8.75H14.375C16.3031 8.75 17.5 7.55312 17.5 5.625C17.5 3.69687 16.3031 2.5 14.375 2.5C12.4469 2.5 11.25 3.69687 11.25 5.625V6.875H8.75V5.625C8.75 3.69687 7.55312 2.5 5.625 2.5C3.69687 2.5 2.5 3.69687 2.5 5.625C2.5 7.55312 3.69687 8.75 5.625 8.75H6.875V11.25H5.625C3.69687 11.25 2.5 12.4469 2.5 14.375C2.5 16.3031 3.69687 17.5 5.625 17.5C7.55312 17.5 8.75 16.3031 8.75 14.375V13.125H11.25V14.375C11.25 16.3031 12.4469 17.5 14.375 17.5C16.3031 17.5 17.5 16.3031 17.5 14.375C17.5 12.4469 16.3031 11.25 14.375 11.25ZM13.125 5.625C13.125 4.85313 13.6031 4.375 14.375 4.375C15.1469 4.375 15.625 4.85313 15.625 5.625C15.625 6.39687 15.1469 6.875 14.375 6.875H13.125V5.625ZM6.875 14.375C6.875 15.1469 6.39687 15.625 5.625 15.625C4.85313 15.625 4.375 15.1469 4.375 14.375C4.375 13.6031 4.85313 13.125 5.625 13.125H6.875V14.375ZM6.875 6.875H5.625C4.85313 6.875 4.375 6.39687 4.375 5.625C4.375 4.85313 4.85313 4.375 5.625 4.375C6.39687 4.375 6.875 4.85313 6.875 5.625V6.875ZM11.25 11.25H8.75V8.75H11.25V11.25ZM14.375 15.625C13.6031 15.625 13.125 15.1469 13.125 14.375V13.125H14.375C15.1469 13.125 15.625 13.6031 15.625 14.375C15.625 15.1469 15.1469 15.625 14.375 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var loopedSquareIcon = createIcon("loopedSquare", iconDefinition);
export {
  loopedSquareIcon,
  iconDefinition
};
