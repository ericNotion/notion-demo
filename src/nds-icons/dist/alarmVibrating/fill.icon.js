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

// src/nds-icons/src/alarmVibrating/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_8917_9826)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M6.802 3.759a.625.625 0 0 0-.804-.958l-1.49 1.25a.625.625 0 0 0 .804.958zm7.2-.958a.625.625 0 0 0-.804.958l1.49 1.25a.625.625 0 0 0 .804-.958zm4.722 2.477a.55.55 0 1 0-.968.524A8.8 8.8 0 0 1 18.82 10c0 1.518-.367 2.9-1.025 4.13a.55.55 0 0 0 .97.52A9.76 9.76 0 0 0 19.92 10a9.9 9.9 0 0 0-1.196-4.722"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M17.003 6.208a.55.55 0 1 0-.966.524c.528.973.833 2.094.833 3.268a6.76 6.76 0 0 1-.795 3.211.55.55 0 1 0 .97.518A7.86 7.86 0 0 0 17.97 10a7.95 7.95 0 0 0-.967-3.792M2.244 5.802a.55.55 0 1 0-.968-.524A9.9 9.9 0 0 0 .08 10a9.76 9.76 0 0 0 1.155 4.65.55.55 0 0 0 .97-.52A8.66 8.66 0 0 1 1.18 10c0-1.516.386-2.946 1.064-4.198"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M3.963 6.732a.55.55 0 1 0-.966-.524A7.95 7.95 0 0 0 2.03 10c0 1.362.333 2.62.925 3.73a.55.55 0 0 0 .97-.519A6.76 6.76 0 0 1 3.13 10c0-1.174.305-2.295.833-3.268"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M3.905 10A6.096 6.096 0 0 1 10 3.905 6.096 6.096 0 0 1 16.095 10 6.096 6.096 0 0 1 10 16.095 6.096 6.096 0 0 1 3.905 10m6.72-3.34a.625.625 0 1 0-1.25 0v2.715H7.19a.625.625 0 1 0 0 1.25H10c.345 0 .625-.28.625-.625z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_8917_9826",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var alarmVibratingFillIcon = createIcon("alarmVibratingFill", iconDefinition);
export {
  iconDefinition,
  alarmVibratingFillIcon
};
