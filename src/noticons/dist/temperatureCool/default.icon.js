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
// src/noticons/src/temperatureCool/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        "clip-path": "url(#clip0_1501_15714)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M7.8125 11.65V3.4375C7.8125 1.88438 6.55312 0.625 5 0.625C3.44688 0.625 2.1875 1.88438 2.1875 3.4375V11.65C1.23438 12.4531 0.625 13.6531 0.625 15C0.625 17.4156 2.58438 19.375 5 19.375C7.41563 19.375 9.375 17.4156 9.375 15C9.375 13.6562 8.76562 12.4531 7.8125 11.65ZM2.5 15C2.5 13.95 3.14687 13.0531 4.0625 12.6844V3.4375C4.0625 2.91875 4.48125 2.5 5 2.5C5.51875 2.5 5.9375 2.91875 5.9375 3.4375V12.6844C6.85313 13.0562 7.5 13.9531 7.5 15H2.5ZM19.0031 9.34062L17.2219 9.81875L17.7 11.6L16.4937 11.925L15.9219 9.79062L14.3781 8.9V10.6844L15.9406 12.2469L15.0562 13.1313L13.7531 11.8281L12.45 13.1313L11.5656 12.2469L13.1281 10.6844V8.9L11.5844 9.79062L11.0125 11.925L9.80625 11.6L10.2844 9.81875L8.50312 9.34062L8.82812 8.13438L10.9625 8.70625L12.5063 7.81563L10.9625 6.925L8.82812 7.49687L8.50312 6.29062L10.2844 5.8125L9.80625 4.03125L11.0125 3.70625L11.5844 5.84063L13.1281 6.73125V4.94688L11.5656 3.38438L12.45 2.5L13.7531 3.80312L15.0562 2.5L15.9406 3.38438L14.3781 4.94688V6.73125L15.9219 5.84063L16.4937 3.70625L17.7 4.03125L17.2219 5.8125L19.0031 6.29062L18.6781 7.49687L16.5437 6.925L15 7.81563L16.5437 8.70625L18.6781 8.13438L19.0031 9.34062Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_1501_15714",
          children: /* @__PURE__ */ jsxDEV3("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var temperatureCoolIcon = createIcon("temperatureCool", iconDefinition);
export {
  temperatureCoolIcon,
  iconDefinition
};
