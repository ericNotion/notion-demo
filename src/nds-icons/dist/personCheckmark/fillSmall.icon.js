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

// src/nds-icons/src/personCheckmark/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.097 2.862c.505-.63 1.254-1.012 2.178-1.012.925 0 1.673.382 2.179 1.012.495.617.73 1.435.73 2.29 0 .856-.235 1.674-.73 2.291-.506.63-1.254 1.012-2.179 1.012s-1.673-.382-2.178-1.012c-.495-.617-.731-1.435-.731-2.29 0-.856.236-1.674.73-2.291m-2.762 9.063c.826-1.612 2.766-2.672 4.94-2.672 2.176 0 4.116 1.06 4.941 2.672.3.585.165 1.179-.19 1.594-.34.396-.873.631-1.43.631h-6.64c-.557 0-1.09-.235-1.43-.631a1.405 1.405 0 0 1-.19-1.594m13.662-6.542a.55.55 0 1 0-.944-.566l-2.007 3.346-1.103-1.288a.55.55 0 1 0-.835.716l1.6 1.867a.55.55 0 0 0 .889-.075z"
  }, undefined, false, undefined, this)
};
var personCheckmarkFillSmallIcon = createIcon("personCheckmarkFillSmall", iconDefinition);
export {
  personCheckmarkFillSmallIcon,
  iconDefinition
};
