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

// src/nds-icons/src/figure2ArmsOpen/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.94 4.82c.6 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1-1.1.49-1.1 1.1.49 1.1 1.1 1.1m9.62 3.05L13.04 6.1c-.44-.52-1.08-.81-1.76-.81h-.43c-.68 0-1.32.3-1.76.81L8.01 7.36 6.93 6.1c-.44-.52-1.09-.81-1.77-.81h-.43c-.68 0-1.32.3-1.77.81L1.44 7.87c-.1.12-.15.27-.14.42s.08.29.2.39c.24.21.6.18.81-.06l1.37-1.6c-.02 1.55-.16 3.1-.44 4.62l-.23 1.26c-.06.31.15.61.46.67h.1c.27 0 .52-.2.57-.47l.23-1.26c.12-.66.22-1.34.29-2.01h.55c.07.67.17 1.35.29 2.01l.23 1.26c.06.31.35.52.67.46.31-.06.52-.36.46-.67l-.23-1.26c-.28-1.52-.42-3.08-.44-4.62L7.55 8.6s.03.03.04.05c.21.21.58.21.8 0l.05-.05L9.8 7.01c-.02 1.55-.17 3.11-.44 4.62l-.23 1.26c-.06.31.15.61.46.67s.61-.15.67-.46l.23-1.26c.12-.66.22-1.34.29-2.01h.55c.07.67.17 1.35.29 2.01l.23 1.26c.06.31.37.52.67.46.31-.06.52-.36.46-.67l-.23-1.26c-.28-1.52-.43-3.08-.44-4.62l1.37 1.6c.21.24.57.27.81.06s.27-.57.06-.81zm-2.4-4.15c0 .61-.5 1.1-1.1 1.1-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1 1.1.49 1.1 1.1"
  }, undefined, false, undefined, this)
};
var figure2ArmsOpenSmallIcon = createIcon("figure2ArmsOpenSmall", iconDefinition);
export {
  iconDefinition,
  figure2ArmsOpenSmallIcon
};
