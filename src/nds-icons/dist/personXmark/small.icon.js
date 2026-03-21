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

// src/nds-icons/src/personXmark/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.275 1.775c-.947 0-1.717.392-2.237 1.04-.508.633-.747 1.47-.747 2.338s.239 1.704.747 2.337c.52.648 1.29 1.04 2.237 1.04s1.717-.392 2.237-1.04c.508-.633.747-1.47.747-2.337 0-.869-.239-1.705-.747-2.338-.52-.648-1.29-1.04-2.237-1.04M5.013 3.597c.28-.348.689-.572 1.262-.572s.983.224 1.262.572c.292.364.472.904.472 1.556 0 .651-.18 1.191-.472 1.555-.28.348-.689.572-1.262.572s-.983-.224-1.262-.572c-.292-.364-.472-.904-.472-1.555 0-.652.18-1.192.472-1.556m6.755 1.664a.625.625 0 0 0-.884.884L12.139 7.4l-1.255 1.255a.625.625 0 1 0 .884.884l1.255-1.255 1.255 1.255a.625.625 0 0 0 .884-.884L13.907 7.4l1.255-1.255a.625.625 0 1 0-.884-.884l-1.255 1.255zM6.275 9.178c-2.197 0-4.167 1.07-5.007 2.713a1.48 1.48 0 0 0 .2 1.676c.355.414.91.658 1.487.658h6.64c.577 0 1.131-.244 1.486-.658a1.48 1.48 0 0 0 .201-1.676c-.84-1.643-2.81-2.713-5.007-2.713M2.38 12.461c.584-1.14 2.063-2.033 3.895-2.033s3.31.893 3.894 2.033c.032.06.04.11.034.154a.3.3 0 0 1-.071.14.72.72 0 0 1-.537.22h-6.64a.72.72 0 0 1-.537-.22.3.3 0 0 1-.071-.14.26.26 0 0 1 .033-.154"
  }, undefined, false, undefined, this)
};
var personXmarkSmallIcon = createIcon("personXmarkSmall", iconDefinition);
export {
  personXmarkSmallIcon,
  iconDefinition
};
