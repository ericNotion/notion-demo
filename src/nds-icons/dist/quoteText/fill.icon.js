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

// src/nds-icons/src/quoteText/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M13.594 3.875a.875.875 0 1 0 0 1.75H17a.875.875 0 0 0 0-1.75zM3 14.375a.875.875 0 0 0 0 1.75h14a.875.875 0 0 0 0-1.75zm-.875-2.625c0-.483.392-.875.875-.875h14a.875.875 0 0 1 0 1.75H3a.875.875 0 0 1-.875-.875m11.469-4.375a.875.875 0 1 0 0 1.75H17a.875.875 0 0 0 0-1.75zM2.5 7a2.75 2.75 0 0 1 2.75-2.75h.321a.5.5 0 0 1 0 1H5.25a1.75 1.75 0 0 0-1.746 1.638A1.786 1.786 0 1 1 4.929 9.75 2.43 2.43 0 0 1 2.5 7.32zm5.143 0a2.75 2.75 0 0 1 2.75-2.75h.321a.5.5 0 1 1 0 1h-.321a1.75 1.75 0 0 0-1.747 1.638 1.786 1.786 0 1 1 1.425 2.862 2.43 2.43 0 0 1-2.428-2.43z"
  }, undefined, false, undefined, this)
};
var quoteTextFillIcon = createIcon("quoteTextFill", iconDefinition);
export {
  quoteTextFillIcon,
  iconDefinition
};
