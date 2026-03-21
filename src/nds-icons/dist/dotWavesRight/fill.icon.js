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

// src/nds-icons/src/dotWavesRight/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.655 1.92a.875.875 0 1 0-1.23 1.245 9.68 9.68 0 0 1 2.883 6.898 9.68 9.68 0 0 1-2.847 6.861.875.875 0 1 0 1.238 1.237 11.43 11.43 0 0 0 3.36-8.098c0-3.183-1.305-6.066-3.404-8.142M6.1 10.063a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.296 4.13a.875.875 0 0 1 1.238 0 8.37 8.37 0 0 1 2.46 5.933 8.37 8.37 0 0 1-2.46 5.933.875.875 0 0 1-1.238-1.238 6.62 6.62 0 0 0 1.949-4.695 6.62 6.62 0 0 0-1.949-4.696.875.875 0 0 1 0-1.238"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.368 6.295a.875.875 0 0 0-1.237 1.237c.65.65 1.05 1.544 1.05 2.53 0 .987-.4 1.882-1.05 2.532a.875.875 0 1 0 1.237 1.237 5.32 5.32 0 0 0 1.563-3.768 5.3 5.3 0 0 0-1.563-3.768"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var dotWavesRightFillIcon = createIcon("dotWavesRightFill", iconDefinition);
export {
  iconDefinition,
  dotWavesRightFillIcon
};
