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

// src/nds-icons/src/flowchart/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.8 2.575c-.787 0-1.425.638-1.425 1.425v.8c0 .787.638 1.425 1.425 1.425h3.575v.95H3.8c-.787 0-1.425.638-1.425 1.425v.8c0 .787.638 1.425 1.425 1.425h3.575v2.046l-.913-.913a.625.625 0 1 0-.884.884l2 2c.244.244.64.244.884 0l2-2a.625.625 0 1 0-.884-.884l-.953.953v-2.086H12.2c.787 0 1.425-.638 1.425-1.425v-.8c0-.787-.638-1.425-1.425-1.425H8.625v-.95H12.2c.787 0 1.425-.638 1.425-1.425V4c0-.787-.638-1.425-1.425-1.425zM3.625 4c0-.097.078-.175.175-.175h8.4c.097 0 .175.078.175.175v.8a.175.175 0 0 1-.175.175H3.8a.175.175 0 0 1-.175-.175zm0 4.6c0-.097.078-.175.175-.175h8.4c.097 0 .175.078.175.175v.8a.175.175 0 0 1-.175.175H3.8a.175.175 0 0 1-.175-.175z"
  }, undefined, false, undefined, this)
};
var flowchartSmallIcon = createIcon("flowchartSmall", iconDefinition);
export {
  iconDefinition,
  flowchartSmallIcon
};
