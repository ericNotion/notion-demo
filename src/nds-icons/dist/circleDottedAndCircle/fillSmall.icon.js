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

// src/nds-icons/src/circleDottedAndCircle/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9035_11356)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M9.742 6.072a.625.625 0 0 0-1.155.48l.003.007a.625.625 0 0 0 1.155-.478zm.383 1.923a.625.625 0 1 0-1.25.001v.008a.625.625 0 1 0 1.25.001zm-.38 1.925a.625.625 0 1 0-1.155-.478l-.003.006a.625.625 0 0 0 1.155.48z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M10.9 2.975a5.025 5.025 0 1 0 0 10.05 5.025 5.025 0 0 0 0-10.05M8.837 4.838a3.775 3.775 0 1 1 0 6.324.624.624 0 0 0-.766-.662A3.76 3.76 0 0 1 7.125 8c0-.959.357-1.834.946-2.5a.625.625 0 0 0 .766-.662M5.105 2.975h-.01a.625.625 0 1 0 .001 1.25h.008a.625.625 0 1 0 0-1.25"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M7.02 3.355a.625.625 0 0 0-.48 1.155l.007.003a.625.625 0 0 0 .48-1.154zM3.658 4.51a.625.625 0 1 0-.477-1.155l-.01.004a.625.625 0 0 0 .48 1.154zm-1.225.818a.625.625 0 1 0-.883-.885l-.007.007a.625.625 0 0 0 .885.883zm-.82 1.224a.625.625 0 1 0-1.155-.48l-.003.009a.625.625 0 0 0 1.155.478zm-.288 1.444a.625.625 0 0 0-1.25 0v.01a.625.625 0 0 0 1.25-.002zm.285 1.446a.625.625 0 1 0-1.155.477l.003.01a.625.625 0 1 0 1.155-.48zm.818 1.225a.625.625 0 0 0-.885.883l.007.007a.625.625 0 1 0 .883-.885zm1.224.821a.625.625 0 0 0-.48 1.154l.009.004a.625.625 0 0 0 .477-1.156zm3.376 1.154a.625.625 0 1 0-.48-1.154l-.007.002a.625.625 0 1 0 .478 1.156zm-1.932-.867a.625.625 0 1 0-.001 1.25h.01a.625.625 0 0 0-.001-1.25z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9035_11356",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var circleDottedAndCircleFillSmallIcon = createIcon("circleDottedAndCircleFillSmall", iconDefinition);
export {
  iconDefinition,
  circleDottedAndCircleFillSmallIcon
};
