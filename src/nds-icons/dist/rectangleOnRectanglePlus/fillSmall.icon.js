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

// src/nds-icons/src/rectangleOnRectanglePlus/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.407 10.05c-.483-.57-1.125-1-1.857-1.223V4.5a.95.95 0 0 1 .95-.95h7.4a.95.95 0 0 1 .95.95v4.6a.95.95 0 0 1-.95.95zM3.45 8.657V5.95H3.1a.95.95 0 0 0-.95.95v1.96a4 4 0 0 1 1.3-.203m7.05 3.793H7.34a3.9 3.9 0 0 0-.272-1.3h4.382v.35a.95.95 0 0 1-.95.95M3.4 15.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6m-1.667-3.5a.5.5 0 1 0 0 1H2.9v1.167a.5.5 0 0 0 1 0V13.1h1.166a.5.5 0 0 0 0-1H3.9v-1.166a.5.5 0 1 0-1 0V12.1z"
  }, undefined, false, undefined, this)
};
var rectangleOnRectanglePlusFillSmallIcon = createIcon("rectangleOnRectanglePlusFillSmall", iconDefinition);
export {
  rectangleOnRectanglePlusFillSmallIcon,
  iconDefinition
};
