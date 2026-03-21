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

// src/nds-icons/src/cursorClick/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M8.652 8.831a.474.474 0 0 1 .713-.462l.064.045 4.99 4.207a.474.474 0 0 1-.251.833l-1.457.165 1.66 2.983a.92.92 0 1 1-1.611.894l-1.608-2.888-.842 1.242a.474.474 0 0 1-.864-.212L8.652 8.83ZM6.2 12.563a.875.875 0 1 1 1.237 1.238l-1.768 1.767a.875.875 0 1 1-1.237-1.237l1.767-1.768Zm-.7-3.438a.875.875 0 1 1 0 1.75H3a.875.875 0 0 1 0-1.75h2.5Zm11.5 0a.875.875 0 0 1 0 1.75h-2.5a.875.875 0 0 1 0-1.75H17ZM4.432 4.432a.875.875 0 0 1 1.237 0l1.768 1.767a.875.875 0 1 1-1.238 1.238L4.432 5.669a.875.875 0 0 1 0-1.237Zm9.899 0a.875.875 0 1 1 1.237 1.237l-1.767 1.768a.875.875 0 1 1-1.238-1.238l1.768-1.767ZM10 2.125c.483 0 .875.392.875.875v2.5a.875.875 0 0 1-1.75 0V3c0-.483.392-.875.875-.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cursorClickIcon = createIcon("cursorClick", iconDefinition);
export {
  iconDefinition,
  cursorClickIcon
};
