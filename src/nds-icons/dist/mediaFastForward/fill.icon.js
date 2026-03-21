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

// src/nds-icons/src/mediaFastForward/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.76 14.444c-.67.67-1.004 1.004-1.287 1.046a.87.87 0 0 1-.829-.343c-.17-.23-.17-.703-.17-1.65V6.503c0-.947 0-1.42.17-1.65a.87.87 0 0 1 .829-.343c.283.042.617.377 1.287 1.046l3.497 3.497c.31.31.464.465.53.64a.87.87 0 0 1 0 .614c-.066.175-.22.33-.53.64zm4.1-8.722c0-.378 0-.566.067-.714a.75.75 0 0 1 .375-.375c.147-.066.335-.066.713-.066h.733c.377 0 .566 0 .713.066a.75.75 0 0 1 .375.375c.067.148.067.336.067.714v8.556c0 .378 0 .566-.067.714a.75.75 0 0 1-.375.375c-.147.066-.336.066-.713.066h-.733c-.378 0-.566 0-.713-.066a.75.75 0 0 1-.375-.375c-.067-.148-.067-.336-.067-.714zM3.096 15.49c.283-.042.618-.377 1.287-1.046l3.497-3.497c.31-.31.464-.465.53-.64a.87.87 0 0 0 0-.614c-.066-.175-.22-.33-.53-.64L4.383 5.556c-.67-.67-1.004-1.004-1.287-1.046a.87.87 0 0 0-.829.343c-.17.23-.17.703-.17 1.65v6.994c0 .947 0 1.42.17 1.65a.87.87 0 0 0 .829.343"
  }, undefined, false, undefined, this)
};
var mediaFastForwardFillIcon = createIcon("mediaFastForwardFill", iconDefinition);
export {
  mediaFastForwardFillIcon,
  iconDefinition
};
