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

// src/nds-icons/src/paintPalette/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11 5.938a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.166 1.896A1 1 0 1 0 13.58 6.42a1 1 0 0 0-1.415 1.414M14.063 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7.834 7.835A1 1 0 1 0 6.42 6.42a1 1 0 0 0 1.414 1.415"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.988 7a7.627 7.627 0 1 1 8.853 10.4l-.042.01-.042.005c-1.061.115-2.019-.829-1.804-1.962l.262-1.38a1.188 1.188 0 0 0-1.282-1.402l-2.025.199c-2.848.28-5.044-2.462-4.148-5.18l.185-.563.015-.05.012-.04zm1.164.457-.02.062-.185.562c-.613 1.86.89 3.737 2.84 3.546l2.023-.2a2.437 2.437 0 0 1 2.633 2.881l-.261 1.38c-.05.262.16.493.408.487a6.375 6.375 0 1 0-7.438-8.718"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var paintPaletteIcon = createIcon("paintPalette", iconDefinition);
export {
  paintPaletteIcon,
  iconDefinition
};
