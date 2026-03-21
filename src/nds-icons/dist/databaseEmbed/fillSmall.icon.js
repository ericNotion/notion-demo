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

// src/nds-icons/src/databaseEmbed/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.25 5.8a.75.75 0 0 0 1.5 0V4.6a2.35 2.35 0 0 0-2.35-2.35h-1.2a.75.75 0 0 0 0 1.5h1.2c.47 0 .85.38.85.85zm-8.5 4.4a.75.75 0 0 0-1.5 0v1.2a2.35 2.35 0 0 0 2.35 2.35h1.2a.75.75 0 0 0 0-1.5H4.6a.85.85 0 0 1-.85-.85zm5.7 2.8a.75.75 0 0 1 .75-.75h1.2c.47 0 .85-.38.85-.85v-1.2a.75.75 0 1 1 1.5 0v1.2a2.35 2.35 0 0 1-2.35 2.35h-1.2a.75.75 0 0 1-.75-.75m-5.7-7.2a.75.75 0 0 1-1.5 0V4.6A2.35 2.35 0 0 1 4.6 2.25h1.2a.75.75 0 0 1 0 1.5H4.6a.85.85 0 0 0-.85.85z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.975 5.6c0-.787.638-1.425 1.425-1.425h3.2c.787 0 1.425.638 1.425 1.425v4.8c0 .787-.638 1.425-1.425 1.425H6.4A1.425 1.425 0 0 1 4.975 10.4zM6.4 5.425a.175.175 0 0 0-.175.175v.893H7.56V5.425zm2.04 0v1.068h1.335V5.6a.175.175 0 0 0-.175-.175zm0 1.948v1.254h1.335V7.373zm-.88 0H6.225v1.254H7.56zm0 2.134H6.225v.893c0 .097.078.175.175.175h1.16zm.88 1.068H9.6a.175.175 0 0 0 .175-.175v-.893H8.44z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var databaseEmbedFillSmallIcon = createIcon("databaseEmbedFillSmall", iconDefinition);
export {
  iconDefinition,
  databaseEmbedFillSmallIcon
};
