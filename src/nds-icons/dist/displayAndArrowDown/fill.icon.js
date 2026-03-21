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

// src/nds-icons/src/displayAndArrowDown/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.083 7.808 10.65 9.241V2.25a.625.625 0 1 0-1.25 0v6.991L7.967 7.808a.625.625 0 0 0-.884.884l2.5 2.5.067.058.005.004a.62.62 0 0 0 .458.115h.002a.6.6 0 0 0 .285-.119l.067-.058 2.5-2.5a.625.625 0 0 0-.884-.884"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.4 4.875H4.5a.875.875 0 0 0-.875.875v7.5c0 .483.392.875.875.875h11a.875.875 0 0 0 .875-.875v-7.5a.875.875 0 0 0-.875-.875h-3.85v-1.25h3.85c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125H12v1h1.5a.625.625 0 1 1 0 1.25h-7a.625.625 0 1 1 0-1.25H8v-1H4.5a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125h3.9z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.4 6.88V5.63H4.87a.5.5 0 0 0-.5.5v6.75a.5.5 0 0 0 .5.5h10.25a.5.5 0 0 0 .5-.5V6.13a.5.5 0 0 0-.5-.5h-3.47v1.25a1.626 1.626 0 0 1 2.024 2.52l-2.5 2.499a1.625 1.625 0 0 1-2.298 0l-2.5-2.5A1.625 1.625 0 0 1 8.4 6.88"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var displayAndArrowDownFillIcon = createIcon("displayAndArrowDownFill", iconDefinition);
export {
  iconDefinition,
  displayAndArrowDownFillIcon
};
