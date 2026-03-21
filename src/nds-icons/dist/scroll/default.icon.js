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

// src/nds-icons/src/scroll/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.975 5.175a.55.55 0 1 0 0 1.1h4.05a.55.55 0 1 0 0-1.1zm-.55 2.692a.55.55 0 0 1 .55-.55h4.05a.55.55 0 1 1 0 1.1h-4.05a.55.55 0 0 1-.55-.55"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.4 4.861c0-1.092.883-1.975 1.975-1.975h8.55c1.092 0 1.975.883 1.975 1.975v7.889h2.075c.345 0 .625.28.625.625v1.8a1.973 1.973 0 0 1-1.975 1.975h-8.55A1.973 1.973 0 0 1 5.1 15.175V7.25H3.025a.625.625 0 0 1-.625-.625zM9.554 15.9h6.07a.723.723 0 0 0 .726-.725V14H9.5v1.175c0 .256-.049.5-.137.725zm-2.025 0c.4-.002.72-.325.72-.725v-1.8c0-.345.28-.625.626-.625h4.775V4.861a.723.723 0 0 0-.725-.725H6.213c.088.224.137.469.137.725v10.314c0 .402.323.725.725.725zM5.1 4.861a.723.723 0 0 0-.724-.725.723.723 0 0 0-.725.725V6H5.1z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var scrollIcon = createIcon("scroll", iconDefinition);
export {
  scrollIcon,
  iconDefinition
};
