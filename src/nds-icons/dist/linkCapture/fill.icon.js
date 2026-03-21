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

// src/nds-icons/src/linkCapture/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15.375 7.25a.875.875 0 0 0 1.75 0v-1.5a2.875 2.875 0 0 0-2.875-2.875h-1.5a.875.875 0 0 0 0 1.75h1.5c.621 0 1.125.504 1.125 1.125zm-10.75 5.5a.875.875 0 0 0-1.75 0v1.5a2.875 2.875 0 0 0 2.875 2.875h1.5a.875.875 0 0 0 0-1.75h-1.5a1.125 1.125 0 0 1-1.125-1.125zM3.75 8.125a.875.875 0 0 0 .875-.875v-1.5c0-.621.504-1.125 1.125-1.125h1.5a.875.875 0 1 0 0-1.75h-1.5A2.875 2.875 0 0 0 2.875 5.75v1.5c0 .483.392.875.875.875m10.83 2.568a1.249 1.249 0 0 1 1.765 1.766l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06a2.749 2.749 0 0 0-3.887-3.886l-1.06 1.06a.75.75 0 0 0 1.061 1.06zm-3.887 5.652a1.25 1.25 0 0 0 1.766 0l1.06-1.06a.75.75 0 0 1 1.06 1.06l-1.06 1.06a2.748 2.748 0 1 1-3.886-3.886l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a1.25 1.25 0 0 0 0 1.766"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15.286 12.813a.75.75 0 0 0-1.06-1.06l-2.474 2.472a.75.75 0 1 0 1.061 1.061z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var linkCaptureFillIcon = createIcon("linkCaptureFill", iconDefinition);
export {
  linkCaptureFillIcon,
  iconDefinition
};
