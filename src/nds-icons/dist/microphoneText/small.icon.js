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

// src/nds-icons/src/microphoneText/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9660_12711)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M10.622 1.615A2.425 2.425 0 0 0 8.197 4.04v2.88a2.425 2.425 0 1 0 4.85 0V4.04a2.425 2.425 0 0 0-2.425-2.425M9.447 4.04a1.175 1.175 0 0 1 2.35 0v2.88a1.175 1.175 0 1 1-2.35 0zM1.8 3.175a.625.625 0 1 0 0 1.25h5.65v-1.25zm0 2.8a.625.625 0 1 0 0 1.25h5.65v-1.25z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M7.209 8.642a.625.625 0 0 0-1.029.71 5.4 5.4 0 0 0 3.817 2.297v1.306H7.382a.625.625 0 1 0 0 1.25h6.48a.625.625 0 0 0 0-1.25h-2.615v-1.306a5.4 5.4 0 0 0 3.817-2.297.625.625 0 1 0-1.028-.71 4.14 4.14 0 0 1-3.414 1.793A4.14 4.14 0 0 1 7.21 8.642m-5.41.133a.625.625 0 0 0 0 1.25h3.95l-.061-.11a5.4 5.4 0 0 1-.439-1.086l-.015-.054z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M7.232 11.575H1.8a.625.625 0 1 0 0 1.25h4.212l.012-.06c.103-.496.476-.827.92-1.048z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9660_12711",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var microphoneTextSmallIcon = createIcon("microphoneTextSmall", iconDefinition);
export {
  microphoneTextSmallIcon,
  iconDefinition
};
