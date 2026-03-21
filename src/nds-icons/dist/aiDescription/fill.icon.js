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

// src/nds-icons/src/aiDescription/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10430_11058)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M18.541 4.528a3.83 3.83 0 0 0-5.255 1.319l-5.275 8.809a.873.873 0 0 0 .61 1.31l4.582.743a.873.873 0 0 0 .28-1.724l-3.312-.537 4.614-7.704a2.084 2.084 0 0 1 3.587.018.873.873 0 1 0 1.509-.88 3.8 3.8 0 0 0-1.34-1.354"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M15.5 10.084a1.164 1.164 0 1 0 .372-2.298 1.164 1.164 0 0 0-.373 2.298m-7.736-6.14a3.83 3.83 0 0 1 5.45.348.873.873 0 1 1-1.32 1.144 2.086 2.086 0 0 0-2.965-.19.873.873 0 1 1-1.165-1.302M9.92 9.18a1.164 1.164 0 1 0 .372-2.299A1.164 1.164 0 0 0 9.92 9.18M.873 10.79H8.58l-1.046 1.747H.874a.873.873 0 0 1 0-1.747M.873 7.463h6.76A2.53 2.53 0 0 0 7.86 9.21H.873a.873.873 0 1 1 0-1.747m5.731 6.654H.874a.873.873 0 1 0 0 1.747h5.64a2.37 2.37 0 0 1 .09-1.747m-.25-8.235a2.37 2.37 0 0 1-.334-1.747H.873a.873.873 0 1 0 0 1.747z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10430_11058",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var aiDescriptionFillIcon = createIcon("aiDescriptionFill", iconDefinition);
export {
  iconDefinition,
  aiDescriptionFillIcon
};
