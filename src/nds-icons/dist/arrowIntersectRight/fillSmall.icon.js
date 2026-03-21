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

// src/nds-icons/src/arrowIntersectRight/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M14.05 4.418a.75.75 0 0 1 0 1.06l-1.98 1.98a.75.75 0 0 1-1.06-1.06l.697-.698h-.778a2.45 2.45 0 0 0-2.093 1.177L8.153 8l.683 1.123a2.45 2.45 0 0 0 2.093 1.177h.778l-.697-.698a.75.75 0 1 1 1.06-1.06l1.98 1.98a.75.75 0 0 1 0 1.06l-1.98 1.98a.75.75 0 0 1-1.06-1.06l.702-.703h-.783a3.95 3.95 0 0 1-3.375-1.897l-.28-.46-.28.463a3.95 3.95 0 0 1-3.375 1.897H2.48a.75.75 0 0 1 0-1.5h1.14a2.45 2.45 0 0 0 2.093-1.177L6.397 8l-.685-1.125A2.45 2.45 0 0 0 3.62 5.698H2.48a.75.75 0 1 1 0-1.5h1.14a3.95 3.95 0 0 1 3.375 1.897l.28.462.28-.46A3.95 3.95 0 0 1 10.93 4.2h.783l-.702-.702a.75.75 0 1 1 1.06-1.06z"
  }, undefined, false, undefined, this)
};
var arrowIntersectRightFillSmallIcon = createIcon("arrowIntersectRightFillSmall", iconDefinition);
export {
  iconDefinition,
  arrowIntersectRightFillSmallIcon
};
