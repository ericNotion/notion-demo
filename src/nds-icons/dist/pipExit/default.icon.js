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

// src/nds-icons/src/pipExit/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.5 9.078a.55.55 0 0 1-.55-.55V5.7a.55.55 0 0 1 .55-.55h2.828a.55.55 0 0 1 0 1.1h-1.5l1.867 1.867a.55.55 0 0 1-.778.778L5.05 7.028v1.5a.55.55 0 0 1-.55.55"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M1.375 4.7c0-1.174.951-2.125 2.125-2.125h10c1.174 0 2.125.951 2.125 2.125v4.225h.875c1.174 0 2.125.951 2.125 2.125v4.25a2.125 2.125 0 0 1-2.125 2.125H10A2.125 2.125 0 0 1 7.875 15.3v-1.975H3.5A2.125 2.125 0 0 1 1.375 11.2zm6.5 7.375V11.05c0-1.174.951-2.125 2.125-2.125h4.375V4.7a.875.875 0 0 0-.875-.875h-10a.875.875 0 0 0-.875.875v6.5c0 .483.392.875.875.875zm1.25-1.025v4.25c0 .483.392.875.875.875h6.5a.875.875 0 0 0 .875-.875v-4.25a.875.875 0 0 0-.875-.875H10a.875.875 0 0 0-.875.875"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var pipExitIcon = createIcon("pipExit", iconDefinition);
export {
  pipExitIcon,
  iconDefinition
};
