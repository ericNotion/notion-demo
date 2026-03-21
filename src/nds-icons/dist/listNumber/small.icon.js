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

// src/nds-icons/src/listNumber/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.139 2.304a.57.57 0 0 0-.571-.007l-.847.47a.575.575 0 0 0 .551 1.01V6a.575.575 0 0 0 1.15 0V2.8a.57.57 0 0 0-.283-.496M6.8 4.175a.625.625 0 1 0 0 1.25h6a.625.625 0 1 0 0-1.25zM4.004 9.079a1.5 1.5 0 0 0-.645.01l-.024.005a1.48 1.48 0 0 0-1.1 1.148.575.575 0 1 0 1.13.216.32.32 0 0 1 .24-.246l.024-.006a.3.3 0 0 1 .137-.002l.131.028a.13.13 0 0 1 .106.13c0 .1-.036.196-.1.271l-1.54 1.792a.575.575 0 0 0 .437.95h2a.575.575 0 0 0 0-1.15h-.748l.723-.842c.244-.284.378-.646.378-1.02 0-.607-.424-1.13-1.017-1.256zM6.8 10.575a.625.625 0 1 0 0 1.25h6a.625.625 0 1 0 0-1.25z"
  }, undefined, false, undefined, this)
};
var listNumberSmallIcon = createIcon("listNumberSmall", iconDefinition);
export {
  listNumberSmallIcon,
  iconDefinition
};
