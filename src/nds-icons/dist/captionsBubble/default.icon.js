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

// src/nds-icons/src/captionsBubble/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.95 10.013a.55.55 0 0 1 .55-.55h3a.55.55 0 1 1 0 1.1h-3a.55.55 0 0 1-.55-.55m5.41-.55a.55.55 0 0 0 0 1.1h4.14a.55.55 0 0 0 0-1.1zm-4.86 2a.55.55 0 0 0 0 1.1h1a.55.55 0 1 0 0-1.1zm2.5 0a.55.55 0 0 0 0 1.1h3.828a.55.55 0 0 0 0-1.1zm5.5 0a.55.55 0 0 0 0 1.1h1a.55.55 0 0 0 0-1.1z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M17.625 5.75A2.125 2.125 0 0 0 15.5 3.625h-11A2.125 2.125 0 0 0 2.375 5.75v7.5c0 1.174.951 2.125 2.125 2.125h1.188v2.482a.625.625 0 0 0 1.006.496l3.87-2.978H15.5a2.125 2.125 0 0 0 2.125-2.125zM15.5 4.875c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-5.148a.63.63 0 0 0-.38.13l-3.034 2.333V14.75a.625.625 0 0 0-.625-.625H4.5a.875.875 0 0 1-.875-.875v-7.5c0-.483.392-.875.875-.875z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var captionsBubbleIcon = createIcon("captionsBubble", iconDefinition);
export {
  iconDefinition,
  captionsBubbleIcon
};
