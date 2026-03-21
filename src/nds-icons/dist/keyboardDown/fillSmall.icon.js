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

// src/nds-icons/src/keyboardDown/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3 1.307a1.75 1.75 0 0 0-1.75 1.75v5.886c0 .966.784 1.75 1.75 1.75h10a1.75 1.75 0 0 0 1.75-1.75V3.057A1.75 1.75 0 0 0 13 1.307zm.32 2.613a.52.52 0 1 1 1.04 0 .52.52 0 0 1-1.04 0m2.6.52a.52.52 0 1 1 0-1.04.52.52 0 0 1 0 1.04m1.56-.52a.52.52 0 1 1 1.04 0 .52.52 0 0 1-1.04 0m2.6.52a.52.52 0 1 1 0-1.04.52.52 0 0 1 0 1.04m1.56-.52a.52.52 0 1 1 1.04 0 .52.52 0 0 1-1.04 0m-7.8 2.6a.52.52 0 1 1 0-1.04.52.52 0 0 1 0 1.04M5.4 6a.52.52 0 1 1 1.04 0A.52.52 0 0 1 5.4 6m2.6.52a.52.52 0 1 1 0-1.04.52.52 0 0 1 0 1.04M9.56 6a.52.52 0 1 1 1.04 0 .52.52 0 0 1-1.04 0m2.6.52a.52.52 0 1 1 0-1.04.52.52 0 0 1 0 1.04M3.32 8.08a.52.52 0 1 1 1.04 0 .52.52 0 0 1-1.04 0m2.563.539a.55.55 0 0 1 0-1.1h4.2a.55.55 0 0 1 0 1.1zm5.757-.539a.52.52 0 1 1 1.04 0 .52.52 0 0 1-1.04 0m-.412 4.752a.5.5 0 1 0-.584-.812l-2.536 1.822-2.536-1.822a.5.5 0 1 0-.584.812l2.828 2.032a.5.5 0 0 0 .584 0z"
  }, undefined, false, undefined, this)
};
var keyboardDownFillSmallIcon = createIcon("keyboardDownFillSmall", iconDefinition);
export {
  keyboardDownFillSmallIcon,
  iconDefinition
};
