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

// src/nds-icons/src/calendarBadgeX/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9429_11606)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v6.233a4.6 4.6 0 0 0-1.25-.068v-4.6H4.375v7.935c0 .483.392.875.875.875h6.165a4.6 4.6 0 0 0 .069 1.25H5.25a2.125 2.125 0 0 1-2.125-2.125z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M9.537 8.843a.694.694 0 1 1-1.389 0 .694.694 0 0 1 1.389 0m-.694 3.009a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m0 2.315a.695.695 0 1 0 0-1.39.695.695 0 0 0 0 1.39m2.315-4.63a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m0 2.315a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m0 2.315a.694.694 0 1 0 0-1.39.694.694 0 0 0 0 1.39m2.314-4.63a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m-6.944 2.315a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m0 2.315a.695.695 0 1 0 0-1.39.695.695 0 0 0 0 1.39m6.944-2.315a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m.053 6.623a3.5 3.5 0 1 1 4.95-4.95 3.5 3.5 0 0 1-4.95 4.95m4.287-.619a.625.625 0 0 0 0-.884L16.84 16l.972-.972a.625.625 0 0 0-.884-.884l-.972.972-.973-.972a.625.625 0 1 0-.883.884l.972.972-.972.972a.625.625 0 0 0 .883.884l.973-.972.972.972c.244.244.64.244.884 0"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9429_11606",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var calendarBadgeXIcon = createIcon("calendarBadgeX", iconDefinition);
export {
  iconDefinition,
  calendarBadgeXIcon
};
