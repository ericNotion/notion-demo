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

// src/nds-icons/src/blockColor/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.635 4.69h.485v.165c0 .754.611 1.365 1.365 1.365h7.03c.754 0 1.365-.611 1.365-1.365V4.69h.115c.091 0 .165.074.165.165v1.619a.165.165 0 0 1-.165.165H8.74c-.726 0-1.315.588-1.315 1.315v.361a1.365 1.365 0 0 0-1.16 1.35v2.96c0 .754.611 1.365 1.365 1.365h.74c.754 0 1.365-.611 1.365-1.365v-2.96c0-.684-.503-1.25-1.16-1.35v-.361c0-.092.074-.165.165-.165h4.255c.726 0 1.315-.59 1.315-1.315V4.855c0-.726-.589-1.315-1.315-1.315h-.115v-.165c0-.754-.611-1.365-1.365-1.365h-7.03c-.754 0-1.365.611-1.365 1.365v.165h-.485a.575.575 0 1 0 0 1.15M4.37 3.375c0-.063.051-.115.115-.115h7.03c.063 0 .115.052.115.115v1.48a.115.115 0 0 1-.115.115h-7.03a.115.115 0 0 1-.115-.115zm3.145 6.29c0-.063.052-.115.115-.115h.74c.064 0 .115.052.115.115v2.96a.115.115 0 0 1-.115.115h-.74a.115.115 0 0 1-.115-.115z"
  }, undefined, false, undefined, this)
};
var blockColorSmallIcon = createIcon("blockColorSmall", iconDefinition);
export {
  iconDefinition,
  blockColorSmallIcon
};
