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

// src/nds-icons/src/rectangleOnRectanglePlus/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10940_20701)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M12.625 11.225h.575A1.825 1.825 0 0 0 15.025 9.4V4.2A1.825 1.825 0 0 0 13.2 2.375h-8A1.825 1.825 0 0 0 3.375 4.2v.575H2.8A1.825 1.825 0 0 0 .975 6.6v2.89c.37-.288.792-.512 1.25-.655V6.6c0-.318.258-.575.575-.575h.575v2.632H3.4c.428 0 .84.068 1.225.194V4.2c0-.318.257-.575.575-.575h8c.318 0 .575.257.575.575v5.2a.575.575 0 0 1-.575.575H6.342c.324.363.582.786.755 1.25h4.278v.575a.575.575 0 0 1-.575.575H7.337a4 4 0 0 1-.129 1.25H10.8a1.825 1.825 0 0 0 1.825-1.825z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M3.4 15.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-1.667-3.5H2.9v-1.166a.5.5 0 0 1 1 0V12.1h1.166a.5.5 0 0 1 0 1H3.9v1.167a.5.5 0 0 1-1 0V13.1H1.733a.5.5 0 0 1 0-1"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10940_20701",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var rectangleOnRectanglePlusSmallIcon = createIcon("rectangleOnRectanglePlusSmall", iconDefinition);
export {
  rectangleOnRectanglePlusSmallIcon,
  iconDefinition
};
