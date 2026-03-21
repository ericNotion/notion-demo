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

// src/nds-icons/src/circleDottedAndCircle/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9035_11357)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M6.506 3.625h-.012a.875.875 0 1 0 .001 1.75h.01a.875.875 0 1 0 .001-1.75m5.883 3.929a.875.875 0 1 0-1.616.672l.003.008a.875.875 0 0 0 1.617-.669zm.486 2.44a.875.875 0 0 0-1.75.001v.01a.875.875 0 1 0 1.75.001zm-.482 2.441a.875.875 0 1 0-1.617-.669l-.003.008a.875.875 0 1 0 1.616.672z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M8.935 4.107a.875.875 0 0 0-.669 1.617l.008.003c.144.06.296.079.44.061A6.35 6.35 0 0 0 7.125 10c0 1.614.6 3.089 1.59 4.212a.9.9 0 0 0-.44.06l-.009.004a.875.875 0 0 0 .669 1.617l.011-.005a.875.875 0 0 0 .529-.944 6.375 6.375 0 1 0 0-9.887.875.875 0 0 0-.529-.946zM10.05 6.92a.875.875 0 0 0 1.204-.964 4.625 4.625 0 1 1 0 8.087.874.874 0 0 0-1.204-.963A4.6 4.6 0 0 1 8.875 10c0-1.183.444-2.262 1.175-3.08M4.734 5.724a.875.875 0 0 0-.669-1.617l-.011.004a.875.875 0 0 0 .672 1.616zM3.233 6.726a.875.875 0 1 0-1.236-1.238l-.01.009a.875.875 0 0 0 1.24 1.236zm-1.006 1.5a.875.875 0 0 0-1.616-.672l-.004.011a.875.875 0 0 0 1.617.669zm-.352 1.769a.875.875 0 0 0-1.75-.001v.012a.875.875 0 1 0 1.75-.001zm.349 1.771a.875.875 0 1 0-1.617.669l.004.011a.875.875 0 1 0 1.616-.672zm1.002 1.501a.875.875 0 1 0-1.238 1.236l.009.01a.875.875 0 0 0 1.236-1.24zm1.5 1.006a.875.875 0 1 0-.672 1.616l.011.004a.875.875 0 1 0 .669-1.617zm1.769.352a.875.875 0 1 0-.001 1.75h.012a.875.875 0 0 0-.001-1.75z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9035_11357",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var circleDottedAndCircleFillIcon = createIcon("circleDottedAndCircleFill", iconDefinition);
export {
  iconDefinition,
  circleDottedAndCircleFillIcon
};
