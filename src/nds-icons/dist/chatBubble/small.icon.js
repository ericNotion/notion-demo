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

// src/nds-icons/src/chatBubble/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "1.32 2.19 13.36 12.32",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M13.425 7.883c0-2.294-1.961-4.31-5.116-4.434L8 3.444c-3.335 0-5.426 2.071-5.426 4.44l.005.207c.053 1.033.497 1.975 1.251 2.709a.63.63 0 0 1 .181.547 6 6 0 0 1-.603 1.84c.764-.138 1.466-.493 2.095-1.009l.063-.045a.63.63 0 0 1 .506-.072A7 7 0 0 0 8 12.322l.309-.005c3.154-.124 5.116-2.14 5.116-4.434m1.242.3c-.164 2.978-2.767 5.24-6.31 5.383L8 13.572a8.3 8.3 0 0 1-1.962-.229c-1.09.81-2.411 1.286-3.9 1.132a.625.625 0 0 1-.405-1.032c.537-.617.835-1.31.986-1.996a5.26 5.26 0 0 1-1.388-3.29l-.007-.274c0-3.226 2.832-5.69 6.676-5.69l.358.007c3.66.148 6.317 2.558 6.317 5.683z"
  }, undefined, false, undefined, this)
};
var chatBubbleSmallIcon = createIcon("chatBubbleSmall", iconDefinition);
export {
  iconDefinition,
  chatBubbleSmallIcon
};
