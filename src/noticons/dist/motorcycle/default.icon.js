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
// src/noticons/src/motorcycle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        "clip-path": "url(#clip0_1501_15502)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M16.5625 9.375C16.3563 9.375 16.1563 9.39687 15.9625 9.43125L15.5188 8.24687C15.8563 8.16875 16.2031 8.125 16.5625 8.125V7.1875C16.5625 4.875 15.125 3.4375 12.8125 3.4375H10V4.6875H12.8469L13.1313 5.45C12.2156 5.87813 11.3938 6.46875 10.7031 7.1875H8.24376L7.77501 5.9375H4.05939V7.1875C5.16876 7.1875 6.05939 7.48438 6.74376 8.08125L5.18751 9.85938C4.67501 9.55312 4.07501 9.375 3.43439 9.375C1.53439 9.375 -0.00311279 10.9125 -0.00311279 12.8125C-0.00311279 14.7125 1.53439 16.25 3.43439 16.25C5.11876 16.25 6.51876 15.0375 6.81251 13.4375H11.8719V12.8125C11.8719 11.025 12.8719 9.47188 14.3438 8.68125L14.7906 9.86875C13.7938 10.4719 13.125 11.5625 13.125 12.8125C13.125 14.7125 14.6625 16.25 16.5625 16.25C18.4625 16.25 20 14.7125 20 12.8125C20 10.9125 18.4625 9.375 16.5625 9.375ZM6.13126 10.6813L7.54064 9.06875C7.67814 9.30938 7.80314 9.56875 7.90939 9.85313L8.78439 12.1875H6.81564C6.71251 11.625 6.47189 11.1125 6.13126 10.6813Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_1501_15502",
          children: /* @__PURE__ */ jsxDEV3("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var motorcycleIcon = createIcon("motorcycle", iconDefinition);
export {
  motorcycleIcon,
  iconDefinition
};
