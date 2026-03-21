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

// src/nds-icons/src/keyboard/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.32 5.92a.52.52 0 1 1 1.04 0 .52.52 0 0 1-1.04 0m2.6-.52a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04M8 5.4a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04M3.84 7.48a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04M3.84 9.56a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.043-.041a.55.55 0 1 0 0 1.1h4.2a.55.55 0 0 0 0-1.1zm6.277.041a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M1.25 5.057c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v5.886a1.75 1.75 0 0 1-1.75 1.75H3a1.75 1.75 0 0 1-1.75-1.75zM3 4.407a.65.65 0 0 0-.65.65v5.886c0 .359.291.65.65.65h10a.65.65 0 0 0 .65-.65V5.057a.65.65 0 0 0-.65-.65z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var keyboardSmallIcon = createIcon("keyboardSmall", iconDefinition);
export {
  keyboardSmallIcon,
  iconDefinition
};
