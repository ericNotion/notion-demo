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

// src/nds-icons/src/aiBlock/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.25 3A2.25 2.25 0 0 0 3 5.25v9.5A2.25 2.25 0 0 0 5.25 17H7.5v-1.5H5.25a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 .75.75V7.5H17V5.25A2.25 2.25 0 0 0 14.75 3zm9.667 10.487a.827.827 0 1 0 .264-1.632.827.827 0 0 0-.264 1.632"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.507 12.097a.827.827 0 1 1-1.632-.264.827.827 0 0 1 1.632.264m1.653-1.847a3.01 3.01 0 0 1 5.18.028.7.7 0 1 1-1.209.706 1.61 1.61 0 0 0-2.77-.014l-3.59 5.993 2.56.415a.7.7 0 0 1-.223 1.382l-3.58-.58a.7.7 0 0 1-.488-1.05zm-.757-1.827a3.01 3.01 0 0 0-3.553.338.7.7 0 0 0 .933 1.043 1.61 1.61 0 0 1 2.29.147.7.7 0 0 0 1.059-.917 3 3 0 0 0-.73-.61"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var aiBlockFillIcon = createIcon("aiBlockFill", iconDefinition);
export {
  iconDefinition,
  aiBlockFillIcon
};
