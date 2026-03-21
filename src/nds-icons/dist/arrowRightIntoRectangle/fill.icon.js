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

// src/nds-icons/src/arrowRightIntoRectangle/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v3.625h3.62a1.875 1.875 0 0 1 3.086-1.976l2.5 2.5a1.875 1.875 0 0 1 0 2.652l-2.5 2.5a1.875 1.875 0 0 1-3.103-1.926H4.125V15.5c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-11a2.125 2.125 0 0 0-2.125-2.125z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.521 9.375H3.505a.625.625 0 1 0 0 1.25h6.966l-1.408 1.408a.625.625 0 0 0 .884.884l2.5-2.5a.625.625 0 0 0 0-.883l-2.5-2.5a.625.625 0 0 0-.884.883z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var arrowRightIntoRectangleFillIcon = createIcon("arrowRightIntoRectangleFill", iconDefinition);
export {
  iconDefinition,
  arrowRightIntoRectangleFillIcon
};
