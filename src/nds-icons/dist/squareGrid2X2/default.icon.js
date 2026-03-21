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

// src/nds-icons/src/squareGrid2X2/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4 3.375c-.897 0-1.625.728-1.625 1.625v2.5c0 .897.728 1.625 1.625 1.625h3.5c.897 0 1.625-.728 1.625-1.625V5c0-.897-.728-1.625-1.625-1.625zM3.625 5c0-.207.168-.375.375-.375h3.5c.207 0 .375.168.375.375v2.5a.375.375 0 0 1-.375.375H4a.375.375 0 0 1-.375-.375zM4 10.875c-.897 0-1.625.727-1.625 1.625V15c0 .898.728 1.625 1.625 1.625h3.5c.897 0 1.625-.727 1.625-1.625v-2.5c0-.898-.728-1.625-1.625-1.625zM3.625 12.5c0-.207.168-.375.375-.375h3.5c.207 0 .375.168.375.375V15a.375.375 0 0 1-.375.375H4A.375.375 0 0 1 3.625 15zm7.25-7.5c0-.897.727-1.625 1.625-1.625H16c.898 0 1.625.728 1.625 1.625v2.5c0 .897-.727 1.625-1.625 1.625h-3.5A1.625 1.625 0 0 1 10.875 7.5zm1.625-.375a.375.375 0 0 0-.375.375v2.5c0 .207.168.375.375.375H16a.375.375 0 0 0 .375-.375V5A.375.375 0 0 0 16 4.625zm0 6.25c-.898 0-1.625.727-1.625 1.625V15c0 .898.727 1.625 1.625 1.625H16c.898 0 1.625-.727 1.625-1.625v-2.5c0-.898-.727-1.625-1.625-1.625zm-.375 1.625c0-.207.168-.375.375-.375H16c.207 0 .375.168.375.375V15a.375.375 0 0 1-.375.375h-3.5a.375.375 0 0 1-.375-.375z"
  }, undefined, false, undefined, this)
};
var squareGrid2X2Icon = createIcon("squareGrid2X2", iconDefinition);
export {
  squareGrid2X2Icon,
  iconDefinition
};
