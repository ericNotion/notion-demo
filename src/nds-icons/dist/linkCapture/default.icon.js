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

// src/nds-icons/src/linkCapture/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15.625 7.25a.625.625 0 1 0 1.25 0v-1.5a2.625 2.625 0 0 0-2.625-2.625h-1.5a.625.625 0 1 0 0 1.25h1.5c.76 0 1.375.616 1.375 1.375zm-11.25 5.5a.625.625 0 1 0-1.25 0v1.5a2.625 2.625 0 0 0 2.625 2.625h1.5a.625.625 0 1 0 0-1.25h-1.5c-.76 0-1.375-.616-1.375-1.375zM3.75 7.875c.345 0 .625-.28.625-.625v-1.5c0-.76.616-1.375 1.375-1.375h1.5a.625.625 0 1 0 0-1.25h-1.5A2.625 2.625 0 0 0 3.125 5.75v1.5c0 .345.28.625.625.625m10.74 2.73a1.374 1.374 0 0 1 1.943 1.942l-1.06 1.06a.625.625 0 0 0 .884.884l1.06-1.06a2.623 2.623 0 1 0-3.71-3.71l-1.06 1.06a.625.625 0 0 0 .884.884zm-3.885 5.829a1.374 1.374 0 0 0 1.942 0l1.06-1.06a.625.625 0 0 1 .884.883l-1.06 1.06a2.623 2.623 0 0 1-3.71-3.71l1.06-1.06a.625.625 0 0 1 .884.884l-1.06 1.06a1.373 1.373 0 0 0 0 1.942"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15.198 12.725a.625.625 0 0 0-.884-.884l-2.473 2.473a.625.625 0 0 0 .884.884z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var linkCaptureIcon = createIcon("linkCapture", iconDefinition);
export {
  linkCaptureIcon,
  iconDefinition
};
