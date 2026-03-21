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

// src/nds-icons/src/linkCapture/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.6 2.375A2.225 2.225 0 0 0 2.375 4.6v1.2a.625.625 0 1 0 1.25 0V4.6c0-.538.437-.975.975-.975h1.2a.625.625 0 1 0 0-1.25zm5.6 0a.625.625 0 1 0 0 1.25h1.2c.539 0 .975.437.975.975v1.2a.625.625 0 1 0 1.25 0V4.6A2.225 2.225 0 0 0 11.4 2.375zm3.742 5.314a2.224 2.224 0 0 0-3.145 0l-.848.847a.625.625 0 1 0 .884.884l.848-.848a.974.974 0 0 1 1.377 1.378l-.848.847a.625.625 0 0 0 .884.884l.848-.848a2.224 2.224 0 0 0 0-3.144"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.246 9.384a.625.625 0 0 0-.883 0l-1.979 1.979a.625.625 0 1 0 .884.883l1.978-1.978a.625.625 0 0 0 0-.884M3 9.575a.625.625 0 0 0-.625.625v1.2c0 1.229.996 2.225 2.225 2.225h1.2a.625.625 0 1 0 0-1.25H4.6a.975.975 0 0 1-.975-.975v-1.2A.625.625 0 0 0 3 9.575"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.42 9.95a.625.625 0 0 0-.884 0l-.847.847a2.224 2.224 0 0 0 3.145 3.145l.847-.848a.625.625 0 1 0-.884-.883l-.847.847a.974.974 0 1 1-1.378-1.377l.848-.848a.625.625 0 0 0 0-.883"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var linkCaptureSmallIcon = createIcon("linkCaptureSmall", iconDefinition);
export {
  linkCaptureSmallIcon,
  iconDefinition
};
