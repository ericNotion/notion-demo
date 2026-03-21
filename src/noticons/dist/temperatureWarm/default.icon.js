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
// src/noticons/src/temperatureWarm/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        "clip-path": "url(#clip0_1501_15715)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M18.1219 4.375L14.8438 6.55937V2.03125C12.2563 2.03125 10.1562 4.13125 10.1562 6.71875C10.1562 7.20937 10.2312 7.68125 10.3719 8.125H8.75C8.75 11.2312 11.2688 13.75 14.375 13.75C17.4813 13.75 20 11.2312 20 8.125C20 6.59062 19.2625 5.23125 18.1219 4.375ZM14.375 12.3438C13.3406 12.3438 12.5 11.5031 12.5 10.4688C12.5 9.43437 13.3406 8.59375 14.375 8.59375V10.4688L15.9344 9.42813C16.1344 9.725 16.25 10.0844 16.25 10.4688C16.25 11.5031 15.4094 12.3438 14.375 12.3438ZM7.8125 11.65V3.4375C7.8125 1.88438 6.55312 0.625 5 0.625C3.44688 0.625 2.1875 1.88438 2.1875 3.4375V11.65C1.23438 12.4531 0.625 13.6531 0.625 15C0.625 17.4156 2.58438 19.375 5 19.375C7.41563 19.375 9.375 17.4156 9.375 15C9.375 13.6562 8.76562 12.4531 7.8125 11.65ZM5.9375 6.875H4.0625V3.4375C4.0625 2.91875 4.48125 2.5 5 2.5C5.51875 2.5 5.9375 2.91875 5.9375 3.4375V6.875Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_1501_15715",
          children: /* @__PURE__ */ jsxDEV3("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var temperatureWarmIcon = createIcon("temperatureWarm", iconDefinition);
export {
  temperatureWarmIcon,
  iconDefinition
};
