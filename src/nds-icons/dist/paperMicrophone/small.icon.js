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

// src/nds-icons/src/paperMicrophone/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "2.27 0.93 12.24 14.12",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.527 10.988a.55.55 0 0 1 .904.625 3.9 3.9 0 0 1-2.651 1.641v.705h1.718a.55.55 0 0 1 0 1.1H8.962a.55.55 0 0 1 0-1.1h1.718v-.705a3.9 3.9 0 0 1-2.652-1.641.55.55 0 0 1 .904-.625 2.79 2.79 0 0 0 2.297 1.206c.952 0 1.794-.476 2.298-1.206"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.03.94c.966.001 1.75.784 1.75 1.75v2.435a2.8 2.8 0 0 0-1.1 0V2.69a.65.65 0 0 0-.65-.65h-6a.65.65 0 0 0-.65.65v8.8c0 .359.291.65.65.65h3.209l.007.012c.273.395.604.75.981 1.048l-.061.04H4.03a1.75 1.75 0 0 1-1.75-1.75v-8.8c0-.966.784-1.75 1.75-1.75z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.23 6.021c1 0 1.81.81 1.81 1.81v2.016a1.811 1.811 0 0 1-3.62 0V7.831c0-1 .81-1.81 1.81-1.81m0 1.1a.71.71 0 0 0-.71.71v2.016a.71.71 0 0 0 1.42 0V7.831a.71.71 0 0 0-.71-.71M7.202 5.41a.55.55 0 0 1 0 1.1H5.03a.55.55 0 1 1 0-1.1zm1.828-2a.55.55 0 1 1 0 1.1h-4a.55.55 0 1 1 0-1.1z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var paperMicrophoneSmallIcon = createIcon("paperMicrophoneSmall", iconDefinition);
export {
  paperMicrophoneSmallIcon,
  iconDefinition
};
