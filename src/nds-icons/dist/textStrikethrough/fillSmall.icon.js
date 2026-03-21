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

// src/nds-icons/src/textStrikethrough/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.079 7.25h4.961a.75.75 0 0 1 0 1.5h-2c.408.52.59 1.135.59 1.803 0 .908-.45 1.655-1.133 2.15-.67.484-1.553.727-2.497.727s-1.828-.243-2.497-.727c-.684-.495-1.133-1.242-1.133-2.15a.75.75 0 0 1 1.5 0c0 .368.168.685.513.934.359.26.915.443 1.617.443s1.258-.182 1.617-.442c.345-.25.513-.567.513-.935 0-.455-.136-.777-.426-1.044-.312-.287-.86-.56-1.783-.759h-4.96a.75.75 0 1 1 0-1.5h2c-.41-.52-.59-1.135-.59-1.803 0-.908.449-1.655 1.132-2.15.67-.484 1.553-.727 2.497-.727s1.828.243 2.497.727c.684.495 1.133 1.242 1.133 2.15a.75.75 0 0 1-1.5 0c0-.368-.168-.685-.512-.935-.36-.26-.916-.442-1.618-.442s-1.258.182-1.617.442c-.345.25-.513.567-.513.935 0 .455.137.777.426 1.043.312.287.86.561 1.783.76"
  }, undefined, false, undefined, this)
};
var textStrikethroughFillSmallIcon = createIcon("textStrikethroughFillSmall", iconDefinition);
export {
  textStrikethroughFillSmallIcon,
  iconDefinition
};
