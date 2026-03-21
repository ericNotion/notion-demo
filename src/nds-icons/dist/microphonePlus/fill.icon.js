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

// src/nds-icons/src/microphonePlus/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.125 3.55a2.875 2.875 0 1 1 5.75 0v3.6a2.875 2.875 0 0 1-5.75 0z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.605 9.391a.625.625 0 1 0-1.03.71 6.58 6.58 0 0 0 4.8 2.82v1.929h-.92A4.6 4.6 0 0 1 8.6 16.1h5.451a.625.625 0 1 0 0-1.25h-3.425v-1.93a6.58 6.58 0 0 0 4.8-2.818.625.625 0 0 0-1.03-.71 5.33 5.33 0 0 1-4.393 2.308h-.004a5.33 5.33 0 0 1-4.393-2.309M4 19.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-1.969-4.094h1.375v-1.375a.625.625 0 0 1 1.25 0v1.375h1.375a.625.625 0 0 1 0 1.25H4.656v1.375a.625.625 0 1 1-1.25 0v-1.375H2.031a.625.625 0 1 1 0-1.25"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var microphonePlusFillIcon = createIcon("microphonePlusFill", iconDefinition);
export {
  microphonePlusFillIcon,
  iconDefinition
};
