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

// src/nds-icons/src/squareGrid2X2/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.2 2.575c-.787 0-1.425.638-1.425 1.425v2c0 .787.638 1.425 1.425 1.425H6c.787 0 1.425-.638 1.425-1.425V4c0-.787-.638-1.425-1.425-1.425zM3.025 4c0-.097.079-.175.175-.175H6c.097 0 .175.078.175.175v2A.175.175 0 0 1 6 6.175H3.2A.175.175 0 0 1 3.025 6zM10 2.575c-.787 0-1.425.638-1.425 1.425v2c0 .787.638 1.425 1.425 1.425h2.8c.787 0 1.425-.638 1.425-1.425V4c0-.787-.638-1.425-1.425-1.425zM9.825 4c0-.097.078-.175.175-.175h2.8c.097 0 .175.078.175.175v2a.175.175 0 0 1-.175.175H10A.175.175 0 0 1 9.825 6zM3.2 8.575c-.787 0-1.425.638-1.425 1.425v2c0 .787.638 1.425 1.425 1.425H6c.787 0 1.425-.638 1.425-1.425v-2c0-.787-.638-1.425-1.425-1.425zM3.025 10c0-.097.079-.175.175-.175H6c.097 0 .175.078.175.175v2a.175.175 0 0 1-.175.175H3.2A.175.175 0 0 1 3.025 12zM10 8.575c-.787 0-1.425.638-1.425 1.425v2c0 .787.638 1.425 1.425 1.425h2.8c.787 0 1.425-.638 1.425-1.425v-2c0-.787-.638-1.425-1.425-1.425zM9.825 10c0-.097.078-.175.175-.175h2.8c.097 0 .175.078.175.175v2a.175.175 0 0 1-.175.175H10A.175.175 0 0 1 9.825 12z"
  }, undefined, false, undefined, this)
};
var squareGrid2X2SmallIcon = createIcon("squareGrid2X2Small", iconDefinition);
export {
  squareGrid2X2SmallIcon,
  iconDefinition
};
