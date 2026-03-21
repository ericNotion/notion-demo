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

// src/nds-icons/src/rectangleStackBadgePlus/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.75 2.545a.55.55 0 0 1 .55-.55h5.4a.55.55 0 0 1 0 1.1H7.3a.55.55 0 0 1-.55-.55m-1.25 1.7a.55.55 0 1 0 0 1.1h9a.55.55 0 0 0 0-1.1zm-2.537 4.3c0-1.174.951-2.125 2.125-2.125h9.825c1.174 0 2.125.951 2.125 2.125v6.45a2.125 2.125 0 0 1-2.125 2.125h-6.45a4.6 4.6 0 0 0 .135-1.25h6.315a.875.875 0 0 0 .875-.875v-6.45a.875.875 0 0 0-.875-.875H5.088a.875.875 0 0 0-.875.875v2.86a4.7 4.7 0 0 0-1.25.112z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.963 12.656A3.502 3.502 0 0 0 4 19.5a3.5 3.5 0 1 0-1.037-6.844m-1.557 3.375c0-.345.28-.625.625-.625h1.375v-1.375a.625.625 0 0 1 1.25 0v1.375h1.375a.625.625 0 0 1 0 1.25H4.656v1.375a.625.625 0 1 1-1.25 0v-1.375H2.031a.625.625 0 0 1-.625-.625"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var rectangleStackBadgePlusIcon = createIcon("rectangleStackBadgePlus", iconDefinition);
export {
  rectangleStackBadgePlusIcon,
  iconDefinition
};
