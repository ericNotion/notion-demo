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

// src/nds-icons/src/calloutBlock/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.647 4.49a1 1 0 0 1 .109.033l.034.018.067.036q.019.013.036.027l.051.042q.018.015.033.034a.6.6 0 0 1 .107.158l.015.03q.045.108.046.234v1.007a.625.625 0 0 1-1.25 0v-.382h-1.27v4.546h.13l.127.013a.625.625 0 0 1 0 1.225l-.126.012H7.244a.625.625 0 0 1 0-1.25h.131V5.727h-1.27v.382a.625.625 0 0 1-1.25 0V5.102a.625.625 0 0 1 .625-.625h5.04z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.8 2.375c1.008 0 1.825.817 1.825 1.825v7.6a1.825 1.825 0 0 1-1.825 1.825H4.2A1.825 1.825 0 0 1 2.375 11.8V4.2c0-1.008.817-1.825 1.825-1.825zm-7.6 1.25a.575.575 0 0 0-.575.575v7.6c0 .317.258.575.575.575h7.6a.575.575 0 0 0 .575-.575V4.2a.575.575 0 0 0-.575-.575z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var calloutBlockSmallIcon = createIcon("calloutBlockSmall", iconDefinition);
export {
  iconDefinition,
  calloutBlockSmallIcon
};
