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

// src/nds-icons/src/textTranslate/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.946 4.174a.625.625 0 1 0-1.25 0v.648H7.619a.625.625 0 1 0 0 1.25h5.169c-.258.64-.722 1.487-1.466 2.381a10 10 0 0 1-1.075-1.564.625.625 0 0 0-1.095.603c.322.585.753 1.228 1.312 1.883A13 13 0 0 1 7.9 11.284a.625.625 0 0 0 .621 1.084 14.2 14.2 0 0 0 2.8-2.084c.756.727 1.68 1.443 2.801 2.084a.625.625 0 0 0 .622-1.084 13 13 0 0 1-2.564-1.91c1.06-1.242 1.663-2.445 1.936-3.302h.909a.625.625 0 1 0 0-1.25h-3.079zm-6.624 5.852.737 2.015a.625.625 0 0 0 1.174-.43l-2.6-7.109a.877.877 0 0 0-1.646 0l-2.599 7.11a.625.625 0 1 0 1.174.429l.736-2.015zm-.457-1.25h-2.11L3.81 5.891z"
  }, undefined, false, undefined, this)
};
var textTranslateSmallIcon = createIcon("textTranslateSmall", iconDefinition);
export {
  textTranslateSmallIcon,
  iconDefinition
};
