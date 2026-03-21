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

// src/nds-icons/src/microphonePlus/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 .15a2.3 2.3 0 0 0-2.3 2.3v2.8a2.3 2.3 0 0 0 4.6 0v-2.8A2.3 2.3 0 0 0 8 .15m-1.2 2.3a1.2 1.2 0 0 1 2.4 0v2.8a1.2 1.2 0 1 1-2.4 0z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.634 6.957a.55.55 0 1 0-.905.625A5.19 5.19 0 0 0 7.45 9.796v1.379h-.373q.204.52.253 1.1h3.82a.55.55 0 1 0 0-1.1h-2.6V9.796a5.19 5.19 0 0 0 3.721-2.214.55.55 0 0 0-.905-.625A4.08 4.08 0 0 1 8 8.725a4.08 4.08 0 0 1-3.366-1.768M3.4 15.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-1.666-3.5H2.9v-1.166a.5.5 0 1 1 1 0V12.1h1.167a.5.5 0 1 1 0 1H3.9v1.167a.5.5 0 0 1-1 0V13.1H1.734a.5.5 0 0 1 0-1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var microphonePlusSmallIcon = createIcon("microphonePlusSmall", iconDefinition);
export {
  microphonePlusSmallIcon,
  iconDefinition
};
