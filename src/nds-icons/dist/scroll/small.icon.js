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

// src/nds-icons/src/scroll/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.43 5.25h3.15a.58.58 0 0 0 0-1.16H6.43a.58.58 0 0 0 0 1.16m0 1.67h3.15a.58.58 0 0 0 0-1.16H6.43a.58.58 0 0 0 0 1.16"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.95 10h1.47c.35 0 .63.28.63.62v1.4c0 .92-.76 1.67-1.68 1.67H5.72c-.93 0-1.68-.75-1.68-1.67V6H2.57c-.34 0-.62-.29-.62-.63V4c0-.92.75-1.67 1.67-1.67h6.66c.92 0 1.67.75 1.67 1.67zm.85 2.03v-.78H7.75v.78c0 .14-.01.28-.05.42h4.68c.23 0 .42-.19.42-.42m-2.52-8.45H5.25c.03.13.05.28.05.42v8.02c0 .23.19.42.42.42h.36c.24 0 .42-.19.42-.42v-1.4c0-.34.28-.62.62-.62h3.58V4c0-.23-.19-.42-.42-.42m-6.66 0c-.23 0-.42.19-.42.42h-.01v.75h.85V4c0-.23-.19-.42-.42-.42"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var scrollSmallIcon = createIcon("scrollSmall", iconDefinition);
export {
  scrollSmallIcon,
  iconDefinition
};
