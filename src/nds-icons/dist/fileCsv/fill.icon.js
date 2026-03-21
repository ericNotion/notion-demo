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

// src/nds-icons/src/fileCsv/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9682_23939)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M16 7.75a1 1 0 0 1-.012.136q.012.117.012.235v1.374h-1.5V8.5H12a2.25 2.25 0 0 1-2.25-2.25v-2.5h-3.5a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h7.5q.045 0 .087-.005h2.037a2.25 2.25 0 0 1-2.124 1.505h-7.5A2.25 2.25 0 0 1 4 15.5v-11a2.25 2.25 0 0 1 2.25-2.25h3.879q.118 0 .235.012a.75.75 0 0 1 .6.149c.28.112.538.28.756.498l3.62 3.621c.218.218.386.475.498.756a.75.75 0 0 1 .161.464M13.69 7l-2.44-2.44v1.69c0 .414.336.75.75.75z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M14.411 12.803c-.33-.282-.783-.445-1.3-.545l-.01-.002c-.431-.082-.642-.191-.737-.272-.064-.054-.089-.102-.089-.205 0-.025.004-.073.103-.14.111-.074.315-.144.605-.144.559 0 .77.234.819.305a.625.625 0 0 0 1.03-.708c-.285-.414-.883-.847-1.849-.847-.472 0-.934.112-1.3.355-.376.252-.658.659-.658 1.18 0 .442.166.848.53 1.158.331.28.784.444 1.3.544l.011.002c.43.082.642.191.737.272.064.054.089.102.089.205 0 .025-.004.073-.104.14-.11.074-.315.144-.605.144-.558 0-.77-.234-.818-.305a.625.625 0 1 0-1.03.708c.284.414.883.847 1.848.847.472 0 .935-.111 1.3-.355.377-.252.659-.659.659-1.179 0-.443-.166-.85-.53-1.158m-4.205-2.223c-.669-.377-1.62-.457-2.42-.13-.86.351-1.512 1.159-1.512 2.42 0 1.262.652 2.069 1.512 2.42.8.327 1.751.247 2.42-.13a.625.625 0 0 0-.614-1.089c-.336.19-.885.245-1.333.062-.389-.159-.735-.508-.735-1.263s.346-1.104.735-1.263c.448-.183.997-.127 1.333.062a.625.625 0 0 0 .614-1.088m6.28.242a.625.625 0 1 0-1.175.427l1.334 3.667a.625.625 0 0 0 1.174 0l1.334-3.667a.625.625 0 0 0-1.175-.427l-.746 2.052z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9682_23939",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var fileCsvFillIcon = createIcon("fileCsvFill", iconDefinition);
export {
  iconDefinition,
  fileCsvFillIcon
};
