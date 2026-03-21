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

// src/nds-icons/src/calendarBadgeClock/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9429_10329)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M2.45 4.25a1.8 1.8 0 0 1 1.8-1.8h7.5a1.8 1.8 0 0 1 1.8 1.8v.182H2.45zm0 1.182h11.1v3.34a3.95 3.95 0 0 0-2.15.071.568.568 0 1 0-.986.475c-.432.289-.804.66-1.093 1.092a.568.568 0 1 0-.477.987 3.94 3.94 0 0 0-.072 2.153H4.25a1.8 1.8 0 0 1-1.8-1.8zm4.603 2.186a.568.568 0 1 0 0-1.136.568.568 0 0 0 0 1.136m.568 1.326a.568.568 0 1 0-1.136 0 .568.568 0 0 0 1.136 0m-.568 2.462a.568.568 0 1 0 0-1.136.568.568 0 0 0 0 1.136M9.515 7.05a.568.568 0 1 0-1.136 0 .568.568 0 0 0 1.136 0m-.568 2.462a.568.568 0 1 0 0-1.136.568.568 0 0 0 0 1.136m1.894-1.894a.568.568 0 1 0 0-1.136.568.568 0 0 0 0 1.136M5.727 8.944a.568.568 0 1 0-1.136 0 .568.568 0 0 0 1.136 0m-.568 2.462a.568.568 0 1 0 0-1.136.568.568 0 0 0 0 1.136"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M12.6 15.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-.5-3.5v-1.167a.5.5 0 0 1 1 0v1.665a.5.5 0 0 1-.5.502h-1.665a.5.5 0 1 1 0-1z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9429_10329",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var calendarBadgeClockFillSmallIcon = createIcon("calendarBadgeClockFillSmall", iconDefinition);
export {
  iconDefinition,
  calendarBadgeClockFillSmallIcon
};
