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
// src/noticons/src/bicycle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        "clip-path": "url(#clip0_1501_15204)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M16.5625 9.375C16.3562 9.375 16.1562 9.39687 15.9625 9.43125L13.7156 3.4375H9.99999V4.6875H12.8469L13.7844 7.1875H8.24374L7.77499 5.9375H4.05937V7.1875H6.90624L7.09062 7.68125L5.18437 9.85938C4.67187 9.55312 4.07187 9.375 3.43124 9.375C1.53124 9.375 -0.0062561 10.9125 -0.0062561 12.8125C-0.0062561 14.7125 1.53124 16.25 3.43124 16.25C5.11562 16.25 6.51562 15.0375 6.80937 13.4375H9.96562L14.2812 8.525L14.7844 9.86875C13.7875 10.4719 13.1187 11.5625 13.1187 12.8125C13.1187 14.7125 14.6562 16.25 16.5562 16.25C18.4562 16.25 19.9937 14.7125 19.9937 12.8125C19.9937 10.9125 18.4562 9.375 16.5562 9.375H16.5625ZM8.78437 12.1875H6.81562C6.71249 11.625 6.47187 11.1125 6.13124 10.6813L7.59374 9.00938L8.78437 12.1875ZM9.90624 11.6156L8.71562 8.4375H12.7L9.90624 11.6156Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_1501_15204",
          children: /* @__PURE__ */ jsxDEV3("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var bicycleIcon = createIcon("bicycle", iconDefinition);
export {
  iconDefinition,
  bicycleIcon
};
