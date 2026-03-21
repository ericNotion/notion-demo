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

// src/nds-icons/src/listNumber/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.088 3.026a.55.55 0 0 1 .27.474v4a.55.55 0 0 1-1.1 0V4.435l-.24.134a.55.55 0 1 1-.535-.962l1.059-.588a.55.55 0 0 1 .546.007M8.5 5.375a.625.625 0 1 0 0 1.25H16a.625.625 0 1 0 0-1.25zm0 8a.625.625 0 0 0 0 1.25H16a.625.625 0 1 0 0-1.25zM6 16.55H3.5a.55.55 0 0 1-.417-.908l1.923-2.24a.7.7 0 0 0 .166-.45.335.335 0 0 0-.266-.327l-.164-.035a.6.6 0 0 0-.245.004l-.03.007a.57.57 0 0 0-.426.44.55.55 0 1 1-1.08-.206 1.67 1.67 0 0 1 1.248-1.304l.029-.007c.24-.058.49-.061.732-.01l.164.035c.664.14 1.138.726 1.138 1.404 0 .427-.153.84-.432 1.165L4.697 15.45H6a.55.55 0 0 1 0 1.1"
  }, undefined, false, undefined, this)
};
var listNumberIcon = createIcon("listNumber", iconDefinition);
export {
  listNumberIcon,
  iconDefinition
};
