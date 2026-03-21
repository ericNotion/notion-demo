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

// src/nds-icons/src/paperMicrophone/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "2.27 0.94 12.24 14.12",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.527 10.988a.55.55 0 0 1 .904.625 3.9 3.9 0 0 1-2.651 1.641v.705h1.718a.55.55 0 0 1 0 1.1H8.962a.55.55 0 0 1 0-1.1h1.718v-.705a3.9 3.9 0 0 1-2.652-1.641.55.55 0 0 1 .904-.625 2.79 2.79 0 0 0 2.297 1.206c.952 0 1.794-.476 2.298-1.206"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.03.94c.966.001 1.75.784 1.75 1.75v2.435A2.76 2.76 0 0 0 8.47 7.83V9.8a1.5 1.5 0 0 0-1.225 2.353c.274.395.605.75.982 1.048l-.061.04H4.03a1.75 1.75 0 0 1-1.75-1.75v-8.8c0-.966.784-1.75 1.75-1.75zm-5 4.47a.55.55 0 1 0 0 1.1h2.172a.55.55 0 0 0 0-1.1zm0-2a.55.55 0 1 0 0 1.1h4a.55.55 0 1 0 0-1.1z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.23 6.07c.972.001 1.76.789 1.76 1.76v2.017a1.76 1.76 0 0 1-3.52 0V7.831c0-.972.788-1.76 1.76-1.76"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var paperMicrophoneFillSmallIcon = createIcon("paperMicrophoneFillSmall", iconDefinition);
export {
  paperMicrophoneFillSmallIcon,
  iconDefinition
};
