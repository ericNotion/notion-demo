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

// src/nds-icons/src/drive/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.55 14.05a.55.55 0 1 0 1.1 0V12.7a.55.55 0 1 0-1.1 0zm2.35.55a.55.55 0 0 1-.55-.55V12.7a.55.55 0 1 1 1.1 0v1.35a.55.55 0 0 1-.55.55m1.25-.55a.55.55 0 1 0 1.1 0V12.7a.55.55 0 0 0-1.1 0zm1.8 0a.55.55 0 1 0 1.1 0V12.7a.55.55 0 0 0-1.1 0z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.814 3.3a3.325 3.325 0 0 0-3.26 2.673L2.24 12.54a3.3 3.3 0 0 0-.065.652v.183A3.325 3.325 0 0 0 5.5 16.7h9a3.325 3.325 0 0 0 3.325-3.325v-.183q0-.329-.064-.652l-1.314-6.567a3.325 3.325 0 0 0-3.26-2.673zM4.779 6.218A2.075 2.075 0 0 1 6.814 4.55h6.373c.989 0 1.84.698 2.034 1.668l.864 4.32a3.24 3.24 0 0 0-1.585-.413h-9c-.576 0-1.116.15-1.585.412zm11.71 6.34.046.228q.04.2.04.406v.183A2.075 2.075 0 0 1 14.5 15.45h-9a2.075 2.075 0 0 1-2.075-2.075v-.183q0-.205.04-.406l.046-.229A2.15 2.15 0 0 1 5.5 11.225h9c.898 0 1.668.55 1.99 1.333"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var driveIcon = createIcon("drive", iconDefinition);
export {
  iconDefinition,
  driveIcon
};
