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

// src/nds-icons/src/alarmVibrating/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_8917_9824)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M5.441 3.007a.5.5 0 0 0-.642-.766l-1.192 1a.5.5 0 1 0 .642.766zm5.761-.766a.5.5 0 1 0-.643.766l1.192 1a.5.5 0 1 0 .643-.766zm3.83 1.953a.5.5 0 1 0-.88.476c.538.993.844 2.128.844 3.33 0 1.204-.29 2.3-.813 3.276a.5.5 0 0 0 .882.472A7.9 7.9 0 0 0 15.996 8c0-1.374-.35-2.671-.964-3.806"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M13.656 4.937a.5.5 0 0 0-.88.478 5.42 5.42 0 0 1 .031 5.126.5.5 0 0 0 .882.47 6.42 6.42 0 0 0-.034-6.074M1.848 4.67a.5.5 0 1 0-.88-.476A8 8 0 0 0 .004 8c0 1.372.333 2.628.931 3.748a.5.5 0 1 0 .882-.472A6.9 6.9 0 0 1 1.004 8c0-1.202.306-2.337.844-3.33"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M3.224 5.415a.5.5 0 1 0-.88-.478 6.42 6.42 0 0 0-.033 6.075.5.5 0 0 0 .882-.472 5.42 5.42 0 0 1 .03-5.126"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M3.124 8a4.877 4.877 0 0 1 9.752 0 4.877 4.877 0 0 1-9.752 0M8.5 5.328a.5.5 0 0 0-1 0V7.5H5.752a.5.5 0 1 0 0 1H8a.5.5 0 0 0 .5-.5z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_8917_9824",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var alarmVibratingFillSmallIcon = createIcon("alarmVibratingFillSmall", iconDefinition);
export {
  iconDefinition,
  alarmVibratingFillSmallIcon
};
