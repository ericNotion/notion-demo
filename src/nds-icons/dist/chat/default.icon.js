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

// src/nds-icons/src/chat/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M15.625 7.492V5.188A2.125 2.125 0 0 0 13.5 3.063h-10a2.125 2.125 0 0 0-2.125 2.125v6.5c0 1.173.951 2.124 2.125 2.124h.188v2.045a.625.625 0 0 0 1.006.496l3.231-2.486v.325c0 .905.733 1.638 1.638 1.638h3.262l2.558 1.968a.625.625 0 0 0 1.006-.496V15.83h.599c.904 0 1.637-.733 1.637-1.638V9.13c0-.905-.733-1.638-1.637-1.638zm-1.25-2.304v2.304H9.563c-.905 0-1.638.733-1.638 1.638v3.432h-.142a.63.63 0 0 0-.38.13l-2.465 1.896v-1.4a.625.625 0 0 0-.625-.626H3.5a.875.875 0 0 1-.875-.874v-6.5c0-.484.392-.875.875-.875h10c.483 0 .875.391.875.875M9.563 8.742h7.425c.214 0 .387.174.387.388v5.062a.387.387 0 0 1-.387.388h-1.224a.625.625 0 0 0-.625.625v.828l-1.72-1.324a.63.63 0 0 0-.382-.13H9.563a.39.39 0 0 1-.388-.387V9.13c0-.214.174-.388.388-.388"
  }, undefined, false, undefined, this)
};
var chatIcon = createIcon("chat", iconDefinition);
export {
  iconDefinition,
  chatIcon
};
