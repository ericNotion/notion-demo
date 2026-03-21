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
// src/noticons/src/notion/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M12.3965 1.03967C13.6034 0.93616 13.9143 1.00622 14.6729 1.55725L17.8096 3.76233C18.3272 4.14149 18.5 4.2445 18.5 4.65784V16.7516C18.4999 17.5092 18.2238 17.9574 17.2588 18.026L5.8457 18.7155C5.12108 18.75 4.77597 18.6464 4.39648 18.1637L2.08594 15.1666C1.67196 14.6149 1.5 14.2013 1.5 13.7184V2.96936C1.5 2.34964 1.77613 1.83303 2.56836 1.76428L12.3965 1.03967ZM16.7754 5.03674L5.56836 5.69104C5.15521 5.72589 5.01763 5.93301 5.01758 6.38049V16.6481C5.01771 17.1996 5.2936 17.4058 5.91406 17.3717L16.6377 16.7516C17.2585 16.7174 17.3271 16.3375 17.3271 15.8893V5.69104C17.3271 5.24372 17.1554 5.00232 16.7754 5.03674ZM15.6035 6.93127C15.6723 7.24165 15.6038 7.55163 15.293 7.58655L14.7764 7.69006V15.2692C14.3278 15.5102 13.914 15.648 13.5693 15.6481C13.0175 15.6481 12.8792 15.476 12.4658 14.9596L9.08594 9.65393V14.7877L10.1553 15.0289C10.1551 15.0441 10.144 15.6481 9.29199 15.6481L6.91406 15.7867C6.84496 15.6488 6.914 15.304 7.15527 15.235L7.77539 15.0631V8.276L6.91406 8.20667C6.84496 7.89628 7.01691 7.44844 7.5 7.4137L10.0518 7.24182L13.5693 12.6168V7.86194L12.6729 7.7594C12.604 7.38004 12.8789 7.10423 13.2236 7.06995L15.6035 6.93127ZM12.8105 2.00452L3.3623 2.69397C3.01773 2.72814 2.94869 2.90059 3.08594 3.0387L4.43164 4.10706C4.98264 4.55461 5.18977 4.51984 6.22461 4.45081L15.9824 3.86487C16.1891 3.86479 16.0173 3.65907 15.9482 3.62463L14.3271 2.45276C14.0167 2.21178 13.603 1.93552 12.8105 2.00452Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var notionIcon = createIcon("notion", iconDefinition);
export {
  notionIcon,
  iconDefinition
};
