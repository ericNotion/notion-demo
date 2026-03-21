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

// src/nds-icons/src/lockSlash/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.826 3.757 6 6.294v1.089a2.426 2.426 0 0 0-2.025 2.392v5.4A2.425 2.425 0 0 0 6.4 17.6h7.2c.606 0 1.16-.222 1.585-.59l.983 1.147a.625.625 0 0 0 .95-.814l-.602-.701a.6.6 0 0 1-.127-.113l-11.4-13.3a.6.6 0 0 1-.093-.144l-.121-.142a.625.625 0 0 0-.95.814m4.824 7.818c0-.555.335-1.032.814-1.24l1.679 1.959a1.36 1.36 0 0 1-.593.514v1.242a.55.55 0 0 1-1.1 0v-1.242a1.35 1.35 0 0 1-.8-1.233M6.852 3.482l.837.976a2.75 2.75 0 0 1 5.06 1.492v1.4h-2.581l5.857 6.834v-4.41A2.426 2.426 0 0 0 14 7.384V5.95a4 4 0 0 0-7.148-2.468"
  }, undefined, false, undefined, this)
};
var lockSlashFillIcon = createIcon("lockSlashFill", iconDefinition);
export {
  lockSlashFillIcon,
  iconDefinition
};
