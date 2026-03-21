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

// src/nds-icons/src/textStrikethrough/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.091 9.125h6.21a.875.875 0 0 1 0 1.75h-2.634c.56.66.808 1.45.808 2.316 0 1.113-.55 2.028-1.39 2.637-.824.596-1.916.897-3.085.897s-2.26-.301-3.085-.898c-.84-.608-1.39-1.523-1.39-2.636a.875.875 0 0 1 1.75 0c0 .482.221.897.667 1.219.462.334 1.17.565 2.058.565s1.596-.23 2.058-.565c.446-.322.667-.737.667-1.22 0-.583-.176-1.003-.553-1.35-.402-.37-1.101-.715-2.263-.965H3.7a.875.875 0 1 1 0-1.75h2.633c-.56-.66-.808-1.45-.808-2.316 0-1.113.55-2.028 1.39-2.637.824-.596 1.916-.897 3.085-.897s2.26.301 3.085.897c.84.609 1.39 1.524 1.39 2.637a.875.875 0 1 1-1.75 0c0-.482-.221-.897-.666-1.219-.462-.334-1.171-.565-2.059-.565-.887 0-1.596.23-2.058.565-.445.322-.667.737-.667 1.22 0 .583.176 1.003.553 1.35.402.37 1.101.715 2.263.965"
  }, undefined, false, undefined, this)
};
var textStrikethroughFillIcon = createIcon("textStrikethroughFill", iconDefinition);
export {
  textStrikethroughFillIcon,
  iconDefinition
};
