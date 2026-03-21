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

// src/nds-icons/src/databaseEmbed/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.6 2.375A2.225 2.225 0 0 0 2.375 4.6v1.2a.625.625 0 1 0 1.25 0V4.6c0-.538.437-.975.975-.975h1.2a.625.625 0 1 0 0-1.25zm5.6 0a.625.625 0 1 0 0 1.25h1.2c.539 0 .975.437.975.975v1.2a.625.625 0 1 0 1.25 0V4.6A2.225 2.225 0 0 0 11.4 2.375zm-3.8 1.85c-.76 0-1.375.616-1.375 1.375v4.8c0 .76.616 1.375 1.375 1.375h3.2c.76 0 1.375-.616 1.375-1.375V5.6c0-.76-.615-1.375-1.375-1.375zM6.175 5.6c0-.124.1-.225.225-.225h1.085v1.043h-1.31zm2.34.818V5.375H9.6c.124 0 .225.1.225.225v.818zm-2.34 2.134V7.448h1.31v1.104zm2.34 0V7.448h1.31v1.104zM6.175 10.4v-.818h1.31v1.043H6.4a.225.225 0 0 1-.225-.225m2.34.225V9.582h1.31v.818c0 .124-.1.225-.225.225zM13 9.575a.625.625 0 0 0-.625.625v1.2a.975.975 0 0 1-.975.975h-1.2a.625.625 0 1 0 0 1.25h1.2a2.225 2.225 0 0 0 2.225-2.225v-1.2A.625.625 0 0 0 13 9.575m-10 0a.625.625 0 0 0-.625.625v1.2c0 1.229.996 2.225 2.225 2.225h1.2a.625.625 0 1 0 0-1.25H4.6a.975.975 0 0 1-.975-.975v-1.2A.625.625 0 0 0 3 9.575"
  }, undefined, false, undefined, this)
};
var databaseEmbedSmallIcon = createIcon("databaseEmbedSmall", iconDefinition);
export {
  iconDefinition,
  databaseEmbedSmallIcon
};
