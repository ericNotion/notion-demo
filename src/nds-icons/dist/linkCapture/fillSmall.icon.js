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

// src/nds-icons/src/linkCapture/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.25 5.8a.75.75 0 0 0 1.5 0V4.6a2.35 2.35 0 0 0-2.35-2.35h-1.2a.75.75 0 0 0 0 1.5h1.2c.47 0 .85.38.85.85zm-8.5 4.4a.75.75 0 0 0-1.5 0v1.2a2.35 2.35 0 0 0 2.35 2.35h1.2a.75.75 0 0 0 0-1.5H4.6a.85.85 0 0 1-.85-.85zM3 6.55a.75.75 0 0 0 .75-.75V4.6c0-.47.38-.85.85-.85h1.2a.75.75 0 0 0 0-1.5H4.6A2.35 2.35 0 0 0 2.25 4.6v1.2c0 .414.336.75.75.75m8.681 2.022a.974.974 0 1 1 1.377 1.378l-.848.847a.625.625 0 1 0 .884.884l.848-.848a2.224 2.224 0 0 0-3.145-3.144l-.848.847a.625.625 0 1 0 .884.884zm-3.109 4.486c.38.38.997.38 1.378 0l.847-.848a.625.625 0 0 1 .884.884l-.848.848a2.224 2.224 0 0 1-3.144-3.145l.847-.847a.625.625 0 0 1 .884.883l-.848.848a.974.974 0 0 0 0 1.377"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.246 10.268a.625.625 0 1 0-.883-.884l-1.979 1.979a.625.625 0 0 0 .884.883z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var linkCaptureFillSmallIcon = createIcon("linkCaptureFillSmall", iconDefinition);
export {
  linkCaptureFillSmallIcon,
  iconDefinition
};
