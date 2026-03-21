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

// src/nds-icons/src/globeAmericas/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0M8 3.05a4.94 4.94 0 0 0-3.7 1.662v.522a.8.8 0 0 0 .234.566l2.243 2.243a.4.4 0 0 1 0 .566l-.258.258a.8.8 0 0 0-.234.565v.677a.8.8 0 0 0 .234.565l.307.307a.8.8 0 0 1 .234.566v.245a.715.715 0 0 0 1.295.42l1.642-2.267a.8.8 0 0 0 .152-.47V8.328a.8.8 0 0 0-.219-.55l-.378-.4a.8.8 0 0 0-.58-.25H7.765a.47.47 0 1 1 .193-.9l.252.114a.65.65 0 0 0 .917-.593V5.21a.8.8 0 0 1 .329-.647l1.101-.8A4.93 4.93 0 0 0 8 3.05"
  }, undefined, false, undefined, this)
};
var globeAmericasFillSmallIcon = createIcon("globeAmericasFillSmall", iconDefinition);
export {
  iconDefinition,
  globeAmericasFillSmallIcon
};
