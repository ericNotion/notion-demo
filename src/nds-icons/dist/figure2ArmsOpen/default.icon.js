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

// src/nds-icons/src/figure2ArmsOpen/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.95 5.86a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7m1.471 2.31L7.4 8.144v.995a28.3 28.3 0 0 0 .456 5l.435 2.395a.55.55 0 1 1-1.082.196l-.436-2.395q-.19-1.046-.304-2.103H5.431a29 29 0 0 1-.304 2.103l-.436 2.395a.55.55 0 0 1-1.082-.196l.435-2.395A28.3 28.3 0 0 0 4.5 9.086v-.94l-.021.023-2.161 2.522a.55.55 0 0 1-.835-.716l2.16-2.521a2.35 2.35 0 0 1 1.785-.821h1.044c.686 0 1.338.3 1.784.82L10 9.489l1.744-2.034a2.35 2.35 0 0 1 1.784-.821h1.044c.686 0 1.338.3 1.784.82l2.162 2.522a.55.55 0 0 1-.836.716l-2.16-2.522-.022-.023v.993c.003 1.677.156 3.35.456 5l.435 2.396a.55.55 0 0 1-1.082.196l-.435-2.395q-.19-1.046-.305-2.103h-1.038a29 29 0 0 1-.304 2.103l-.436 2.395a.55.55 0 0 1-1.082-.196l.435-2.395c.303-1.668.456-3.36.456-5.054v-.94l-.021.023-2.152 2.51a.547.547 0 0 1-.772.082l-.013-.01a1 1 0 0 1-.07-.072zM15.4 4.51a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0"
  }, undefined, false, undefined, this)
};
var figure2ArmsOpenIcon = createIcon("figure2ArmsOpen", iconDefinition);
export {
  iconDefinition,
  figure2ArmsOpenIcon
};
