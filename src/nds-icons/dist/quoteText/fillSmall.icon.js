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

// src/nds-icons/src/quoteText/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.25 3.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm-8.336 8a.75.75 0 0 0 0 1.5H13.25a.75.75 0 0 0 0-1.5zm-.75-1.917a.75.75 0 0 1 .75-.75H13.25a.75.75 0 0 1 0 1.5H2.914a.75.75 0 0 1-.75-.75m9.086-3.416a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM2.514 5.6a2.2 2.2 0 0 1 2.2-2.2h.258a.4.4 0 0 1 0 .8h-.258a1.4 1.4 0 0 0-1.397 1.31 1.429 1.429 0 1 1 1.14 2.29 1.943 1.943 0 0 1-1.943-1.943zm4.115 0a2.2 2.2 0 0 1 2.2-2.2h.257a.4.4 0 1 1 0 .8h-.257A1.4 1.4 0 0 0 7.43 5.51 1.429 1.429 0 1 1 8.57 7.8a1.943 1.943 0 0 1-1.94-1.943z"
  }, undefined, false, undefined, this)
};
var quoteTextFillSmallIcon = createIcon("quoteTextFillSmall", iconDefinition);
export {
  quoteTextFillSmallIcon,
  iconDefinition
};
