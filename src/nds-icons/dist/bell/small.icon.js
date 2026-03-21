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

// src/nds-icons/src/bell/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 2.115c-.854 0-1.569.554-1.824 1.315a3.96 3.96 0 0 0-2.138 3.518v.895c0 .655-.238 1.287-.669 1.78l-.616.704c-.75.858-.141 2.202 1 2.202H5.89a2.156 2.156 0 0 0 4.218 0h2.139c1.14 0 1.75-1.344.999-2.202l-.616-.704a2.7 2.7 0 0 1-.669-1.78v-.895A3.96 3.96 0 0 0 9.824 3.43 1.92 1.92 0 0 0 8 2.115m-.669 1.839A.68.68 0 0 1 8 3.365c.34 0 .623.253.669.589l.048.353.33.138a2.71 2.71 0 0 1 1.665 2.503v.895c0 .958.348 1.882.978 2.603l.616.704a.078.078 0 0 1-.058.129H3.752a.078.078 0 0 1-.058-.129l.616-.704c.63-.72.978-1.645.978-2.603v-.895c0-1.126.686-2.093 1.665-2.503l.33-.138zM8 13.084c-.394 0-.735-.226-.9-.555h1.8c-.165.33-.506.556-.9.556"
  }, undefined, false, undefined, this)
};
var bellSmallIcon = createIcon("bellSmall", iconDefinition);
export {
  iconDefinition,
  bellSmallIcon
};
