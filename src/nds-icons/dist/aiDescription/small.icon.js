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

// src/nds-icons/src/aiDescription/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10430_11059)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M14.841 3.68a2.995 2.995 0 0 0-4.109 1.03l-4.227 7.06a.625.625 0 0 0 .436.938l3.673.595a.625.625 0 0 0 .2-1.234l-2.764-.448 3.755-6.269a1.746 1.746 0 0 1 3.004.015.625.625 0 1 0 1.08-.63 3 3 0 0 0-1.048-1.058"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M12.456 7.984a.848.848 0 1 0 .271-1.675.848.848 0 0 0-.271 1.675M6.292 3.203a2.997 2.997 0 0 1 4.261.272.625.625 0 0 1-.945.818 1.747 1.747 0 0 0-2.483-.159.625.625 0 1 1-.833-.931m1.692 4.056a.848.848 0 1 0 .271-1.675.848.848 0 0 0-.271 1.675M.72 8.708h6.161l-.749 1.25H.72a.625.625 0 1 1 0-1.25m0-2.666h5.59l-.015.084c-.067.415.01.82.194 1.166H.72a.625.625 0 1 1 0-1.25m4.588 5.333H.72a.625.625 0 1 0 0 1.25h4.523c-.122-.412-.1-.853.065-1.25m-.212-6.75a1.87 1.87 0 0 1-.24-1.25H.72a.625.625 0 0 0 0 1.25z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10430_11059",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var aiDescriptionSmallIcon = createIcon("aiDescriptionSmall", iconDefinition);
export {
  iconDefinition,
  aiDescriptionSmallIcon
};
