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

// src/nds-icons/src/paintPalette/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 3.875a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m2.917 1.208A.875.875 0 1 0 9.68 6.321a.875.875 0 0 0 1.237-1.238m-4.597 0a.875.875 0 1 0-1.237 1.238.875.875 0 0 0 1.238-1.238m4.929 2.042a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 1.775a6.23 6.23 0 0 0-5.724 3.776l-.015.033-.013.045-.01.034-.148.45c-.746 2.26 1.08 4.541 3.45 4.308l1.619-.16a.825.825 0 0 1 .89.976L7.84 12.34c-.188.993.65 1.817 1.58 1.717l.037-.003.046-.012A6.225 6.225 0 0 0 8 1.775m-4.575 4.28.015-.046a4.976 4.976 0 1 1 5.817 6.806.205.205 0 0 1-.189-.242l.21-1.103a2.075 2.075 0 0 0-2.242-2.452l-1.619.159a2.043 2.043 0 0 1-2.14-2.673z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var paintPaletteSmallIcon = createIcon("paintPaletteSmall", iconDefinition);
export {
  paintPaletteSmallIcon,
  iconDefinition
};
