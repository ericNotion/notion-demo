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

// src/nds-icons/src/circleDottedAndCircle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9035_11359)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M6.506 3.875h-.012a.625.625 0 1 0 .001 1.25h.01a.625.625 0 1 0 .001-1.25"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            fillRule: "evenodd",
            d: "M8.84 4.338a.625.625 0 0 0-.478 1.155l.008.003a.625.625 0 1 0 .48-1.154z",
            clipRule: "evenodd"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M4.638 5.493a.625.625 0 1 0-.477-1.155l-.011.004a.625.625 0 0 0 .48 1.154zM3.056 6.55a.625.625 0 1 0-.883-.885l-.008.008a.625.625 0 1 0 .884.883zm-1.06 1.58a.625.625 0 1 0-1.154-.48l-.004.01a.625.625 0 1 0 1.155.478zm-.371 1.865a.625.625 0 0 0-1.25-.001v.012a.625.625 0 0 0 1.25-.001zm.368 1.867a.625.625 0 0 0-1.155.477l.004.011a.625.625 0 0 0 1.154-.48zm1.057 1.582a.625.625 0 0 0-.885.883l.008.008a.625.625 0 0 0 .883-.885zm1.58 1.06a.625.625 0 0 0-.48 1.154l.01.004a.625.625 0 0 0 .478-1.155zm4.22 1.154a.625.625 0 0 0-.48-1.154l-.008.003a.625.625 0 0 0 .477 1.155zm-2.355-.783a.625.625 0 0 0-.001 1.25h.012a.625.625 0 1 0-.001-1.25zm5.663-7.225a.625.625 0 0 0-1.154.48l.003.008a.625.625 0 0 0 1.155-.477zm.467 2.344a.625.625 0 1 0-1.25.001v.01a.625.625 0 1 0 1.25.001zm-.463 2.346a.625.625 0 0 0-1.155-.479l-.003.01a.625.625 0 0 0 1.154.48z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M13.5 3.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25m-3.497 2.728a.625.625 0 0 0 .952-.762 4.875 4.875 0 1 1 0 8.318.625.625 0 0 0-.952-.762A4.86 4.86 0 0 1 8.625 10a4.86 4.86 0 0 1 1.378-3.397"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9035_11359",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var circleDottedAndCircleIcon = createIcon("circleDottedAndCircle", iconDefinition);
export {
  iconDefinition,
  circleDottedAndCircleIcon
};
