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

// src/nds-icons/src/sun/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  fittedViewBox: "1.35 1.35 17.29 17.29",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10 14.86a.89.89 0 0 1 .89.89v2a.89.89 0 1 1-1.78 0v-2a.89.89 0 0 1 .89-.89m-4.695-1.423a.89.89 0 0 1 1.258 1.258L5.15 16.11a.89.89 0 0 1-1.258-1.258zm8.132 0a.89.89 0 0 1 1.258 0l1.414 1.414a.89.89 0 0 1-1.258 1.258l-1.415-1.414a.89.89 0 0 1 0-1.258M10 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8M4.25 9.11a.89.89 0 1 1 0 1.78h-2a.89.89 0 1 1 0-1.78zm13.5 0a.89.89 0 1 1 0 1.78h-2a.89.89 0 1 1 0-1.78zM3.89 3.89a.89.89 0 0 1 1.26 0l1.413 1.415a.89.89 0 0 1-1.258 1.258L3.89 5.15a.89.89 0 0 1 0-1.258m10.96-.002a.89.89 0 0 1 1.26 1.26l-1.415 1.413a.89.89 0 0 1-1.258-1.258zM10 1.36a.89.89 0 0 1 .89.89v2a.89.89 0 1 1-1.78 0v-2a.89.89 0 0 1 .89-.89"
  }, undefined, false, undefined, this)
};
var sunFillIcon = createIcon("sunFill", iconDefinition, "fill");
export {
  sunFillIcon,
  iconDefinition
};
